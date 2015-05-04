# [monoco](http://monoco.io/)

[![Build Status](https://travis-ci.org/monocojs/monoco.svg?branch=master)](https://travis-ci.org/monocojs/monoco) [![Coverage Status](https://img.shields.io/coveralls/monocojs/monoco.svg)](https://coveralls.io/r/monocojs/monoco)

#### What is monoco ?

 * monoco is a **JavaScript library to design, create and store JavaScript components**,
 * monoco is an **isomorphic** library: the components will work on both client and server side,
 * monoco **dynamically checks the signature of all the methods of the components at runtime**,
 * monoco creates **persistant components** that are stored on a tiny NoSQL Database and
 * monoco creates **composed components** thanks to its modulary system.

#### What monoco contains ?

 * a **metamodel** based on a JSON format to create a model,
 * a **component factory** that creates stateful JavaScript classes based on a model,
 * a **micro NoSQL Database** to store components and to export/import them,
 * a **worflow engine** that checks at runtime if the signature of all methods are compliant with the model and
 * a **channel** in which components can exchange typed messages.

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

Then add a `<script>` tag to your HTML page:
```html
<script src="/bower_components/monoco/build/monoco-min.js"></script>
```

## Examples

You will find examples on the [/example](./example) directory or on [monoco website](http://monoco.io/tutorial/00-intro.html).

## Extend monoco

#### monoco core system

monoco has got a **customizable core system**. You can update all its components, models or behaviors to follow your needs.

monoco core system is located on the [/src/system](./src/system) directory:
* ``` behaviors ```: contains all the behaviors of the core components of monoco,
* ``` components ```: contains all the core components of monoco,
* ``` schemas ```: contains all the schemas of the core components of monoco and
* ``` types ```: contains all the types of the core components of monoco.

When you have finished to update monoco core system, build monoco.

```sh
$ grunt build
```

#### monoco addons

You can update monoco core system **by composing other systems** with it. In that case, other systems are called **addons**. 

Monoco addons are located on the [/addons](./addons/) directory. 
You will find all the systems that you can import on monoco. 
To do so, just copy and paste a system into the [/src/addons](./src/addons/) directory and build monoco.

```sh
$ grunt build
```

## Documentation

There is a generated [documentation](/doc/index.html) of monoco core APIs. This documentation is only usefull for using monoco core APIs in your code (via **Dependency Injection** on monoco behaviors). For more documentations, go to [monoco website](http://monoco.io/).

## Licence

Monoco is distributed under [GPLv3](./LICENSE).