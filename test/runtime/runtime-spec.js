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

    it('can bundle a system', function () {
        var bundle = runtime.bundle();
        expect(bundle).toBeDefined();
    });

    it('can get the status of all installed systems', function () {
        var status = runtime.status();
        expect(status).toBeDefined();
    });
});