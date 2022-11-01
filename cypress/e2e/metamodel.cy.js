import runtime from '../../dist/system-runtime.js'

describe('System Runtime metamodel component', function () {
  it('exists', function () {
    const metamodel = runtime.require('metamodel')

    expect(metamodel).to.not.be.undefined
  })

  it('can add a schema', function () {
    const metamodel = runtime.require('metamodel')
    metamodel.schema({
      _name: 'PersonTest',
      _inherit: ['_Component'],
      firstName: 'property',
    })

    metamodel.model({
      _name: 'PersonTest',
      _inherit: ['_Component'],
      firstName: {
        type: 'string',
        readOnly: false,
        mandatory: true,
        default: '',
      },
    })

    metamodel.create()

    expect(metamodel.require('PersonTest')).to.not.be.undefined
  })

  it('can update a generated model (simple mode)', function () {
    const metamodel = runtime.require('metamodel')
    metamodel.schema('PersonTestSimple', {
      firstName: 'property',
    })

    metamodel.model('PersonTestSimple', {
      firstName: 'string',
    })

    metamodel.create()

    expect(metamodel.require('PersonTestSimple')).to.not.be.undefined
  })

  it('can update a method signature (simple mode)', function () {
    const metamodel = runtime.require('metamodel')
    metamodel.schema('MethodTest', {
      add: 'method',
    })

    metamodel.model('MethodTest', {
      add: {
        p1: 'number',
        p2: 'number',
        '=>': 'number',
      },
    })

    metamodel.create()

    let MethodTest = runtime.require('MethodTest')

    MethodTest.on('add', (p1, p2) => {
      return p1 + p2
    })

    let test = new MethodTest()

    expect(test.add(1, 2)).equal(3)
  })

  it('can add a type', function () {
    const metamodel = runtime.require('metamodel')

    metamodel.type({
      name: 'address',
      type: 'object',
      schema: {
        planet: { type: 'string', mandatory: true },
      },
    })

    metamodel.type({
      name: 'sex',
      type: 'string',
      value: ['male', 'female'],
    })

    metamodel.schema({
      _name: 'Person',
      _inherit: ['_Component'],
      sex: 'property',
      firstName: 'property',
      lastName: 'property',
      address: 'property',
    })

    metamodel.model({
      _name: 'Person',
      _inherit: ['_Component'],
      sex: {
        type: 'sex',
        readOnly: true,
        mandatory: true,
        default: 'male',
      },
      firstName: {
        type: 'string',
        readOnly: false,
        mandatory: true,
        default: '',
      },
      lastName: {
        type: 'string',
        readOnly: true,
        mandatory: true,
        default: '',
      },
      address: {
        type: 'address',
        readOnly: true,
        mandatory: false,
        default: {
          planet: '',
        },
      },
    })

    metamodel.create()

    const Person = runtime.require('Person')

    const yoda = new Person({
      sex: 'male',
      firstName: 'Yoda',
      lastName: 'Master',
      address: {
        planet: 'Dagobah',
      },
    })

    expect(yoda.address().planet()).equal('Dagobah')
  })

  it('can add a type (simple mode)', function () {
    const metamodel = runtime.require('metamodel')
    metamodel.schema('PersonTestSimple2', {
      firstName: 'property',
      address: 'property',
    })

    metamodel.model('PersonTestSimple2', {
      firstName: 'string',
      address: 'address2',
    })

    metamodel.type('address2', {
      address: 'string',
      city: 'city',
    })

    metamodel.type('city', ['Paris', 'Rennes'])

    metamodel.create()

    let PersonTestSimple2 = runtime.require('PersonTestSimple2')

    let person = new PersonTestSimple2({
      firstName: 'a name',
      address: {
        address: 'an address',
        city: 'Paris',
      },
    })

    expect(person.address().city()).equal('Paris')
  })

  it('can create a collection of structure', function () {
    const metamodel = runtime.require('metamodel')

    metamodel.type({
      name: 'vegetable',
      type: 'object',
      schema: {
        kind: { type: ['string'], mandatory: true },
      },
    })

    metamodel.schema({
      _name: 'Person',
      _inherit: ['_Component'],
      firstName: 'property',
      lastName: 'property',
      eats: 'collection',
    })

    metamodel.model({
      _name: 'Person',
      _inherit: ['_Component'],
      firstName: {
        type: 'string',
        readOnly: false,
        mandatory: true,
        default: '',
      },
      lastName: {
        type: 'string',
        readOnly: true,
        mandatory: true,
        default: '',
      },
      eats: {
        type: ['vegetable'],
        readOnly: true,
        mandatory: false,
        default: [],
      },
    })

    metamodel.create()

    const Person = runtime.require('Person')

    const yoda = new Person({
      sex: 'male',
      firstName: 'Yoda',
      lastName: 'Master',
      eats: [
        {
          kind: ['all'],
        },
      ],
    })

    expect(yoda.eats(0).kind(0)).equal('all')
  })

  it('can create a complex structure', function () {
    const metamodel = runtime.require('metamodel')

    metamodel.type({
      name: 'foods',
      type: 'object',
      schema: {
        vegetables: { type: 'vegetable', mandatory: true },
      },
    })

    metamodel.type({
      name: 'vegetable',
      type: 'object',
      schema: {
        kind: { type: ['string'], mandatory: true },
      },
    })

    metamodel.schema({
      _name: 'Person',
      _inherit: ['_Component'],
      firstName: 'property',
      lastName: 'property',
      likes: 'property',
    })

    metamodel.model({
      _name: 'Person',
      _inherit: ['_Component'],
      firstName: {
        type: 'string',
        readOnly: false,
        mandatory: true,
        default: '',
      },
      lastName: {
        type: 'string',
        readOnly: true,
        mandatory: true,
        default: '',
      },
      likes: {
        type: 'foods',
        readOnly: true,
        mandatory: false,
        default: {},
      },
    })

    metamodel.create()

    const Person = runtime.require('Person')

    const yoda = new Person({
      sex: 'male',
      firstName: 'Yoda',
      lastName: 'Master',
      likes: {
        vegetables: {
          kind: ['all'],
        },
      },
    })

    expect(yoda.likes().vegetables().kind(0)).equal('all')
  })

  it('can create a one to one relationship', function () {
    const metamodel = runtime.require('metamodel')

    metamodel.schema({
      _name: 'Person',
      _inherit: ['_Component'],
      sex: 'property',
      firstName: 'property',
      lastName: 'property',
      address: 'property',
      father: 'link',
    })

    metamodel.model({
      _name: 'Person',
      _inherit: ['_Component'],
      sex: {
        type: 'sex',
        readOnly: true,
        mandatory: true,
        default: 'male',
      },
      firstName: {
        type: 'string',
        readOnly: false,
        mandatory: true,
        default: '',
      },
      lastName: {
        type: 'string',
        readOnly: true,
        mandatory: true,
        default: '',
      },
      address: {
        type: 'address',
        readOnly: true,
        mandatory: false,
        default: {
          planet: '',
        },
      },
      father: {
        type: 'Person',
        readOnly: false,
        mandatory: false,
        default: {},
      },
    })

    metamodel.create()

    const Person = runtime.require('Person')

    const anakin = new Person({
      sex: 'male',
      firstName: 'Anakin',
      lastName: 'Skywalker',
    })

    const luke = new Person({
      sex: 'male',
      firstName: 'Luke',
      lastName: 'Skywalkers',
      father: anakin,
    })

    expect(luke.father().firstName()).equal('Anakin')
  })

  it('can create a one to many relationship', function () {
    const metamodel = runtime.require('metamodel')

    metamodel.schema({
      _name: 'Person',
      _inherit: ['_Component'],
      children: 'collection',
      sex: 'property',
      firstName: 'property',
      lastName: 'property',
      address: 'property',
      father: 'link',
    })

    metamodel.model({
      _name: 'Person',
      _inherit: ['_Component'],
      sex: {
        type: 'sex',
        readOnly: true,
        mandatory: true,
        default: 'male',
      },
      children: {
        type: ['Person'],
        readOnly: true,
        mandatory: false,
        default: [],
      },
      firstName: {
        type: 'string',
        readOnly: false,
        mandatory: true,
        default: '',
      },
      lastName: {
        type: 'string',
        readOnly: true,
        mandatory: true,
        default: '',
      },
      address: {
        type: 'address',
        readOnly: true,
        mandatory: false,
        default: {
          planet: '',
        },
      },
      father: {
        type: 'Person',
        readOnly: false,
        mandatory: false,
        default: {},
      },
    })

    metamodel.create()

    const Person = runtime.require('Person')

    const leia = new Person({
      sex: 'female',
      firstName: 'Leia Amidala',
      lastName: 'Skywalker',
    })

    const luke = new Person({
      sex: 'male',
      firstName: 'Luke',
      lastName: 'Skywalker',
    })

    const padme = new Person({
      sex: 'female',
      firstName: 'Padme',
      lastName: 'Amidala',
      children: [luke, leia],
    })

    expect(padme.children(1).firstName()).equal('Leia Amidala')
  })

  it('can generate APIs to navigate through the model', function () {
    const metamodel = runtime.require('metamodel')

    metamodel.schema({
      _name: 'Person',
      _inherit: ['_Component'],
      children: 'collection',
      sex: 'property',
      firstName: 'property',
      lastName: 'property',
      address: 'property',
      father: 'link',
      son: 'property',
    })

    metamodel.model({
      _name: 'Person',
      _inherit: ['_Component'],
      sex: {
        type: 'sex',
        readOnly: true,
        mandatory: true,
        default: 'male',
      },
      children: {
        type: ['Person'],
        readOnly: true,
        mandatory: false,
        default: [],
      },
      firstName: {
        type: 'string',
        readOnly: false,
        mandatory: true,
        default: '',
      },
      lastName: {
        type: 'string',
        readOnly: true,
        mandatory: true,
        default: '',
      },
      father: {
        type: 'Person',
        readOnly: false,
        mandatory: false,
        default: {},
      },
      address: {
        type: 'address',
        readOnly: true,
        mandatory: false,
        default: {
          planet: '',
        },
      },
      son: {
        type: 'Person',
        readOnly: false,
        mandatory: false,
        default: {},
      },
    })

    metamodel.create()

    const Person = runtime.require('Person')

    const luke = new Person({
      sex: 'male',
      firstName: 'Luke',
      lastName: 'Skywalker',
    })

    const anakin = new Person({
      sex: 'male',
      firstName: 'Anakin',
      lastName: 'Skywalker',
      son: luke,
    })

    const leia = new Person({
      sex: 'female',
      firstName: 'Leia Amidala',
      lastName: 'Skywalker',
      father: anakin,
    })

    expect(leia.father().son().firstName()).equal('Luke')
  })

  it('can generate empty method', function () {
    const metamodel = runtime.require('metamodel')

    // create the schema
    metamodel.schema('PersonSimple', {
      firstName: 'property',
      lastName: 'property',
      age: 'property',
      father: 'link',
      mother: 'link',
      children: 'collection',
      fullName: 'method',
    })

    // override the generated model
    metamodel.model('PersonSimple', {
      firstName: 'string',
      lastName: 'string',
      age: 'number',
      father: 'Person',
      mother: 'Person',
      children: ['Person'],
      fullName: {
        '=>': 'string',
      },
    })

    // create the model and related class
    metamodel.create()

    const PersonSimple = runtime.require('PersonSimple')
    const person = new PersonSimple({
      firstName: 'a first name',
      mother: '',
      children: [],
    })

    expect(person.fullName()).equal(undefined)
  })
})
