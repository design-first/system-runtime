# SyrupJS

[![npm version](https://badge.fury.io/js/system-runtime.svg)](http://badge.fury.io/js/system-runtime)
[![Build Status](https://travis-ci.org/system-sdk/system-runtime.svg?branch=master)](https://travis-ci.org/system-sdk/system-runtime)
[![Sauce Test Status](https://saucelabs.com/buildstatus/system-runtime)](https://saucelabs.com/u/system-runtime)
[![Coverage Status](https://coveralls.io/repos/github/system-sdk/system-runtime/badge.svg?branch=master)](https://coveralls.io/github/system-sdk/system-runtime?branch=master)
[![devDependency Status](https://david-dm.org/system-sdk/system-runtime/dev-status.svg)](https://david-dm.org/system-sdk/system-runtime#info=devDependencies)

## What is SyrupJS ?

[SyrupJS](https://syrupjs.github.io) (System Runtime Platform) is a JavaScript library to run and manage **JavaScript Application Systems** created with [System Designer](http://designfirst.io).

SyrupJS is part of the [System SDK project](https://github.com/system-sdk).
System SDK is a SDK for building JavaScript Application Systems.

## What does SyrupJS do ?

#### JSON Virtual Machine (JVM)

[JSON](http://json.org) is traditionnaly used to represent data. We use this format to store your model, components and the behaviors of your app.

SyrupJS will load your JSON and run your app as a JVM (JSON Virtual Machine).

## What contains SyrupJS ?

#### A metamodel

SyrupJS contains a metamodel to help you to design your model. The definition of the model is made on a JSON format called [MSON](https://syrupjs.readme.io/docs/design-your-model#section-mson), no code is needed. 

With [MSON](https://syrupjs.readme.io/docs/design-your-model#section-mson) you can define types, classes, one to one / one to many relationships and multi inheritance between classes. 

[MSON](https://syrupjs.readme.io/docs/design-your-model#section-mson) is based on [UML](http://uml.org), so learning it is very easy.

#### A NoSQL Database

SyrupJS acts as an ODM (Object-Document Mapper) to manage your components as NoSQL Documents. 

SyrupJS has a micro NoSQL Database that stores your components and you can export/import them into another SyrupJS NoSQL Database. 

Thanks to SyrupJS NoSQL Database, you can compose your model with an another one.

#### A component factory

SyrupJS uses the [Model-Driven Architecture](http://www.omg.org/mda/) approach to create classes based on your design. Use them to instantiate your components. 

#### A workflow engine

SyrupJS checks at runtime if the signatures of invoked methods are compliant with your model. 

With SyrupJS your components really behave the way you designed them. 

## Installation

#### Node.js

```sh
$ npm install system-runtime --save
```

Then:

```js
var syrup = require('system-runtime');
```

#### Bower

```sh
$ bower install system-runtime --save
```

Add a `<script>` tag to your HTML page:
```html
<script src="/bower_components/system-runtime/build/system-runtime.min.js"></script>
```

Then you can use syrup on your script:
```js
// example: get SyrupJS version
syrup.version();
```

## Documentation

* [Quick Start](https://syrupjs.readme.io/docs/quick-start)
* [Guide](https://syrupjs.readme.io/docs/installation)
* [Examples](https://syrupjs.readme.io/docs/a-basic-hello-world)
* [Build SyrupJS](https://syrupjs.readme.io/docs/extend-syrupjs)

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