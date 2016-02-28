describe('a db module', function () {

    var db = require('../../src/db.js');

    it('can find all document of a collection', function () {
        var result = db.Syrup.find();

        expect(result.length > 0).toBe(true);
    });

    it('can find a document with a criteria', function () {
        var result = db.Syrup.find({ '_id': 'syrup' });

        expect(result.length).toBe(1);
    });

    it('can find a document with multi criteria', function () {
        var result = db.Syrup.find([{ '_id': 'syrup' }]);

        expect(result.length).toBe(1);
    });

    it('can find a document with regex criteria', function () {
        var result = db.Syrup.find({ '_id': /syrup/ });

        expect(result.length).toBe(1);
    });

    it('can add a document', function () {
        db.Syrup.insert({ '_id': 'syrup1', 'version': '0.0.0' });
        var result = db.Syrup.find({ '_id': 'syrup1' });

        expect(result.length).toBe(1);
    });

    it('can add many documents', function () {
        db.Syrup.insert([{ '_id': 'syrup2', 'version': '0.0.0' }, { '_id': 'syrup3', 'version': '0.0.0' }]);
        var result = db.Syrup.find({ '_id': 'syrup2' });

        expect(result.length).toBe(1);
    });

    it('can update a document', function () {
        db.Syrup.update({ '_id': 'syrup1' }, { 'version': '0.0.4' });
        var result = db.Syrup.find({ '_id': 'syrup1' })[0];

        expect(result.version).toBe('0.0.4');
    });

    it('can update many documents', function () {
        db.Syrup.update([{ '_id': 'syrup2' }, { '_id': 'syrup3' }], { 'version': '0.0.4' });
        var result = db.Syrup.find({ '_id': 'syrup3' })[0];

        expect(result.version).toBe('0.0.4');
    });

    it('can update a document that does not exist', function () {
        db.Syrup.update({ '_id': 'syrup5' }, { 'version': '0.0.1' }, { 'upsert': true });
        var result = db.Syrup.find({ '_id': 'syrup5' });

        expect(result.length).toBe(1);
    });

    it('can remove a document', function () {
        var syrupid = 'syrup' + Math.round(Math.random() * 1000000);

        db.Syrup.insert({ '_id': syrupid, 'version': '0.0.0' });
        db.Syrup.remove({ '_id': syrupid });
        var result = db.Syrup.find({ '_id': syrupid });

        expect(result.length).toBe(0);
    });

    it('can remove many documents', function () {
        var syrupid1 = 'syrup' + Math.round(Math.random() * 1000000);
        var syrupid2 = 'syrup' + Math.round(Math.random() * 1000000);
        db.Syrup.insert([{ '_id': syrupid1, 'version': '0.0.0' }, { '_id': syrupid2, 'version': '0.0.0' }]);
        db.Syrup.remove([{ '_id': syrupid1 }, { '_id': syrupid2 }]);
        var result1 = db.Syrup.find({ '_id': syrupid1 });
        var result2 = db.Syrup.find({ '_id': syrupid2 });

        expect(result1.length + result2.length).toBe(0);
    });

    it('can init the database', function () {
        var result = null;

        db.init();

        result = db.Syrup.find({ '_id': 'syrup' });

        expect(result.length).toBe(1);
    });

});