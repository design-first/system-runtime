describe('db module', function () {

    // init
    var db = require('../../src/db.js');

    it('can find all document of a collection', function () {
        var result = db.Monoco.find();
        expect(result.length).toBe(1);
    });

    it('can find a document with a criteria', function () {
        var result = db.Monoco.find({'_id': 'monoco'});
        expect(result.length).toBe(1);
    });

    it('can find a document with multi criteria', function () {
        var result = db.Monoco.find([{'_id': 'monoco'}]);
        expect(result.length).toBe(1);
    });

    it('can add a document', function () {
        db.Monoco.insert({'_id': 'monoco1', 'version': '0.0.0'});
        var result = db.Monoco.find();
        expect(result.length).toBe(2);
    });

    it('can add many documents', function () {
        db.Monoco.insert([{'_id': 'monoco2', 'version': '0.0.0'}, {'_id': 'monoco3', 'version': '0.0.0'}]);
        var result = db.Monoco.find();
        expect(result.length).toBe(4);
    });

    it('can update a document', function () {
        db.Monoco.update({'_id': 'monoco1'}, {'version': '0.0.4'});
        var result = db.Monoco.find({'_id': 'monoco1'})[0];
        expect(result.version).toBe('0.0.4');
    });

    it('can update many documents', function () {
        db.Monoco.update([{'_id': 'monoco2'}, {'_id': 'monoco3'}], {'version': '0.0.4'});
        var result = db.Monoco.find({'_id': 'monoco3'})[0];
        expect(result.version).toBe('0.0.4');
    });

    it('can update a document that does not exist', function () {
        db.Monoco.update({'_id': 'monoco5'}, {'version': '0.0.4'}, {'upsert': true});
        var result = db.Monoco.find();
        expect(result.length).toBe(5);
    });

    it('can remove a document', function () {
        db.Monoco.remove({'_id': 'monoco1'});
        var result = db.Monoco.find();
        expect(result.length).toBe(4);
    });

    it('can remove many documents', function () {
        db.Monoco.remove([{'_id': 'monoco2'}, {'_id': 'monoco3'}]);
        var result = db.Monoco.find();
        expect(result.length).toBe(2);
    });

});