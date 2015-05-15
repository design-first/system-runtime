describe('a monoco channel instance', function () {

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
        var metamodel = monoco.require('metamodel');

        metamodel.schema({
            "_id": "MonocoChannelSchema",
            "_name": "MonocoChannelSchema",
            "_inherit": ["MonocoComponentSchema"],
            "_core": true,
            "listen": "method",
            "send": "method",
            "test": "event"
        });

        metamodel.schema({
            "_id": "MonocoChannel",
            "_name": "MonocoChannel",
            "_schema": "MonocoChannelSchema",
            "_inherit": ["MonocoComponent"],
            "_core": true,
            "listen": {
                "params": [{
                        "name": "event",
                        "type": "string"
                    },
                    {
                        "name": "callback",
                        "type": "function"
                    }
                ]
            },
            "send": {
                "params": [{
                        "name": "message",
                        "type": "message"
                    }
                ],
                "result": "boolean"
            },
            "test": {
                "params": [{
                        "name": "event",
                        "type": "eventTest"
                    }]
            }
        });

        metamodel.type({
            "name": "eventTest",
            "type": "object",
            "schema": {
                "foo": {
                    "type": "string",
                    "mandatory": true
                }
            }
        });

        metamodel.create();

        var MonocoChannel = monoco.require('MonocoChannel');
        var channel = new MonocoChannel({
            '_id': 'channel'
        });
        var result = channel.send({
            "event": "test",
            "data": {
                "foo": "bar"
            }
        });

        expect(result).toBe(true);
    });

    it('can listen to a message', function (done) {
        var channel = monoco.require('channel');

        channel.listen('test', function (message) {
            share = message.foo;
        });

        channel.send({
            "event": "test",
            "data": {
                "foo": "bar"
            }
        });

        setTimeout(function () {
            expect(share).toBe('bar');
            done();
        }, 1);
    });
});