describe('a db module', function () {

    var db = require('../../src/db.js');

    it('can find all document of a collection', function () {
        var result = db.Runtime.find();

        expect(result.length > 0).toBe(true);
    });

    it('can find a document with a criteria', function () {
        var result = db.Runtime.find({ '_id': 'runtime' });

        expect(result.length).toBe(1);
    });

    it('can find a document with multi criteria', function () {
        var result = db.Runtime.find([{ '_id': 'runtime' }]);

        expect(result.length).toBe(1);
    });

    it('can find a document with regex criteria', function () {
        var result = db.Runtime.find({ '_id': /runtime/ });

        expect(result.length).toBe(1);
    });

    it('can add a document', function () {
        db.Runtime.insert({ '_id': 'runtime1', 'version': '0.0.0' });
        var result = db.Runtime.find({ '_id': 'runtime1' });

        expect(result.length).toBe(1);
    });

    it('can add many documents', function () {
        db.Runtime.insert([{ '_id': 'runtime2', 'version': '0.0.0' }, { '_id': 'runtime3', 'version': '0.0.0' }]);
        var result = db.Runtime.find({ '_id': 'runtime2' });

        expect(result.length).toBe(1);
    });

    it('can update a document', function () {
        db.Runtime.update({ '_id': 'runtime1' }, { 'version': '0.0.4' });
        var result = db.Runtime.find({ '_id': 'runtime1' })[0];

        expect(result.version).toBe('0.0.4');
    });

    it('can update many documents', function () {
        db.Runtime.update([{ '_id': 'runtime2' }, { '_id': 'runtime3' }], { 'version': '0.0.4' });
        var result = db.Runtime.find({ '_id': 'runtime3' })[0];

        expect(result.version).toBe('0.0.4');
    });

    it('can update a document that does not exist', function () {
        db.Runtime.update({ '_id': 'runtime5' }, { 'version': '0.0.1' }, { 'upsert': true });
        var result = db.Runtime.find({ '_id': 'runtime5' });

        expect(result.length).toBe(1);
    });

    it('can remove a document', function () {
        var runtimeid = 'runtime' + Math.round(Math.random() * 1000000);

        db.Runtime.insert({ '_id': runtimeid, 'version': '0.0.0' });
        db.Runtime.remove({ '_id': runtimeid });
        var result = db.Runtime.find({ '_id': runtimeid });

        expect(result.length).toBe(0);
    });

    it('can remove many documents', function () {
        var runtimeid1 = 'runtime' + Math.round(Math.random() * 1000000);
        var runtimeid2 = 'runtime' + Math.round(Math.random() * 1000000);
        db.Runtime.insert([{ '_id': runtimeid1, 'version': '0.0.0' }, { '_id': runtimeid2, 'version': '0.0.0' }]);
        db.Runtime.remove([{ '_id': runtimeid1 }, { '_id': runtimeid2 }]);
        var result1 = db.Runtime.find({ '_id': runtimeid1 });
        var result2 = db.Runtime.find({ '_id': runtimeid2 });

        expect(result1.length + result2.length).toBe(0);
    });

    it('can init the database', function () {
        var result = null;

        db.init();

        result = db.Runtime.find({ '_id': 'runtime' });

        expect(result.length).toBe(1);
    });

});