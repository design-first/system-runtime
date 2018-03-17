describe('a System Runtime component', function () {

  // init
  if (typeof window === 'undefined') {
    runtime = require('../../src/runtime.js');
    expect = require('chai').expect;
  }

  beforeEach(function () {
    runtime.system('component-spec');
    const metamodel = runtime.require('metamodel');

    metamodel.schema({
      '_name': 'Person',
      '_inherit': ['_Component'],
      'firstName': 'property',
      'lastName': 'property',
      'address': 'property',
      'likes': 'property',
      'custom': 'property',
      'fullName': 'method',
      'testMethod': 'method',
      'children': 'collection',
      'father': 'link',
      'moving': 'event'
    });

    metamodel.model({
      '_name': 'Person',
      '_inherit': ['_Component'],
      'children': {
        'type': ['Person'],
        'readOnly': false,
        'mandatory': false,
        'default': []
      },
      'firstName': {
        'type': 'string',
        'readOnly': false,
        'mandatory': true,
        'default': ''
      },
      'lastName': {
        'type': 'string',
        'readOnly': false,
        'mandatory': true,
        'default': ''
      },
      'likes': {
        'type': 'array',
        'readOnly': false,
        'mandatory': false,
        'default': []
      },
      'custom': {
        'type': 'mycustomType',
        'readOnly': false,
        'mandatory': false,
        'default': {}
      },
      'fullName': {
        'result': 'string'
      },
      'testMethod': {
      },
      'father': {
        'type': 'Person',
        'readOnly': false,
        'mandatory': false,
        'default': {}
      },
      'address': {
        'type': 'string',
        'readOnly': false,
        'mandatory': false,
        'default': ''
      },
      'moving': {}
    });

    metamodel.schema({
      '_name': 'Teacher',
      '_inherit': ['Person']
    });

    metamodel.type({
      "name": "mycustomType",
      "description": "",
      "type": "object",
      "schema": {
        "property1": {
          "type": "array",
          "mandatory": false,
          "default": []
        },
        "property2": {
          "type": "object",
          "mandatory": false,
          "default": {}
        },
        "property3": {
          "type": "any",
          "mandatory": false,
          "default": {}
        },
        "property4": {
          "type": "boolean",
          "mandatory": false,
          "default": false
        },
        "property5": {
          "type": "date",
          "mandatory": false,
          "default": ""
        },
        "property6": {
          "type": "json",
          "mandatory": false,
          "default": {}
        }
      }
    });

    metamodel.create();
  });

  it('can show its id', function () {
    const id = runtime.id();

    expect(id).equal('runtime');
  });

  it('can require a component', function () {
    const db = runtime.require('db');

    expect(db).to.not.be.undefined;
  });

  it('can show its classInfo', function () {
    const db = runtime.require('db');
    const classInfo = db.classInfo();

    expect(classInfo).to.not.be.undefined;
  });

  it('can add an event', function (done) {
    const Person = runtime.require('Person');
    const yoda = new Person({
      'firstName': 'Yoda',
      'lastName': 'Master',
      'likes': ['teaching']
    });

    yoda.on('moving', function () {
      this.address('Dagobah');
    });
    yoda.moving();

    setTimeout(function () {
      expect(yoda.address()).equal('Dagobah');
      done();
    }, 1);
  });

  it('can add an event with context change', function (done) {
    const Person = runtime.require('Person');
    const yoda = new Person({
      'firstName': 'Yoda',
      'lastName': 'Master',
      'likes': ['teaching']
    });
    const luke = new Person({
      'firstName': 'Luke',
      'lastName': '',
      'likes': []
    });

    yoda.on('moving', function () {
      this.lastName('Skywalker');
    }, luke);
    yoda.moving();

    setTimeout(function () {
      expect(luke.lastName()).equal('Skywalker');
      done();
    }, 1);
  });

  it('can remove an event', function (done) {
    const Person = runtime.require('Person');
    const yoda = new Person({
      'firstName': 'Yoda',
      'lastName': 'Master'
    });

    yoda.on('moving', function () {
      this.address('Dagobah');
    });
    yoda.off('moving');

    yoda.moving();

    setTimeout(function () {
      expect(yoda.address()).equal('');
      done();
    }, 1);
  });

  it('can remove all event', function (done) {
    const Person = runtime.require('Person');
    const yoda2 = new Person({
      'firstName': 'Yoda',
      'lastName': 'Master'
    });

    yoda2.on('moving', function () {
      this.address('Dagobah');
    });
    yoda2.off();

    yoda2.moving();

    setTimeout(function () {
      expect(yoda2.address()).equal('');
      done();
    }, 1);
  });

  it('can remove an event with its id', function (done) {
    const Person = runtime.require('Person');
    const yoda3 = new Person({
      'firstName': 'Yoda',
      'lastName': 'Master'
    });

    const behaviorId = yoda3.on('moving', function () {
      this.address('Dagobah');
    });

    yoda3.require(behaviorId).destroy();

    yoda3.moving();

    setTimeout(function () {
      expect(yoda3.address()).equal('');
      done();
    }, 1);
  });

  it('can add an event on a property change', function (done) {
    const Person = runtime.require('Person');
    const yoda = new Person({
      'firstName': 'Yoda',
      'lastName': 'Master'
    })

    yoda.on('lastName', function (val) {
      this.address('Dagobah');
    });

    yoda.lastName('Grand Jedi Master');

    setTimeout(function () {
      expect(yoda.address()).equal('Dagobah');
      done();
    }, 1);
  });

  it('can remove an event on a property change', function (done) {
    const Person = runtime.require('Person');
    const yoda = new Person({
      'firstName': 'Yoda',
      'lastName': 'Master'
    })

    yoda.on('lastName', function (val) {
      this.address('Dagobah');
    });

    yoda.off('lastName');

    yoda.lastName('Grand Jedi Master');

    setTimeout(function () {
      expect(yoda.address()).equal('');
      done();
    }, 1);
  });

  it('can navigate threw relationships bewteen components', function () {
    const Person = runtime.require('Person');

    const luke = new Person({
      'firstName': 'Luke',
      'lastName': 'Skywalker'
    });

    const anakin = new Person({
      'firstName': 'Anakin',
      'lastName': 'Skywalker'
    });

    anakin.children().push(luke);

    const leia = new Person({
      'firstName': 'Leia Amidala',
      'lastName': 'Skywalker'
    });

    leia.father(anakin);

    expect(leia.father().children(0).firstName()).equal('Luke');
  });

  it('can get a property', function () {
    const Person = runtime.require('Person');
    const yoda = new Person({
      'firstName': 'Yoda',
      'lastName': 'Master'
    });

    expect(yoda.firstName()).equal('Yoda');
  });

  it('can set a property', function () {
    const Person = runtime.require('Person');
    const yoda = new Person({
      'firstName': 'Yoda',
      'lastName': 'Master'
    });
    yoda.lastName('Grand Jedi Master');

    expect(yoda.lastName()).equal('Grand Jedi Master');
  });

  it('can not set an invalid value', function () {
    const Person = runtime.require('Person');
    const yoda = new Person({
      'firstName': 'Yoda',
      'lastName': 'Master'
    });
    yoda.lastName(42);

    expect(yoda.lastName()).equal('Master');
  });

  it('can add a link to another components', function () {
    const Person = runtime.require('Person');

    const anakin = new Person({
      'firstName': 'Anakin',
      'lastName': 'Skywalker'
    });

    const leia = new Person({
      'firstName': 'Leia Amidala',
      'lastName': 'Skywalker'
    });

    leia.father(anakin);

    expect(leia.father().firstName()).equal('Anakin');
  });

  it('can remove a link to another components', function () {
    const Person = runtime.require('Person');

    const anakin = new Person({
      'firstName': 'Anakin',
      'lastName': 'Skywalker'
    });

    const leia = new Person({
      'firstName': 'Leia Amidala',
      'lastName': 'Skywalker'
    });

    leia.father(anakin);
    leia.father(null);

    expect(leia.father()).equal(undefined);
  });

  it('can add an item in a collection in the config', function () {
    const Person = runtime.require('Person');

    const luke = new Person({
      'firstName': 'Luke',
      'lastName': 'Skywalker'
    });

    const anakin = new Person({
      'firstName': 'Anakin',
      'lastName': 'Skywalker',
      'children': [luke]
    });

    expect(anakin.children(0).id()).equal(luke.id());
  });

  it('can add an item in a collection with api', function () {
    const Person = runtime.require('Person');

    const luke = new Person({
      'firstName': 'Luke',
      'lastName': 'Skywalker'
    });

    const anakin = new Person({
      'firstName': 'Anakin',
      'lastName': 'Skywalker'
    });

    anakin.children(0, luke);

    expect(anakin.children(0).id()).equal(luke.id());
  });

  it('can add items in a collection with api', function () {
    const Person = runtime.require('Person');

    const luke = new Person({
      'firstName': 'Luke',
      'lastName': 'Skywalker'
    });

    const anakin = new Person({
      'firstName': 'Anakin',
      'lastName': 'Skywalker'
    });

    anakin.children([luke, anakin]);

    expect(anakin.children().length).equal(2);
  });

  it('can remove an item of a collection with pop', function () {
    const Person = runtime.require('Person');

    const luke = new Person({
      'firstName': 'Luke',
      'lastName': 'Skywalker'
    });

    const anakin = new Person({
      'firstName': 'Anakin',
      'lastName': 'Skywalker',
      'children': [luke]
    });

    expect(anakin.children().pop().id()).equal(luke.id());
  });

  it('can remove an item of an array property with pop', function () {
    const Person = runtime.require('Person');

    const luke = new Person({
      'firstName': 'Luke',
      'lastName': 'Skywalker',
      'likes': ['saying noooooo!']
    });

    luke.likes().pop();

    expect(luke.likes().length).equal(0);
  });

  it('can add an item of a collection with push', function () {
    const Person = runtime.require('Person');

    const luke = new Person({
      'firstName': 'Luke',
      'lastName': 'Skywalker'
    });

    const anakin = new Person({
      'firstName': 'Anakin',
      'lastName': 'Skywalker'
    });

    anakin.children().push(luke);

    expect(anakin.children(0).id()).equal(luke.id());
  });

  it('can add an item of an array property with push', function () {
    const Person = runtime.require('Person');

    const luke = new Person({
      'firstName': 'Luke',
      'lastName': 'Skywalker'
    });

    luke.likes().push('saying nooooooo!');

    expect(luke.likes().length).equal(1);
  });

  it('can clear a collection with api', function () {
    const Person = runtime.require('Person');

    const luke = new Person({
      'firstName': 'Luke',
      'lastName': 'Skywalker'
    });

    const anakin = new Person({
      'firstName': 'Anakin',
      'lastName': 'Skywalker'
    });

    anakin.children([luke, anakin]);
    anakin.children([]);

    expect(anakin.children().length).equal(0);
  });

  it('can destroy itself', function () {
    const Person = runtime.require('Person');
    const yoda = new Person({
      'firstName': 'Yoda',
      'lastName': 'Master'
    });
    const id = yoda.id();
    yoda.destroy();

    expect(runtime.require(id)).equal(undefined);
  });

  it('can destroy a class', function () {
    const Person = runtime.require('Person');
    Person.destroy();

    const result = runtime.require('Person');
    expect(result).equal(undefined);
  });


  it('can create a core object', function () {
    const Person = runtime.require('Person');
    const shadow = new Person({
      'firstName': 'Shadow',
      'lastName': 'Object',
      '_core': true
    });

    expect(runtime.bundle().indexOf('Shadow')).equal(-1);
  });

  it('can call a parent method', function () {
    const Person = runtime.require('Person');
    const Teacher = runtime.require('Teacher');

    Person.on('fullName', () => {
      return this.firstName() + ' ' + this.lastName();
    });

    Teacher.on('fullName', () => {
      return 'Great Teacher ' + this.require('Person').fullName(this);
    });

    const eikichi = new Teacher({
      'firstName': 'Eikichi',
      'lastName': 'Onizuka'
    });

    expect(eikichi.fullName()).equal('Great Teacher Eikichi Onizuka');
  });

  it('can send an error', function (done) {
    const Person = runtime.require('Person');
    const yoda = new Person({
      'firstName': 'Yoda',
      'lastName': 'Master',
      'likes': ['teaching']
    });

    yoda.on('error', function (data) {
      this.lastName('error');
    });

    yoda.on('testMethod', function () {
      ANonDefinedFunction();
    });
    yoda.testMethod();

    setTimeout(function () {
      expect(yoda.lastName()).equal('error');
      done();
    }, 1);
  });
});
