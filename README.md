# Runtime

[![npm version](https://badge.fury.io/js/system-runtime.svg)](http://badge.fury.io/js/system-runtime)
[![Build Status](https://travis-ci.org/system-sdk/system-runtime.svg?branch=master)](https://travis-ci.org/system-sdk/system-runtime)
[![Sauce Test Status](https://saucelabs.com/buildstatus/system-runtime)](https://saucelabs.com/u/system-runtime)
[![Coverage Status](https://coveralls.io/repos/github/system-sdk/system-runtime/badge.svg?branch=master)](https://coveralls.io/github/system-sdk/system-runtime?branch=master)
[![devDependency Status](https://david-dm.org/system-sdk/system-runtime/dev-status.svg)](https://david-dm.org/system-sdk/system-runtime#info=devDependencies)

## What is Runtime ?

#### a JSON Runtime Environment

[JSON](http://json.org) is traditionnaly used to represent data. We use this format to store the model, components and methods of your application. Runtime can run JSON that contains your application as a JRE (JSON Runtime Environment).

Runtime has APIs to serialize your JavaScript code into JSON. This JSON can be then imported and executed in a client or server application.

## How works Runtime ?

Runtime executes your JSON client and server side.

#### Runtime APIs

Use Runtime APIs to create your application:

```js
// create an app
var app = runtime.system('app');

// add code in the main method
app.on('main', function main() {
    console.log('Hello world !');
});

// run the app
app.main();
```

Runtime will automatically serialize it into JSON:

```json
{
  "_id": "154cd18d0210516",
  "name": "app",
  "description": "",
  "version": "0.0.1",
  "schemas": {},
  "models": {},
  "types": {},
  "behaviors": {
    "1ea9c1d5f811ae1": {
      "_id": "1ea9c1d5f811ae1",
      "component": "154cd18d0210516",
      "state": "main",
      "action": "function main() {\n    console.log('Hello world !');\n}",
      "useCoreAPI": false,
      "core": false
    }
  },
  "components": {}
}
```

#### HTML import

Just add a link tag in your HTML to execute your app:

```html
<!-- import your app -->
<link rel="system" type="application/json" href="app.json">

<!-- load Runtime -->
<script src="/bower_components/system-runtime/build/system-runtime.min.js"></script>
```

#### Node.js import

Just require your JSON in Node.js to execute your app:

```js
// require Runtime
var runtime = require('system-runtime');

// require your app
var app = require('./app.json');

// import your app into Runtime NoSQL DB
var appId = runtime.require('db').system(app);

// run your app
runtime.require(appId).main();
```

#### Component APIs

You can create components in Runtime:

```js
// require Runtime metamodel
var metamodel = runtime.require('metamodel');

// define a component class
metamodel.schema({
    '_name': 'Jedi',
    'firstName': 'property',
    'lastName': 'property'
});

// create a model
metamodel.create();

// create a component
var Jedi = runtime.require('Jedi');
var luke = new Jedi({
    'firstName': 'Luke',
    'lastName': 'SkyWalker'
});

// update its property
luke.lastName('StarKiller');
```

## What contains Runtime ?

#### A metamodel

Runtime contains a metamodel to help you to design your model. The definition of the model is made on a JSON format called [MSON](https://system-runtime.readme.io/docs/design-your-model#section-mson), no code is needed. 

With [MSON](https://system-runtime.readme.io/docs/design-your-model#section-mson) you can define types, classes, one to one / one to many relationships and multi inheritance between classes. 

[MSON](https://system-runtime.readme.io/docs/design-your-model#section-mson) is based on [UML](http://uml.org), so learning it is very easy.

#### A component factory

Runtime uses the [Model-Driven Architecture](http://www.omg.org/mda/) approach to create classes based on your design. Use them to instantiate your components. 

#### A NoSQL Database

Runtime acts as an ODM (Object-Document Mapper) to manage your components as NoSQL Documents. 

Runtime has a micro NoSQL Database that stores your components and you can export/import them into another Runtime NoSQL Database. 

Thanks to Runtime NoSQL Database, you can compose your model with an another one.

#### A workflow engine

Runtime checks at runtime if the signatures of invoked methods are compliant with your model. 

With Runtime your components really behave the way you designed them. 

## Installation

#### Node.js

```sh
$ npm install system-runtime --save
```

Then:

```js
var runtime = require('system-runtime');
```

#### Bower

```sh
$ bower install system-runtime --save
```

Add a `<script>` tag to your HTML page:
```html
<script src="/bower_components/system-runtime/build/system-runtime.min.js"></script>
```

Then you can use runtime on your script:
```js
// example: get Runtime version
runtime.version();
```

## Documentation

* [Quick Start](https://system-runtime.readme.io/docs/quick-start)
* [Guide](https://system-runtime.readme.io/docs/installation)
* [Examples](https://system-runtime.readme.io/docs/a-basic-hello-world)
* [Build Runtime](https://system-runtime.readme.io/docs/extend-runtime)

## Licence

The MIT License (MIT)

Copyright (c) 2016 Erwan Carriou

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 