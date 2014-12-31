describe('Monoco instance', function () {

    // init
    if (typeof window === 'undefined') {
        monoco = require('../src/monoco.js');
    }

    it('exists', function () {
        expect(monoco).toBeDefined();
    });

    it('can get its version', function () {
        var version = monoco.version();
        expect(typeof version).toBe('string');
    });

    it('can find a component', function () {
        var result = monoco.find('MonocoDatabase', {});
        expect(result.length).toBe(1);
    });

    it('can create a system', function () {
        var id = monoco.system('a system');
        expect(id).toBeDefined();
    });
});