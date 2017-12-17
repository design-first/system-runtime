describe('a MSON schema', () => {

  // init
  if (typeof window === 'undefined') {
    runtime = require('../../src/runtime.js');
    expect = require('chai').expect;
  }

  it('can make inheritance at schema level', () => {
    const metamodel = runtime.require('metamodel');

    metamodel.schema({
      '_name': 'Person_test',
      '_inherit': ['_Component'],
      'firstName': 'property',
      'lastName': 'property',
      'getFullName': 'method'
    });

    metamodel.schema({
      '_name': 'Teacher_test',
      '_inherit': ['Person_test'],
    });

    metamodel.create();

    const Person = runtime.require('Person_test');

    Person.off('getFullName');

    Person.on('getFullName', () => this.firstName() + ' ' + this.lastName());

    const Teacher = runtime.require('Teacher_test');

    const eikichi = new Teacher({
      'firstName': 'Eikichi',
      'lastName': 'Onizuka'
    });

    expect(eikichi.getFullName()).equal('Eikichi Onizuka');
  });

  it('implements C3 superclass linearization algorithm', () => {
    const metamodel = runtime.require('metamodel');

    metamodel.schema({
      '_name': 'TestResult',
      'getParent': 'method'
    });

    metamodel.model({
      '_name': 'TestResult',
      'getParent': {
        'params': [],
        'result': 'array'
      }
    });

    metamodel.schema({
      '_name': 'O',
      '_inherit': []
    });

    metamodel.schema({
      '_name': 'A',
      '_inherit': ['O']
    });

    metamodel.schema({
      '_name': 'B',
      '_inherit': ['O']
    });

    metamodel.schema({
      '_name': 'C',
      '_inherit': ['O']
    });

    metamodel.schema({
      '_name': 'D',
      '_inherit': ['O']
    });

    metamodel.schema({
      '_name': 'E',
      '_inherit': ['O']
    });

    metamodel.schema({
      '_name': 'K1',
      '_inherit': ['A', 'B', 'C']
    });

    metamodel.schema({
      '_name': 'K2',
      '_inherit': ['D', 'B', 'E']
    });

    metamodel.schema({
      '_name': 'K3',
      '_inherit': ['D', 'A']
    });

    metamodel.schema({
      '_name': 'Z',
      '_inherit': ['K1', 'K2', 'K3']
    });

    metamodel.create();

    const TestResult = runtime.require('TestResult');
    TestResult.on('getParent', () => {
      return $metamodel.getParents('Z');
    }, true);

    const test = new TestResult();

    expect(test.getParent().join('_')).equal(['K1', 'K2', 'K3', 'D', 'A', 'B', 'C', 'E', 'O'].join('_'));
  });
});
