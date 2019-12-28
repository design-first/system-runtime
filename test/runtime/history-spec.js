describe('System Runtime history component', () => {

  // init
  if (typeof window === 'undefined') {
    runtime = require('../../src/runtime.js');
    expect = require('chai').expect;
  }

  it('exists', () => {
    const history = runtime.require('history');

    expect(history).to.not.be.undefined;
  });

  it('can go back', () => {
    const metamodel = runtime.require('metamodel');
    metamodel.schema({
      '_name': 'PersonHistoryTest1',
      '_inherit': ['_Component'],
      'firstName': 'property'
    });

    metamodel.model({
      '_name': 'PersonHistoryTest1',
      '_inherit': ['_Component'],
      'firstName': {
        'type': 'string',
        'readOnly': false,
        'mandatory': true,
        'default': ''
      }
    });

    metamodel.create();

    expect(metamodel.require('PersonHistoryTest1')).to.not.be.undefined;

    const Person = runtime.require('PersonHistoryTest1');

    new Person({
      'firstName': 'Yoda'
    });

    expect(runtime.require('db').collections().PersonHistoryTest1.find().length).equal(1);

    const history = runtime.require('history');

    history.from(-1);
    history.back();

    expect(runtime.require('db').collections().PersonHistoryTest1.find().length).equal(0);
  });

  it('can go forward', () => {
    const metamodel = runtime.require('metamodel');
    metamodel.schema({
      '_name': 'PersonHistoryTest2',
      '_inherit': ['_Component'],
      'firstName': 'property'
    });

    metamodel.model({
      '_name': 'PersonHistoryTest2',
      '_inherit': ['_Component'],
      'firstName': {
        'type': 'string',
        'readOnly': false,
        'mandatory': true,
        'default': ''
      }
    });

    metamodel.create();

    expect(metamodel.require('PersonHistoryTest2')).to.not.be.undefined;

    const Person = runtime.require('PersonHistoryTest2');

    const yoda = new Person({
      'firstName': 'Yoda'
    });
    yoda.destroy();

    expect(runtime.require('db').collections().PersonHistoryTest2.find().length).equal(0);

    const history = runtime.require('history');

    history.from(-1);
    history.back();

    expect(runtime.require('db').collections().PersonHistoryTest2.find().length).equal(1);

    history.forward();

    expect(runtime.require('db').collections().PersonHistoryTest2.find().length).equal(0);
  });

  it('can get an item of the history', () => {
    const history = runtime.require('history');
    const item = history.get(0); 

    expect(item).to.not.be.undefined;
  });

  it('can dump all the history of state', () => {
    const history = runtime.require('history');

    expect(history.dump()).to.not.be.undefined;
  });

  it('can load a dump of an history', () => {
    const history = runtime.require('history');
    const dump = history.dump(); 

    expect(history.load(dump)).equal(true);
  });
});
