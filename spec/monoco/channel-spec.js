describe('Monoco Channel instance', function () {

    // init
    if (typeof window === 'undefined') {
        monoco = require('../../src/monoco.js');
    }
    var share = '';
    var shareBus = '';

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
                "truc": {
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
                "truc": "toto"
            }
        });

        expect(result).toBe(true);
    });

    it('can listen to a message', function () {
        var channel = monoco.require('channel');

        channel.listen('test', function (message) {
            share = message.data.truc;
        });

        channel.send({
            "event": "test",
            "from": "",
            "data": {
                "truc": "toto"
            }
        });

        expect(share).toBe('toto');
    });

    it('can send message to a bus', function () {
        var Bus = monoco.require('MonocoBus');
        var testBus = new Bus({
            'name': 'test'
        });

        testBus.on('send', function (message) {
            shareBus = message.data.truc;
            return true;
        });

        var channel = monoco.require('channel');
        channel.send({
            "event": "test",
            "from": "",
            "data": {
                "truc": "titi"
            }
        });

        expect(shareBus).toBe('titi');
    });
});