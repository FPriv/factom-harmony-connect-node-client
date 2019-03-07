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
    define(['ApiClient', 'model/ChainDataDblock', 'model/ChainDataEblock', 'model/ChainDataEntries'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ChainDataDblock'), require('./ChainDataEblock'), require('./ChainDataEntries'));
  } else {
    // Browser globals (root is window)
    if (!root.HarmonyConnectClient) {
      root.HarmonyConnectClient = {};
    }
    root.HarmonyConnectClient.ChainData = factory(root.HarmonyConnectClient.ApiClient, root.HarmonyConnectClient.ChainDataDblock, root.HarmonyConnectClient.ChainDataEblock, root.HarmonyConnectClient.ChainDataEntries);
  }
}(this, function(ApiClient, ChainDataDblock, ChainDataEblock, ChainDataEntries) {
  'use strict';



  /**
   * The ChainData model module.
   * @module model/ChainData
   * @version 1.0.7
   */

  /**
   * Constructs a new <code>ChainData</code>.
   * @alias module:model/ChainData
   * @class
   * @param chainId {String} This is the unique identifier created for each chain.
   * @param content {String} This is the data that was stored in the first entry of this chain.
   * @param externalIds {Array.<String>} Tags that have been used to identify this entry.
   * @param stage {String} The immutability stage that this chain has reached.
   * @param entries {module:model/ChainDataEntries} 
   */
  var exports = function(chainId, content, externalIds, stage, entries) {
    var _this = this;

    _this['chain_id'] = chainId;
    _this['content'] = content;
    _this['external_ids'] = externalIds;
    _this['stage'] = stage;
    _this['entries'] = entries;
  };

  /**
   * Constructs a <code>ChainData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChainData} obj Optional instance to populate.
   * @return {module:model/ChainData} The populated <code>ChainData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('chain_id')) {
        obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('external_ids')) {
        obj['external_ids'] = ApiClient.convertToType(data['external_ids'], ['String']);
      }
      if (data.hasOwnProperty('stage')) {
        obj['stage'] = ApiClient.convertToType(data['stage'], 'String');
      }
      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ChainDataEntries.constructFromObject(data['entries']);
      }
      if (data.hasOwnProperty('eblock')) {
        obj['eblock'] = ChainDataEblock.constructFromObject(data['eblock']);
      }
      if (data.hasOwnProperty('dblock')) {
        obj['dblock'] = ChainDataDblock.constructFromObject(data['dblock']);
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
      }
    }
    return obj;
  }

  /**
   * This is the unique identifier created for each chain.
   * @member {String} chain_id
   */
  exports.prototype['chain_id'] = undefined;
  /**
   * This is the data that was stored in the first entry of this chain.
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * Tags that have been used to identify this entry.
   * @member {Array.<String>} external_ids
   */
  exports.prototype['external_ids'] = undefined;
  /**
   * The immutability stage that this chain has reached.
   * @member {String} stage
   */
  exports.prototype['stage'] = undefined;
  /**
   * @member {module:model/ChainDataEntries} entries
   */
  exports.prototype['entries'] = undefined;
  /**
   * @member {module:model/ChainDataEblock} eblock
   */
  exports.prototype['eblock'] = undefined;
  /**
   * @member {module:model/ChainDataDblock} dblock
   */
  exports.prototype['dblock'] = undefined;
  /**
   * The time at which this chain was created. Sent in [ISO 8601 Format](https://en.wikipedia.org/wiki/ISO_8601). For example: `YYYY-MM-DDThh:mm:ss.ssssssZ` This will be null if the chain is not at least at the `factom` immutability stage.
   * @member {String} created_at
   */
  exports.prototype['created_at'] = undefined;



  return exports;
}));


