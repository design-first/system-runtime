# System Runtime

[![Build Status](https://travis-ci.org/system-sdk/system-runtime.svg?branch=master)](https://travis-ci.org/system-sdk/system-runtime)
[![Sauce Test Status](https://saucelabs.com/buildstatus/system-runtime)](https://saucelabs.com/u/system-runtime)
[![Coverage Status](https://coveralls.io/repos/github/system-sdk/system-runtime/badge.svg?branch=master)](https://coveralls.io/github/system-sdk/system-runtime?branch=master)
[![devDependency Status](https://david-dm.org/system-sdk/system-runtime/dev-status.svg)](https://david-dm.org/system-sdk/system-runtime#info=devDependencies)

## What is System Runtime ?

#### a System Bundle Runtime

System Runtime can create, install and start bundles like in [OSGi](https://www.osgi.org). 

System Runtime can bundle the model, components and methods of your application into a [JSON](http://json.org) object. This bundle can be then installed and started in a client or server application.

## How works System Runtime ?

System Runtime executes your bundles client and server side.

#### System Runtime APIs

Use System Runtime APIs to create your application:

```js
// create an app
var app = runtime.system('app');

// add code in the start method
app.on('start', function start() {
    console.log('Hello world !');
});

// run the app
app.start();
```

Now you can bundle your application into a JSON object:

```js
// create a bundle
runtime.bundle();
```

It will return this JSON:
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
      "state": "start",
      "action": "function start() {\n    console.log('Hello world !');\n}",
      "useCoreAPI": false,
      "core": false
    }
  },
  "components": {}
}
```

#### HTML import

Just add a link tag in your HTML to install and start your bundle:

```html
<!-- Install your bundle -->
<link rel="system" type="application/json" href="app.json">

<!-- load System Runtime -->
<script src="/bower_components/system-runtime/dist/system-runtime.min.js"></script>
```

#### Node.js import

Just call *install* API to install and start your bundle:

```js
// require System Runtime
var runtime = require('system-runtime');

// install 
var appId = runtime.install('app.json');
// start
runtime.start(appId);
```

## What contains System Runtime ?

#### A metamodel

System Runtime contains a metamodel to help you to design your model. The definition of the model is made on a JSON format called [MSON](https://system-runtime.readme.io/docs/design-your-model#section-mson), no code is needed. 

With [MSON](https://system-runtime.readme.io/docs/design-your-model#section-mson) you can define types, classes, one to one / one to many relationships and multi inheritance between classes. 

[MSON](https://system-runtime.readme.io/docs/design-your-model#section-mson) is based on [UML](http://uml.org), so learning it is very easy.

#### A component factory

System Runtime uses the [Model-Driven Architecture](http://www.omg.org/mda/) approach to create classes based on your design. Use them to instantiate your components. 

#### A NoSQL Database

System Runtime acts as an ODM (Object-Document Mapper) to manage your components as NoSQL Documents. 

System Runtime has a micro NoSQL Database that stores your components and you can export/import them into another System Runtime NoSQL Database. 

Thanks to System Runtime NoSQL Database, you can compose your model with an another one.

#### A workflow engine

System Runtime checks at runtime if the signatures of invoked methods are compliant with your model. 

With System Runtime your components really behave the way you designed them. 

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
<script src="/bower_components/system-runtime/dist/system-runtime.min.js"></script>
```

Then you can use runtime on your script:
```js
// example: get System Runtime version
runtime.version();
```

## Documentation

* [Quick Start](https://system-runtime.readme.io/docs/quick-start)
* [Guide](https://system-runtime.readme.io/docs/installation)
* [Examples](https://system-runtime.readme.io/docs/a-basic-hello-world)
* [Build System Runtime](https://system-runtime.readme.io/docs/extend-runtime)

## Licence

Copyright 2016 Erwan Carriou

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. 