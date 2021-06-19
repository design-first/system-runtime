# System Runtime

[![unit tests](https://github.com/design-first/system-runtime/actions/workflows/node.js.yml/badge.svg)](https://github.com/design-first/system-runtime/actions/workflows/node.js.yml)

## What is System Runtime ?

When you code, you do not create an application, you create in fact a [system](https://en.wikipedia.org/wiki/System).
System Runtime gives you the APIs to create the model, components and behaviors of your system.

## What is a system ?

A system:

* is defined by a model,
* is composed by components and
* reacts to events with actions that we call behaviors.

![Image Alt](https://designfirst.io/img/system.png)

## How does System Runtime work?

#### Create a system

Use System Runtime APIs to create your system:

```js
// create a system
const system = runtime.system('system');

// add some business logic in the start method
system.on('start', () => console.log('Hello world !'));

// run the system
system.start();
```

Now you can bundle your system into a JSON object:

```js
// create a bundle
runtime.bundle();
```

It will return this JSON:
```json
{
  "_id": "154cd18d0210516",
  "name": "system",
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
      "action": "() => console.log('Hello world !')",
      "useCoreAPI": false,
      "core": false
    }
  },
  "components": {}
}
```

#### Install the bundle in HTML

Just add a link tag in your HTML to install and start your bundle:

```html
<!-- install your bundle -->
<link rel="system" type="application/json" href="system.json">
```

#### Install the bundle in Node.js

Just call *install* API to install and start your bundle:

```js
// require System Runtime
const runtime = require('system-runtime');

// install your bundle 
runtime.install('system.json');
```

## How System runtime helps you to create your system ?

#### Create your system

Creating a system in System Runtime is very simple, you do not have to code but just to define its model in a human readable format called [MSON](https://designfirst.io/systemruntime/documentation/docs/design-your-model.html#defining-your-model).

With [MSON](https://designfirst.io/systemruntime/documentation/docs/design-your-model.html#defining-your-model) you can define types, classes, one to one / one to many relationships and multi inheritance between classes.

```js
const metamodel = runtime.require('metamodel');

// create the Jedi schema
metamodel.schema('Jedi', {
  'firstName': 'property',
  'lastName': 'property',
  'nickname': 'property',
  'father': 'link',
  'shout': 'method'
});

metamodel.create();
```

#### Create your components

Once your model is created, you will be able to get the classes of your model and create components based on your model.

Because you have defined a model for your system, a [Dynamic Type Check](https://en.wikipedia.org/wiki/Type_system#DYNAMIC) is done on every action of your system.

```js
// get your component class
const Jedi = runtime.require('Jedi');

// create components
const luke = new Jedi({
  'firstName': 'Luke',
  'lastName': 'Skywalker'
});

const anakin = new Jedi({
  'firstName': 'Anakin',
  'lastName': 'Skywalker'
});

// add a link
luke.father(anakin);

// get the first name of luke father
luke.father().firstName();
```

#### Manage your components 

All your components are stored in System Runtime NoSQL Database. In fact, System Runtime acts as an ODM (Object-Document Mapper) to manage your components as NoSQL Documents.

You can find, create, update, delete components like you do in a NoSQL Database.

```js
// get a collection
const Jedi = runtime.require('db').collections().Jedi;

// find components
Jedi.find({
  'firstName': 'Luke'
});

// update components
Jedi.update({
  'firstName': 'Anakin'
},{
  'nickname': 'Darth Vader'
});

// remove components
Jedi.remove({
  'firstName': 'Anakin'
});;
```

## What contains System Runtime ?

![Image Alt](https://designfirst.io/img/archi.png)

#### A metamodel

System Runtime contains a metamodel to help you to design your model. The definition of the model is made on a JSON format called [MSON](https://designfirst.io/systemruntime/documentation/docs/design-your-model.html#defining-your-model), no code is needed. 

With [MSON](https://designfirst.io/systemruntime/documentation/docs/design-your-model.html#defining-your-model) you can define types, classes, one to one / one to many relationships and multi inheritance between classes. 

[MSON](https://designfirst.io/systemruntime/documentation/docs/design-your-model.html#defining-your-model) is based on [UML](http://uml.org), so learning it is very easy.

#### A component factory

System Runtime uses the [Model-Driven Architecture](http://www.omg.org/mda/) approach to create classes based on your design. Use them to instantiate your components. 

#### A NoSQL Database

System Runtime acts as an ODM (Object-Document Mapper) to manage your components as NoSQL Documents. 

System Runtime has a micro NoSQL Database that stores your components and you can export/import them into another System Runtime NoSQL Database. 

Thanks to System Runtime NoSQL Database, you can compose your system with an another system.

#### A workflow engine

System Runtime checks at runtime if the signatures of invoked methods are compliant with your model. 

With System Runtime your components really behave the way you designed them.

## Build

#### Installation

Clone the repository:

```sh
git clone https://github.com/design-first/system-runtime.git
```

Once you have cloned the repository, install the dependencies:

```sh
npm i
```	 	

#### Build

Then build System Runtime:

```sh
npm run build
```	 

It will:
*  build System Runtime core module for the server library and
*  build System Runtime client library on **/dist** directory

## Development

To start System Runtime in development mode:

```sh
npm run dev
```

All the modifications to the source code of System Runtime will rebuild the project.

## Documentation

* [Quick Start](https://designfirst.io/systemruntime/documentation/docs/quick-start.html)
* [Guide](https://designfirst.io/systemruntime/documentation/docs/install-system-runtime.html)
* [Examples](https://designfirst.io/systemruntime/documentation/docs/a-basic-hello-world.html)

## Community

* [Code of Conduct](CODE_OF_CONDUCT.md)
* [Contributing Guidelines](CONTRIBUTING.md)

## License

Copyright 2021 Erwan Carriou

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. 

**Do not use System Runtime if you do not believe in Equality and Diversity.**

**System Runtime is not for people of hate.**
