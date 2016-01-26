/*
 * SyrupJS
 * The System Runtime Platform
 * https://syrupjs.github.io
 * @ecarriou
 *  
 * Copyright (c) 2016 Erwan Carriou
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE. 
 */

/**
 * This module contains all the functions used by all the modules.
 * 
 * @module syrup
 * @submodule syrup-helper
 * @requires syrup-db
 * @requires syrup-component
 * @class syrup-helper
 * @static
 */


'use strict';

var $db = require('./db.js');
var $component = require('./component.js');


/* Private property */


var syrupRef = null;


/* Public method */


/*
 * Check if a syrup instance exists.
 * @method isSyrup
 * @return {Boolean} true if a syrup instance exist
 */
function isSyrup() {
    var result = false;

    if ($db.Syrup && $db.Syrup.find().length) {
        result = true;
    }

    return result;
}


/*
 * Get the syrup instance.
 * @method getSyrup
 * @return {Syrup} syrup instance
 */
function getSyrup() {
    var syrupId = '';

    if (!syrupRef) {
        if (isSyrup()) {
            syrupId = $db.Syrup.find()[0]._id;
            syrupRef = $component.get(syrupId);
        } else {
            syrupRef = {
                error: function error(err, data) {
                    console.error('syrup: ' + err, data);
                },
                warning: function warning(message) {
                    console.warn('syrup: ' + message);
                }
            };
        }
    }

    return syrupRef;
}


/*
 * Generate a uuid.
 * @method generateId
 * @return {String} a uuid
 */
function generateId() {
    function gen() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16);
    }
    return gen() + gen() + gen();
}


/*
 * Add Polyfill
 * @method polyfill
 */
function polyfill() {

    // fixing constructor.name property in IE
    // taken from http://stackoverflow.com/questions/25140723/constructor-name-is-undefined-in-internet-explorer
    if (Function.prototype.name === undefined && Object.defineProperty !== undefined) {
        Object.defineProperty(Function.prototype, 'name', {
            get: function () {
                var funcNameRegex = /function\s([^(]{1,})\(/;
                var results = (funcNameRegex).exec((this).toString());
                return (results && results.length > 1) ? results[1].trim() : "";
            },
            set: function (value) { }
        });
    }
}


/* exports */


/**
 * This module contains all the functions used by all the modules.
 * 
 * @module syrup
 * @submodule syrup-helper
 * @requires syrup-db
 * @requires syrup-component
 * @class syrup-helper
 * @static
 */


/**
 * Get syrup instance.
 * @method getSyrup
 * @return {Syrup} syrup instance
 */
exports.getSyrup = getSyrup;


/**
 * Check if a syrup instance exists.
 * @method isSyrup
 * @return {Boolean} true if a syrup instance exist
 */
exports.isSyrup = isSyrup;


/**
 * Generate a uuid.
 * @method generateId
 * @return {String} a uuid
 */
exports.generateId = generateId;


/**
 * Add Polyfill
 * @method polyfill
 */
exports.polyfill = polyfill;