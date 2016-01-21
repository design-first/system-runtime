describe('a syrup instance', function () {

    // init
    if (typeof window === 'undefined') {
        syrup = require('../../src/syrup.js');
    }

    it('exists', function () {
        expect(syrup).toBeDefined();
    });

    it('can get its version', function () {
        var version = syrup.version();
        expect(typeof version).toBe('string');
    });

    it('can create a system', function () {
        var id = syrup.system('a system');
        expect(id).toBeDefined();
    });
});