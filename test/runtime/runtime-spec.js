describe('a Runtime instance', function () {

    // init
    if (typeof window === 'undefined') {
        runtime = require('../../src/runtime.js');
    }

    it('exists', function () {
        expect(runtime).toBeDefined();
    });

    it('can get its version', function () {
        var version = runtime.version();
        expect(typeof version).toBe('string');
    });

    it('can create a system', function () {
        var id = runtime.system('a system');
        expect(id).toBeDefined();
    });
});