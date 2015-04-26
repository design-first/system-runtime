/* 
 * monoco
 * A Model and a NoSQL Database for Components
 * http://monoco.io/
 * @ecarriou
 *
 * Copyright (C) 2015 - Erwan Carriou
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * This module is the main module of Monoco. <br>
 * It inits Monoco Metamodel and loads the Monoco core system.
 * 
 * @module monoco
 * @requires monoco-component
 * @requires monoco-metamodel
 * @requires monoco-system
 * @main monoco
 * @class monoco
 * @static
 */

'use strict';

var $db = require('./db.js');
var $component = require('./component.js');
var $metamodel = require('./metamodel.js');
var $system = require('../build/system/system.js');


/* Private Property */

var sytemId = '',
system = '';


/* Init Metamodel */


$metamodel.init();


/* Init Monoco from a Monoco System */


sytemId = $db.system($system.system);
system = $component.get(sytemId);
system.main();


/* exports */


/**
 * This module is the main module of Monoco. <br>
 * It inits Monoco Metamodel and loads the Monoco core system.
 * 
 * @module monoco
 * @requires monoco-component
 * @requires monoco-metamodel
 * @requires monoco-system
 * @main monoco
 * @class monoco
 * @static
 */


/**
 * Monoco instance.
 * @property monoco
 * @type Monoco
 */
module.exports = $component.get('monoco');