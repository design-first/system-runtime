# monoco

[![npm version](https://badge.fury.io/js/monoco.svg)](http://badge.fury.io/js/monoco)
[![Build Status](https://travis-ci.org/monocojs/monoco.svg?branch=master)](https://travis-ci.org/monocojs/monoco)
[![Coverage Status](https://img.shields.io/coveralls/monocojs/monoco.svg)](https://coveralls.io/r/monocojs/monoco)
[![Dependency Status](https://david-dm.org/monocojs/monoco.svg)](https://david-dm.org/monocojs/monoco)
[![devDependency Status](https://david-dm.org/monocojs/monoco/dev-status.svg)](https://david-dm.org/monocojs/monoco#info=devDependencies)

<p align="center">
    <a href="http://monoco.io/">
        <img height="240" width="240" src="http://monoco.io/img/logo.png">
    </a>
</p>

#### What is monoco ?

It is a **4-in-1 JavaScript library**:

* it is **a metamodel** that help you to design components,
* it is **a component factory** that creates components based on your design,
* it is **a worflow engine** that checks at runtime if the signature of all methods of your components are compliant with your model and
* it is **a micro NoSQL Database** that stores your components and can export/import them into another monoco NoSQL Database.

Finally monoco help you to design, create and store components.

## Installation

#### Node.js

```sh
$ npm install monoco --save
```

Then require monoco:
```js
var monoco = require('monoco');
```

#### Bower

```sh
$ bower install monoco --save
```

Add a `<script>` tag to your HTML page:
```html
<script src="/bower_components/monoco/build/monoco-min.js"></script>
```

Then you can use monoco on your script:
```js
// example: get monoco version
monoco.version();
```

## Examples

You will find examples on the [/example](./example) directory or on [monoco website](http://monoco.io/tutorial/00-intro.html).

Remember that **all the examples work both on server and browser**.

## Documentation

There is a generated [documentation](/doc/index.html) of monoco core APIs. This documentation is only usefull for using monoco core APIs in your code (via **Dependency Injection** on monoco behaviors). 

For more documentations, go to [monoco website](http://monoco.io/doc/index.html).

## Extend monoco

#### Build your own version of monoco

Once you have cloned the repository:

```sh
# for server tests (maybe you have this installed already)
$ npm install -g jasmine-node 
# for client build (maybe you have this installed already)
$ npm install -g browserify
# needed by grunt (maybe you have this installed already)
$ npm install -g grunt-cli
# install dev dependencies
$ npm install
# build monoco
$ grunt build
```

#### Grunt

To extend monoco core system or to package your own system with monoco, you will need to use grunt commands. Here are the different tasks you can use to automate tasks:

```sh
# run server tests (from /spec/)
$ grunt test
# generate the documentation (on /doc/)
$ grunt doc
# clean the build directory
$ grunt clean
# build monoco on 'debug' mode (on /build/)
# it will generate monoco core system (from /src/system/)
# and package monoco client library
# it will also run jshint and server tests
$ grunt debug
# build monoco (on /build/)
# it will generate monoco core system (from /src/system/) 
# and package monoco client library
# it will also run jshint and server and client tests
$ grunt build
```

#### monoco core system

monoco has got a **customizable core system**. You can update all its components, models or behaviors to follow your needs.

monoco core system is located on the [/src/system](./src/system) directory:
* ``` behaviors ```: contains all the behaviors of the core components of monoco,
* ``` components ```: contains all the core components of monoco,
* ``` schemas ```: contains all the schemas of the core components of monoco and
* ``` types ```: contains all the types of the core components of monoco.

When you have finished to update monoco core system, just build monoco.

#### monoco addons

You can extend monoco core system **by composing other systems** with it. In that case, other systems are called **addons**. 

monoco addons are located on the [/addons](./addons/) directory. 
You will find there all the systems that you can import. 

To compose a system with monoco core system, just copy and paste a system into the [/src/addons](./src/addons/) directory and build monoco.

## Licence

monoco is distributed under [GPLv3](./LICENSE).