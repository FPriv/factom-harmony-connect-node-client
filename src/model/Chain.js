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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ChainData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ChainData'));
  } else {
    // Browser globals (root is window)
    if (!root.HarmonyConnectClient) {
      root.HarmonyConnectClient = {};
    }
    root.HarmonyConnectClient.Chain = factory(root.HarmonyConnectClient.ApiClient, root.HarmonyConnectClient.ChainData);
  }
}(this, function(ApiClient, ChainData) {
  'use strict';



  /**
   * The Chain model module.
   * @module model/Chain
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Chain</code>.
   * Represents a list of Factom entries that have been or will be saved to the blockchain.
   * @alias module:model/Chain
   * @class
   * @param data {module:model/ChainData} 
   */
  var exports = function(data) {
    var _this = this;

    _this['data'] = data;
  };

  /**
   * Constructs a <code>Chain</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Chain} obj Optional instance to populate.
   * @return {module:model/Chain} The populated <code>Chain</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data')) {
        obj['data'] = ChainData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ChainData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


