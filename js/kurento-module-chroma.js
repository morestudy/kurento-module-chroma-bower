!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self),o.kurentoModuleChroma=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2014 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var checkType      = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;

var Transaction = kurentoClient.TransactionsManager.Transaction;

var Filter = kurentoClient.register.abstracts.Filter;

/**
 * Create a {@link module:chroma.ChromaFilter ChromaFilter}
 *
 * @classdesc
 *  ChromaFilter interface. This type of {@link module:core/abstracts.Filter Filter} makes transparent a colour
 *  range in the top layer, revealing another image behind
 *
 * @extends module:core/abstracts.Filter
 *
 * @constructor module:chroma.ChromaFilter
 */
function ChromaFilter(){
  ChromaFilter.super_.call(this);
};
inherits(ChromaFilter, Filter);


/**
 * Sets the image to show on the detected chroma surface.
 *
 * @alias module:chroma.ChromaFilter.setBackground
 *
 * @param {external:String} uri
 *  URI where the image is located
 *
 * @param {module:chroma.ChromaFilter~setBackgroundCallback} [callback]
 *
 * @return {external:Promise}
 */
ChromaFilter.prototype.setBackground = function(uri, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('String', 'uri', uri, {required: true});

  var params = {
    uri: uri,
  };

  return this._invoke(transaction, 'setBackground', params, callback);
};
/**
 * @callback module:chroma.ChromaFilter~setBackgroundCallback
 * @param {external:Error} error
 */

/**
 * Clears the image used to be shown behind the chroma surface.
 *
 * @alias module:chroma.ChromaFilter.unsetBackground
 *
 * @param {module:chroma.ChromaFilter~unsetBackgroundCallback} [callback]
 *
 * @return {external:Promise}
 */
ChromaFilter.prototype.unsetBackground = function(callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  if(!arguments.length) callback = undefined;

  return this._invoke(transaction, 'unsetBackground', callback);
};
/**
 * @callback module:chroma.ChromaFilter~unsetBackgroundCallback
 * @param {external:Error} error
 */

/**
 * @alias module:chroma.ChromaFilter.constructorParams
 *
 * @property {external:String} [backgroundImage]
 *  url of image to be used to replace the detected background
 *
 * @property {module:core.MediaPipeline} mediaPipeline
 *  the {@link module:core.MediaPipeline MediaPipeline} to which the filter belongs
 *
 * @property {module:chroma/complexTypes.WindowParam} window
 *  Window of replacement for the {@link module:chroma.ChromaFilter ChromaFilter}
 */
ChromaFilter.constructorParams = {
  backgroundImage: {
    type: 'String',
  },

  mediaPipeline: {
    type: 'MediaPipeline',
    required: true
  },

  window: {
    type: 'WindowParam',
    required: true
  },
};

/**
 * @alias module:chroma.ChromaFilter.events
 *
 * @extend module:core/abstracts.Filter.events
 */
ChromaFilter.events = Filter.events;

module.exports = ChromaFilter;

ChromaFilter.check = function(key, value)
{
  if(!(value instanceof ChromaFilter))
    throw ChecktypeError(key, ChromaFilter, value);
};

},{"inherits":5,"kurento-client":"kurento-client"}],2:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2014 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

var checkType = require('kurento-client').checkType;

/**
 * Checker for {@link chroma/complexTypes.WindowParam}
 *
 * @memberof module:chroma/complexTypes
 *
 * @param {external:String} key
 * @param {module:chroma/complexTypes.WindowParam} value
 */
function checkWindowParam(key, value)
{
  checkType('int', key+'.topRightCornerX', value.topRightCornerX, true);
  checkType('int', key+'.topRightCornerY', value.topRightCornerY, true);
  checkType('int', key+'.width', value.width, true);
  checkType('int', key+'.height', value.height, true);
};


/**
 * Parameter representing a window in a video stream.
 * It is used in command and constructor for media elements.
 * 
 * All units are in pixels, X runs from left to right, Y from top to bottom.
 *
 * @memberof module:chroma/complexTypes
 *
 * @typedef chroma/complexTypes.WindowParam
 *
 * @type {Object}
 * @property {external:Integer} topRightCornerX
 *  X coordinate of the left upper point of the window
 * @property {external:Integer} topRightCornerY
 *  Y coordinate of the left upper point of the window
 * @property {external:Integer} width
 *  width in pixels of the window
 * @property {external:Integer} height
 *  height in pixels of the window
 */


module.exports = checkWindowParam;

},{"kurento-client":"kurento-client"}],3:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2014 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

/**
 * Media API for the Kurento Web SDK
 *
 * @module chroma/complexTypes
 *
 * @copyright 2013-2014 Kurento (http://kurento.org/)
 * @license LGPL
 */

var WindowParam = require('./WindowParam');


exports.WindowParam = WindowParam;

},{"./WindowParam":2}],4:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2014 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

/**
 * Media API for the Kurento Web SDK
 *
 * @module chroma
 *
 * @copyright 2013-2014 Kurento (http://kurento.org/)
 * @license LGPL
 */

var ChromaFilter = require('./ChromaFilter');


exports.ChromaFilter = ChromaFilter;

exports.complexTypes = require('./complexTypes');

},{"./ChromaFilter":1,"./complexTypes":3}],5:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}]},{},[4])(4)
});