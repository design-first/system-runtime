#[Monoco](http://monoco.io/)

[![Build Status](https://travis-ci.org/monocojs/monoco.svg?branch=master)](https://travis-ci.org/monocojs/monoco)

#### What is Monoco ?

Monoco is a client & server JavaScript library for managing your components.

Monoco contains:

 * a **metamodel** based on a JSON format to create your model,
 * a **component factory** that creates simple JavaScript classes based on your model,
 * a **micro NoSQL Database** to store your components and to export/import your system and
 * a **worflow engine** that checks if the change of the state of a component is compliant with your model.

#### How Monoco works ?

Monoco is based on the concept of **system**:

> A system is a set of interacting or interdependent **components** forming an integrated whole.

> A system has **structure**, it contains parts (or components) that are directly or indirectly related to each other;

> A system has **behavior**, it exhibits processes that fulfill its function or purpose;

> A system has **interconnectivity**: the parts and processes are connected by structural and/or behavioral relationships.

> A **system's structure and behavior may be decomposed via subsystems** and sub-processes to elementary parts and process steps.

> -Wikipedia

In Monoco :

* a **system** is a set of models, components and behaviors,
* a **component** is an immutable statefull class or object,
* a **structure** is defined by a schema,
* a **behavior** is the actions that a component does when its state change,
* **interconnectivity** is the relationships between components defined by the model and
* every **systems can be decomposed on subsystems**.

## Example

Create a system:
```js
var system = monoco.system('example');
```

Create a model:
```js
var metamodel = monoco.require('metamodel');

// create a new type
metamodel.type({
    'name': 'lasersaberColor',
    'type': 'string',
    'value': ['blue', 'red']
});

// create a metaclass schema that defines the properties, 
// methods and events of the class
metamodel.schema({
    '_name': 'JediSchema',
    '_inherit': ['MonocoComponentSchema'],
    'description': 'string',
    'lasersaberColor': 'property',
    'firstName': 'property',
    'lastName': 'property',
    'nickname': 'property',
    'father': 'property',
    'shout': 'method'
});

// create a class schema that defines the input / output of the methods, 
// types of the properties, types of the parameters, ...
metamodel.schema({
    '_name': 'Jedi',
    '_schema': 'JediSchema', // the class schema must be compliant with its schema
    '_inherit': ['MonocoComponent'],
    'description': 'a jedi',
    'lasersaberColor': {
        'type': 'lasersaberColor',
        'readOnly': false,
        'mandatory': true,
        'default': 'blue'
    },
    'firstName': {
        'type': 'string',
        'readOnly': false,
        'mandatory': true,
        'default': ''
    },
    'lastName': {
        'type': 'string',
        'readOnly': false,
        'mandatory': true,
        'default': ''
    },
    'nickname': {
        'type': 'string',
        'readOnly': false,
        'mandatory': false,
        'default': ''
    },
    'father': {
        'type': '@Jedi', // create a link
        'readOnly': false,
        'mandatory': false,
        'default': {}
    },
    'shout': {
        'params': [
            {
                'name': 'message',
                'type': 'string'
            }
        ],
        'result': 'string'
    }
});

metamodel.create();
```

Add behaviors:
```js
// you can require all classes/components defined by the model
var Jedi = monoco.require('Jedi');

// add the behavior
Jedi.on('shout', function (message) {
    return message + '!!';
});
```

Add some code in the main method of the system:
```js
system.on('main', function () {
    var Jedi = this.require('Jedi');

    var anakin = new Jedi({
        'firstName': 'Anakin',
        'lastName': 'Skywalker',
        'nickname': 'Darth Vader',
        'lasersaberColor': 'red'
    });

    var luke = new Jedi({
        'firstName': 'Luke',
        'lastName': 'Skywalker',
        'lasersaberColor': 'blue',
        'father': anakin // add the reference
    });

    // navigate threw the model
    if (luke.father().nickname() === 'Darth Vader') {
        luke.shout('NOOOOOO');
    }

});
```

Execute the code:
```js
system.main();
```

Export the system. All the models, components and behaviors will be exported in JSON.
```js
monoco.require('db').system();
```

Import the system into an another one:
```html
 <link rel="system" type="application/json" href="example.json"/> 
```

You will find more examples on the [/example](./example) directory.

## Installation

#### Bower

```sh
bower install monoco --save
```

Then add a `<script>` tag to your HTML page:
```html
<script src="/bower_components/monoco/build/monoco-min.js" type="text/javascript"></script>
```

#### Node.js

```sh
npm install monoco --save
```

Then require monoco:
```js
var monoco = require('monoco');
```

## Extend Monoco


#### Monoco Core System

Monoco has got a **customizable core system**. You can update all its components, models or behaviors to follow your needs.

Monoco core system is located on the [/src/system](./src/system) directory:
* ``` behaviors ```: contains all the behaviors of the core components of Monoco,
* ``` components ```: contains all the core components of Monoco,
* ``` schemas ```: contains all the schemas of the core components of Monoco and
* ``` types ```: contains all the types of the core components of Monoco.

#### Monoco Addons

You can update Monoco core system **by composing other systems** with it. In that case, other systems are called **addons**. 

Monoco addons are located on the [/addons](./addons/) directory. 
You will find all the systems that you can import on Monoco. 
To do so, just copy and paste a system into the [/src/addons](./src/addons/) directory and build Monoco.

#### Grunt

Grunt is used for automating the basic tasks of Monoco. You can use it to extend Monoco core system or to package your own system with Monoco.


```sh
# run server tests
grunt test
# clean the build directory 
grunt clean
# generate the documentation
grunt doc
# build monoco on 'debug' mode
grunt debug
# build monoco
# it will generate the monoco core system (on /src/system/)
# it will also run jshint and server/client tests
grunt build
```

## Documentation

There is a generated [documentation](/doc/index.html) of Monoco core APIs. This documentation is only usefull for using Monoco core APIs in your code (via **Dependency Injection** on Monoco behaviors).

## Licence

Monoco is distributed under [MIT licence](./LICENSE).
