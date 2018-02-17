const db = require('../../src/db.js');
const runtime = require('../../src/runtime.js');
const expect = require('chai').expect;

describe('System Runtime db component', () => {

  // init
  runtime.system('test');

  it('can find all documents of a collection', () => {
    const result = db._Runtime.find();

    expect(result.length > 0).equal(true);
  });

  it('can find a document with a criteria', () => {
    const result = db._Runtime.find({
      '_id': 'runtime'
    });

    expect(result.length).equal(1);
  });

  it('can find a document with multi criteria', () => {
    const result = db._Runtime.find([{
      '_id': 'runtime'
    }]);

    expect(result.length).equal(1);
  });

  it('can find a document with regex criteria', () => {
    const result = db._Runtime.find({
      '_id': /runtime/
    });

    expect(result.length).equal(1);
  });

  it('can find a document with a $eq operator', () => {
    const result = db._Runtime.find({
      '_id': {
        '$eq': 'runtime'
      }
    });

    expect(result.length).equal(1);
  });

  it('can find a document with a $gt operator', () => {
    const result = db._Runtime.find({
      'version': {
        '$gt': '1.0.0'
      }
    });

    expect(result.length).equal(1);
  });

  it('can find a document with a $gte operator', () => {
    const result = db._Runtime.find({
      'version': {
        '$gte': '1.0.0'
      }
    });

    expect(result.length).equal(1);
  });

  it('can find a document with a $lt operator', () => {
    const result = db._Runtime.find({
      'version': {
        '$lt': '9.0.0'
      }
    });

    expect(result.length).equal(1);
  });

  it('can find a document with a $lte operator', () => {
    const result = db._Runtime.find({
      'version': {
        '$lte': '9.0.0'
      }
    });

    expect(result.length).equal(1);
  });

  it('can find a document with a $ne operator', () => {
    const result = db._Runtime.find({
      'version': {
        '$ne': '1.0.0'
      }
    });

    expect(result.length).equal(1);
  });

  it('can find a document with a $in operator', () => {
    const result = db._Runtime.find({
      '_id': {
        '$in': [42, false, 'runtime']
      }
    });

    expect(result.length).equal(1);
  });

  it('can find a document with a $nin operator', () => {
    const result = db._Runtime.find({
      '_id': {
        '$nin': [42, false]
      }
    });

    expect(result.length).equal(1);
  });

  it('can find a document with multiple query operator', () => {
    const result = db._Runtime.find({
      '_id': {
        '$nin': [''],
        '$eq': 'runtime'
      }
    });

    expect(result.length).equal(1);
  });

  it('can sort the result of a find', () => {
    const result = db._Runtime.find({
      '_id': 'runtime'
    }).sort({
      '_id': -1
    });

    expect(result.length).equal(1);
  });

  it('can add a document', () => {
    db._Runtime.insert({
      '_id': 'runtime1',
      'version': '0.0.0'
    });
    const result = db._Runtime.find({
      '_id': 'runtime1'
    });

    expect(result.length).equal(1);
  });

  it('can add many documents', () => {
    db._Runtime.insert([{
      '_id': 'runtime2',
      'version': '0.0.0'
    }, {
      '_id': 'runtime3',
      'version': '0.0.0'
    }]);
    const result = db._Runtime.find({
      '_id': 'runtime2'
    });

    expect(result.length).equal(1);
  });

  it('can update a document', () => {
    db._Runtime.update({
      '_id': 'runtime1'
    }, {
        'version': '0.0.4'
      });
    const result = db._Runtime.find({
      '_id': 'runtime1'
    })[0];

    expect(result.version).equal('0.0.4');
  });

  it('can update many documents', () => {
    db._Runtime.update([{
      '_id': 'runtime2'
    }, {
      '_id': 'runtime3'
    }], {
        'version': '0.0.4'
      });
    const result = db._Runtime.find({
      '_id': 'runtime3'
    })[0];

    expect(result.version).equal('0.0.4');
  });

  it('can update a document that does not exist', () => {
    db._Runtime.update({
      '_id': 'runtime5'
    }, {
        'version': '0.0.1'
      }, {
        'upsert': true
      });
    const result = db._Runtime.find({
      '_id': 'runtime5'
    });

    expect(result.length).equal(1);
  });

  it('can remove a document', () => {
    const runtimeid = 'runtime' + Math.round(Math.random() * 1000000);
    db._Runtime.insert({
      '_id': runtimeid,
      'version': '0.0.0'
    });
    db._Runtime.remove({
      '_id': runtimeid
    });
    const result = db._Runtime.find({
      '_id': runtimeid
    });

    expect(result.length).equal(0);
  });

  it('can remove many documents', () => {
    const runtimeid1 = 'runtime' + Math.round(Math.random() * 1000000);
    const runtimeid2 = 'runtime' + Math.round(Math.random() * 1000000);

    db._Runtime.insert([{
      '_id': runtimeid1,
      'version': '0.0.0'
    }, {
      '_id': runtimeid2,
      'version': '0.0.0'
    }]);
    db._Runtime.remove([{
      '_id': runtimeid1
    }, {
      '_id': runtimeid2
    }]);
    const result1 = db._Runtime.find({
      '_id': runtimeid1
    });
    const result2 = db._Runtime.find({
      '_id': runtimeid2
    });

    expect(result1.length + result2.length).equal(0);
  });

  it('can export the database', () => {
    const result = db.exportSystem();

    expect(result).to.not.be.undefined;
  });

  it('can apply a filter on the export', () => {
    const result = db.exportSystem({
      'schemas': {
        'name': 'Person'
      }
    });

    expect(result).to.not.be.undefined;
  });

  it('can import a system', () => {
    const result = db.importSystem({
      '_id': 'u195cc1c1dd16c47',
      'name': 'test2',
      'description': '',
      'version': '0.0.1',
      'master': true,
      'schemas': {},
      'models': {},
      'types': {},
      'behaviors': {},
      'components': {}
    });

    expect(result).not.equal('');
  });

  it('can init the database', () => {
    db.init();
    const result = db._Runtime.find({
      '_id': 'runtime'
    });

    expect(result.length).equal(1);
  });
});
