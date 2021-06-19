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

  it('can find a document with a $eq selector', () => {
    const result = db._Runtime.find({
      '_id': {
        '$eq': 'runtime'
      }
    });

    expect(result.length).equal(1);
  });

  it('can find a document with a $eq selector and regexp', () => {
    const result = db._Runtime.find({
      '_id': {
        '$eq': /runtime/
      }
    });

    expect(result.length).equal(1);
  });

  it('can find a document with a $ne selector', () => {
    const result = db._Runtime.find({
      'version': {
        '$ne': '1.0.0'
      }
    });

    expect(result.length).equal(1);
  });

  it('can find a document with a $gt selector', () => {
    const result = db._Runtime.find({
      'version': {
        '$gt': '1.0.0'
      }
    });

    expect(result.length).equal(1);
  });

  it('can find a document with a $gte selector', () => {
    const result = db._Runtime.find({
      'version': {
        '$gte': '1.0.0'
      }
    });

    expect(result.length).equal(1);
  });

  it('can find a document with a $lt selector', () => {
    const result = db._Runtime.find({
      'version': {
        '$lt': '9.0.0'
      }
    });

    expect(result.length).equal(1);
  });

  it('can find a document with a $lte selector', () => {
    const result = db._Runtime.find({
      'version': {
        '$lte': '9.0.0'
      }
    });

    expect(result.length).equal(1);
  });

  it('can find a document with a $in selector', () => {
    const result = db._Runtime.find({
      '_id': {
        '$in': [42, false, 'runtime']
      }
    });

    expect(result.length).equal(1);
  });

  it('can find a document with a $nin selector', () => {
    const result = db._Runtime.find({
      '_id': {
        '$nin': [42, false]
      }
    });

    expect(result.length).equal(1);
  });

  it('can find a document with multiple selectors', () => {
    const result = db._Runtime.find({
      '_id': {
        '$nin': [''],
        '$eq': 'runtime'
      }
    });

    expect(result.length).equal(1);
  });

  it('can sort the result of a find', () => {
    // TODO improve test
    const result = db._Runtime.find({
      '_id': 'runtime'
    }).sort({
      '_id': -1
    });

    expect(result.length).equal(1);
  });

  it('can add a document', () => {
    let docAdded = db._Runtime.insert({
      '_id': 'runtime1',
      'version': '0.0.0'
    });

    expect(docAdded[0]).equal('runtime1');

    // try to insert an invalid document
    let invalidDoc = db._Runtime.insert(null);
    
    expect(invalidDoc.length).equal(0);

    // try to insert the same document
    docAdded = db._Runtime.insert({
      '_id': 'runtime1',
      'version': '0.0.0'
    });

    expect(docAdded[0]).equal('runtime1');

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
    const updatedDoc = db._Runtime.update({
      '_id': 'runtime1'
    }, {
      'version': '0.0.4'
    });

    expect(updatedDoc[0]).equal('runtime1');

    const result = db._Runtime.find({
      '_id': 'runtime1'
    })[0];

    expect(result.version).equal('0.0.4');
  });

  it('can update many documents', () => {
    const updatedDoc = db._Runtime.update([{
      '_id': 'runtime2'
    }, {
      '_id': 'runtime3'
    }], {
      'version': '0.0.4'
    });

    expect(updatedDoc.length).equal(2);
    expect(updatedDoc[0]).equal('runtime2');
    expect(updatedDoc[1]).equal('runtime3');

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

    const removedDocument = db._Runtime.remove({
      '_id': runtimeid
    });

    expect(removedDocument[0]).equal(runtimeid);

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
    const removedDocument = db._Runtime.remove([{
      '_id': runtimeid1
    }, {
      '_id': runtimeid2
    }]);

    expect(removedDocument.length).equal(2);
    expect(removedDocument[0]).equal(runtimeid1);
    expect(removedDocument[1]).equal(runtimeid2);

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
