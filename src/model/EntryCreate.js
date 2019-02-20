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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HarmonyConnectClient) {
      root.HarmonyConnectClient = {};
    }
    root.HarmonyConnectClient.EntryCreate = factory(root.HarmonyConnectClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The EntryCreate model module.
   * @module model/EntryCreate
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>EntryCreate</code>.
   * This information will be used to create a new entry.
   * @alias module:model/EntryCreate
   * @class
   * @param externalIds {Array.<String>} Tags that can be used to identify your entry. You can search for records that contain a particular `external_id` using Connect. External IDs should be sent in Base64.
   * @param content {String} This is the data that will be stored directly on the blockchain. Please be sure that no private information is entered here. Content should be sent in Base64 format.
   */
  var exports = function(externalIds, content) {
    var _this = this;

    _this['external_ids'] = externalIds;
    _this['content'] = content;
  };

  /**
   * Constructs a <code>EntryCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EntryCreate} obj Optional instance to populate.
   * @return {module:model/EntryCreate} The populated <code>EntryCreate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('external_ids')) {
        obj['external_ids'] = ApiClient.convertToType(data['external_ids'], ['String']);
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('callback_url')) {
        obj['callback_url'] = ApiClient.convertToType(data['callback_url'], 'String');
      }
      if (data.hasOwnProperty('callback_stages')) {
        obj['callback_stages'] = ApiClient.convertToType(data['callback_stages'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Tags that can be used to identify your entry. You can search for records that contain a particular `external_id` using Connect. External IDs should be sent in Base64.
   * @member {Array.<String>} external_ids
   */
  exports.prototype['external_ids'] = undefined;
  /**
   * This is the data that will be stored directly on the blockchain. Please be sure that no private information is entered here. Content should be sent in Base64 format.
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * The address you'd like the callback to be sent to. If this is not specified, callbacks will not activate.
   * @member {String} callback_url
   */
  exports.prototype['callback_url'] = undefined;
  /**
   * The immutability stages you'd like to be notified about. This list can include any or all of the three stages: `replicated`, `factom`, and `anchored`. If callbacks are activated and this field is not sent, it will default to `factom` and `anchored`
   * @member {Array.<String>} callback_stages
   */
  exports.prototype['callback_stages'] = undefined;



  return exports;
}));


