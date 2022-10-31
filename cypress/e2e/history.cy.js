import runtime from '../../dist/system-runtime.js'

describe('System Runtime history component', function () {
  beforeEach(function () {
    const history = runtime.require('history')
    history.start()
  })

  afterEach(function () {
    const history = runtime.require('history')
    history.stop()
  })

  it('exists', function () {
    const history = runtime.require('history')

    expect(history).to.not.be.undefined
  })

  it('can go back', function () {
    const metamodel = runtime.require('metamodel')
    metamodel.schema({
      _name: 'PersonHistoryTest1',
      _inherit: ['_Component'],
      firstName: 'property',
    })

    metamodel.model({
      _name: 'PersonHistoryTest1',
      _inherit: ['_Component'],
      firstName: {
        type: 'string',
        readOnly: false,
        mandatory: true,
        default: '',
      },
    })

    metamodel.create()

    expect(metamodel.require('PersonHistoryTest1')).to.not.be.undefined

    const Person = runtime.require('PersonHistoryTest1')

    // insert
    new Person({
      firstName: 'Yoda',
    })

    expect(
      runtime.require('db').collections().PersonHistoryTest1.find().length
    ).equal(1)

    const history = runtime.require('history')

    history.from(-1)
    history.back()

    expect(
      runtime.require('db').collections().PersonHistoryTest1.find().length
    ).equal(0)

    // update
    const yoda = new Person({
      firstName: 'Yoda',
    })

    expect(
      runtime.require('db').collections().PersonHistoryTest1.find().length
    ).equal(1)

    yoda.firstName('none')

    history.from(-1)
    history.back()

    expect(yoda.firstName()).equal('Yoda')

    // remove
    yoda.destroy()

    history.from(-1)
    history.back()

    expect(
      runtime.require('db').collections().PersonHistoryTest1.find().length
    ).equal(1)
  })

  it('can go forward', function () {
    const metamodel = runtime.require('metamodel')
    metamodel.schema({
      _name: 'PersonHistoryTest2',
      _inherit: ['_Component'],
      firstName: 'property',
    })

    metamodel.model({
      _name: 'PersonHistoryTest2',
      _inherit: ['_Component'],
      firstName: {
        type: 'string',
        readOnly: false,
        mandatory: true,
        default: '',
      },
    })

    metamodel.create()

    expect(metamodel.require('PersonHistoryTest2')).to.not.be.undefined

    const Person = runtime.require('PersonHistoryTest2')

    // remove
    const yoda = new Person({
      firstName: 'Yoda',
    })
    yoda.destroy()

    expect(
      runtime.require('db').collections().PersonHistoryTest2.find().length
    ).equal(0)

    const history = runtime.require('history')

    history.from(-1)
    history.back()

    expect(
      runtime.require('db').collections().PersonHistoryTest2.find().length
    ).equal(1)

    history.forward()

    expect(
      runtime.require('db').collections().PersonHistoryTest2.find().length
    ).equal(0)

    // update
    const yoda1 = new Person({
      firstName: 'Yoda',
    })
    yoda1.firstName('none')

    history.from(-1)
    history.back()

    expect(yoda1.firstName()).equal('Yoda')

    history.forward()

    expect(yoda1.firstName()).equal('none')

    // insert
    new Person({
      firstName: 'Yoda',
    })

    expect(
      runtime.require('db').collections().PersonHistoryTest2.find().length
    ).equal(2)

    history.from(-1)
    history.back()

    expect(
      runtime.require('db').collections().PersonHistoryTest2.find().length
    ).equal(1)

    history.forward()

    expect(
      runtime.require('db').collections().PersonHistoryTest2.find().length
    ).equal(2)
  })

  it('can get an item of the history', function () {
    const history = runtime.require('history')
    const item = history.get(0)

    expect(item.action).to.not.be.undefined
  })

  it('can dump all the history', function () {
    const history = runtime.require('history')

    expect(history.dump()).to.not.be.undefined
  })

  it('can load a dump of an history', function () {
    const history = runtime.require('history')
    const dump = history.dump()

    expect(history.load(dump)).equal(true)
  })
})
