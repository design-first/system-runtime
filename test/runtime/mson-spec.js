describe('a MSON schema', function () {

  // init
  if (typeof window === 'undefined') {
    runtime = require('../../src/runtime.js');
  }

  it('can make inheritance at schema level', function () {
    var metamodel = runtime.require('metamodel');

    metamodel.schema({
      '_name': 'Person_test',
      '_inherit': ['RuntimeComponent'],
      'firstName': 'property',
      'lastName': 'property',
      'getFullName': 'method'
    });

    metamodel.schema({
      '_name': 'Teacher_test',
      '_inherit': ['Person_test'],
    });

    metamodel.create();

    var Person = runtime.require('Person_test');

    Person.off('getFullName');

    Person.on('getFullName', function () {
      return this.firstName() + ' ' + this.lastName();
    });

    var Teacher = runtime.require('Teacher_test');

    var eikichi = new Teacher({
      'firstName': 'Eikichi',
      'lastName': 'Onizuka'
    });

    expect(eikichi.getFullName()).toBe('Eikichi Onizuka');
  });

  it('implements C3 superclass linearization algorithm', function () {
    var metamodel = runtime.require('metamodel');

    metamodel.schema({
      '_name': 'Test_result',
      'getParent': 'method'
    });

    metamodel.model({
      '_name': 'Test_result',
      'getParent': {
        "params": [],
        "result": "array"
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

    var Test_result = runtime.require('Test_result');
    Test_result.on('getParent', function () {
      return $metamodel.getParents('Z');
    }, true);

    var test = new Test_result();

    expect(test.getParent().join('_')).toBe(['K1', 'K2', 'K3', 'D', 'A', 'B', 'C', 'E', 'O'].join('_'));
  });
});