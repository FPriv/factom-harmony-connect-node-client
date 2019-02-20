/**
 * Harmony Connect
 * An easy to use API that helps you access the Factom blockchain.
 *
 * OpenAPI spec version: 1.0.17
 * Contact: harmony-support@factom.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HarmonyConnectClient);
  }
}(this, function(expect, HarmonyConnectClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HarmonyConnectClient.Entry();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Entry', function() {
    it('should create an instance of Entry', function() {
      // uncomment below and update the code to test Entry
      //var instance = new HarmonyConnectClient.Entry();
      //expect(instance).to.be.a(HarmonyConnectClient.Entry);
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new HarmonyConnectClient.Entry();
      //expect(instance).to.be();
    });

  });

}));
