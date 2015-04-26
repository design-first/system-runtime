describe('Monoco Channel instance', function () {

    // init
    if (typeof window === 'undefined') {
        monoco = require('../../src/monoco.js');
    }
    var share = '';

    it('exists', function () {
        var channel = monoco.require('channel');
        expect(channel).toBeDefined();
    });

    it('can send a message', function () {
        var ChannelEvent = monoco.require('MonocoChannelEvent');
        var event = new ChannelEvent({
            'name': 'test',
            'type': 'test'
        });

        var metamodel = monoco.require('metamodel');
        metamodel.type({
            "name": "test",
            "type": "object",
            "schema": {
                "foo": {
                    "type": "string",
                    "mandatory": true
                }
            }
        });
        metamodel.create();

        var channel = monoco.require('channel');
        var result = channel.send({
            "event": "test",
            "from": "",
            "data": {
                "foo": "bar"
            }
        });

        expect(result).toBe(true);
    });

    it('can listen to a message', function () {
        var channel = monoco.require('channel');

        channel.listen('test', function (message) {
            share = message.data.foo;
        });

        channel.send({
            "event": "test",
            "from": "",
            "data": {
                "foo": "bar"
            }
        });

        expect(share).toBe('bar');
    });
});