# monoco

[![npm version](https://badge.fury.io/js/monoco.svg)](http://badge.fury.io/js/monoco)
[![Build Status](https://travis-ci.org/monocojs/monoco.svg?branch=master)](https://travis-ci.org/monocojs/monoco)
[![Coverage Status](https://img.shields.io/coveralls/monocojs/monoco.svg)](https://coveralls.io/r/monocojs/monoco)
[![devDependency Status](https://david-dm.org/monocojs/monoco/dev-status.svg)](https://david-dm.org/monocojs/monoco#info=devDependencies)

#### What is monoco ?

It is a **5-in-1 JavaScript library**:

* it is **a metamodel** that helps you to design components,
* it is **a component factory** that creates components based on your design,
* it is **a worflow engine** that checks at runtime if the signatures of invoked methods are compliant with your model,
* it is an **ODM (Object Document Mapper)** to manage your components as NoSQL documents and
* it is **a micro NoSQL Database** that stores your components and can export/import them into another monoco NoSQL Database.

Finally monoco helps you to design, create and compose components.

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

## Documentation

* [Quick Start](https://monoco.readme.io/docs/quick-start)
* [Guide](https://monoco.readme.io/docs/installation)
* [Examples](https://monoco.readme.io/docs/a-basic-hello-world)
* [Build monoco](https://monoco.readme.io/docs/extend-monoco)

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