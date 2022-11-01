/*
 * System Runtime
 *
 * https://designfirst.io/systemruntime/
 *
 * Copyright 2022 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @module runtime
 * @requires db
 * @requires component
 * @requires metamodel
 * @requires system
 * @requires helper
 * @description This module is the main module of System Runtime.
 * It inits System Runtime metamodel and loads System Runtime core system.
 */

import $db from './db.js'
import $component from './component.js'
import $metamodel from './metamodel.js'
import $system from './system.js'

/* Private Property */

let sytemId = ''
let system = ''
let channel = null

// init Metamodel
$metamodel.init()

// init runtime from a system
sytemId = $db.importSystem($system.system)

system = $component.get(sytemId)
channel = $component.get('channel')

system.state('installed')
channel.$systemInstalled(sytemId)
system.state('resolved')
channel.$systemResolved(sytemId)
system.state('starting')
channel.$systemStarted(sytemId)

system.start()

system.state('active')

/* Public property */

/**
 * @property runtime
 * @type _Runtime
 * @description _Runtime instance
 */
const runtime = $component.get('runtime')

export default runtime
