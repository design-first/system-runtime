describe('a db module', function () {

    var db = require('../../src/db.js');

    it('can find all document of a collection', function () {
        var result = db.Monoco.find();
        
        expect(result.length > 0).toBe(true);
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
        var result = db.Monoco.find({'_id': 'monoco1'});
        
        expect(result.length).toBe(1);
    });

    it('can add many documents', function () {
        db.Monoco.insert([{'_id': 'monoco2', 'version': '0.0.0'}, {'_id': 'monoco3', 'version': '0.0.0'}]);
        var result = db.Monoco.find({'_id': 'monoco2'});
        
        expect(result.length).toBe(1);
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
        db.Monoco.update({'_id': 'monoco5'}, {'version': '0.0.1'}, {'upsert': true});
        var result = db.Monoco.find({'_id': 'monoco5'});

        expect(result.length).toBe(1);
    });

    it('can remove a document', function () {
        var monocoid = 'monoco' + Math.round(Math.random() * 1000000);
        
        db.Monoco.insert({'_id': monocoid, 'version': '0.0.0'});
        db.Monoco.remove({'_id': monocoid});
        var result = db.Monoco.find({'_id': monocoid});

        expect(result.length).toBe(0);
    });

    it('can remove many documents', function () {
        var monocoid1 = 'monoco' + Math.round(Math.random() * 1000000);
        var monocoid2 = 'monoco' + Math.round(Math.random() * 1000000);
        db.Monoco.insert([{'_id': monocoid1, 'version': '0.0.0'}, {'_id': monocoid2, 'version': '0.0.0'}]);
        db.Monoco.remove([{'_id': monocoid1}, {'_id': monocoid2}]);
        var result1 = db.Monoco.find({'_id': monocoid1});
        var result2 = db.Monoco.find({'_id': monocoid2});

        expect(result1.length + result2.length).toBe(0);
    });

});