# monoco

[![npm version](https://badge.fury.io/js/monoco.svg)](http://badge.fury.io/js/monoco)
[![Build Status](https://travis-ci.org/monocojs/monoco.svg?branch=master)](https://travis-ci.org/monocojs/monoco)
[![Coverage Status](https://img.shields.io/coveralls/monocojs/monoco.svg)](https://coveralls.io/r/monocojs/monoco)
[![devDependency Status](https://david-dm.org/monocojs/monoco/dev-status.svg)](https://david-dm.org/monocojs/monoco#info=devDependencies)
[![npm downloads](https://img.shields.io/npm/dm/monoco.svg)](https://www.npmjs.com/package/monoco)

#### What is monoco ?

It is a **5-in-1 JavaScript library**:

* it is **a metamodel** that helps you to design components,
* it is **a component factory** that creates components based on your design,
* it is **a worflow engine** that checks at runtime if the signatures of invoked methods are compliant with your model,
* it is an **ODM (Object Document Mapper)** to manage your components as NoSQL documents and
* it is **a micro NoSQL Database** that stores your components and can export/import them into another monoco NoSQL Database.

Finally monoco helps you to design, create and store components.

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

You will find examples on [monoco website](http://monoco.io/tutorial/00-intro.html).

Remember that **all the examples work both on server and browser**.

## Documentation

You will find documentations on [monoco website](http://monoco.io/doc/index.html).

There is a generated documentation of monoco core APIs on the [/doc](./doc) directory. This documentation is only usefull for using monoco core APIs in your code (via **Dependency Injection** on monoco behaviors). 

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
# run server tests (from /test/)
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

Copyright (C) 2015 - Erwan Carriou
 
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
 
You should have received a copy of the GNU General Public License
along with this program.  If not, see http://www.gnu.org/licenses/. 