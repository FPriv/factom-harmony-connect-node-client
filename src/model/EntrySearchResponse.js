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
    define(['ApiClient', 'model/EntrySearchResponseData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EntrySearchResponseData'));
  } else {
    // Browser globals (root is window)
    if (!root.HarmonyConnectClient) {
      root.HarmonyConnectClient = {};
    }
    root.HarmonyConnectClient.EntrySearchResponse = factory(root.HarmonyConnectClient.ApiClient, root.HarmonyConnectClient.EntrySearchResponseData);
  }
}(this, function(ApiClient, EntrySearchResponseData) {
  'use strict';



  /**
   * The EntrySearchResponse model module.
   * @module model/EntrySearchResponse
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>EntrySearchResponse</code>.
   * @alias module:model/EntrySearchResponse
   * @class
   * @param data {Array.<module:model/EntrySearchResponseData>} An array of entries that match your search criterion.
   * @param offset {Number} The index of the first item returned from the total set (Starting from 0).
   * @param limit {Number} The maximum number of entries per page.
   * @param count {Number} The total number of entries seen.
   */
  var exports = function(data, offset, limit, count) {
    var _this = this;

    _this['data'] = data;
    _this['offset'] = offset;
    _this['limit'] = limit;
    _this['count'] = count;
  };

  /**
   * Constructs a <code>EntrySearchResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EntrySearchResponse} obj Optional instance to populate.
   * @return {module:model/EntrySearchResponse} The populated <code>EntrySearchResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [EntrySearchResponseData]);
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * An array of entries that match your search criterion.
   * @member {Array.<module:model/EntrySearchResponseData>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * The index of the first item returned from the total set (Starting from 0).
   * @member {Number} offset
   */
  exports.prototype['offset'] = undefined;
  /**
   * The maximum number of entries per page.
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * The total number of entries seen.
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;



  return exports;
}));


