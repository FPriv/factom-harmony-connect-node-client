# HarmonyConnectClient.ChainsApi

All URIs are relative to *https://connect-shared-sandbox-2445582615332.production.gw.apicast.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getChainByID**](ChainsApi.md#getChainByID) | **GET** /chains/{chain_id} | Get Chain Info
[**getChains**](ChainsApi.md#getChains) | **GET** /chains | Get All Chains
[**postChain**](ChainsApi.md#postChain) | **POST** /chains | Create a Chain
[**postChainSearch**](ChainsApi.md#postChainSearch) | **POST** /chains/search | Search Chains


<a name="getChainByID"></a>
# **getChainByID**
> Chain getChainByID(chainId)

Get Chain Info

Get information about a specific chain on Connect

### Example
```javascript
var HarmonyConnectClient = require('harmony-connect-client');
var defaultClient = HarmonyConnectClient.ApiClient.instance;
// Configure API key authorization: AppId
var AppId = defaultClient.authentications['AppId'];
AppId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AppId.apiKeyPrefix = 'Token';
// Configure API key authorization: AppKey
var AppKey = defaultClient.authentications['AppKey'];
AppKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AppKey.apiKeyPrefix = 'Token';

var apiInstance = new HarmonyConnectClient.ChainsApi();
var chainId = 285904; // String | Chain identifier
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChainByID(chainId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainId** | **String**| Chain identifier | 

### Return type

[**Chain**](Chain.md)

### Authorization

[AppId](../README.md#AppId), [AppKey](../README.md#AppKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getChains"></a>
# **getChains**
> ChainList getChains(opts)

Get All Chains

Returns all of the chains on factomd.

### Example
```javascript
var HarmonyConnectClient = require('harmony-connect-client');
var defaultClient = HarmonyConnectClient.ApiClient.instance;
// Configure API key authorization: AppId
var AppId = defaultClient.authentications['AppId'];
AppId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AppId.apiKeyPrefix = 'Token';
// Configure API key authorization: AppKey
var AppKey = defaultClient.authentications['AppKey'];
AppKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AppKey.apiKeyPrefix = 'Token';

var apiInstance = new HarmonyConnectClient.ChainsApi();
var opts = {
  'limit': 15, // Number | The number of items you would like back in each page.
  'offset': 2, // Number | The page you would like to request. The first page offset is Zero.
  'stages': "stages_example" // String | The immutability stages you want to restrict results to. You can choose any from `replicated`, `factom`, and `anchored`. If you would like to search among multiple stages, send them in a comma separated string. For example: `'multi_az,factom'`.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChains(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The number of items you would like back in each page. | [optional] 
 **offset** | **Number**| The page you would like to request. The first page offset is Zero. | [optional] 
 **stages** | **String**| The immutability stages you want to restrict results to. You can choose any from &#x60;replicated&#x60;, &#x60;factom&#x60;, and &#x60;anchored&#x60;. If you would like to search among multiple stages, send them in a comma separated string. For example: &#x60;&#39;multi_az,factom&#39;&#x60;. | [optional] 

### Return type

[**ChainList**](ChainList.md)

### Authorization

[AppId](../README.md#AppId), [AppKey](../README.md#AppKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postChain"></a>
# **postChain**
> ChainShort postChain(chainCreate)

Create a Chain

Create a new chain. Each chain functions as a mini-blockchain such that all of the entries are linked. Every entry relies on data from previous entries in the chain. Any unauthorized alterations to any of these entries can be detected. Be aware that data entered into the &#x60;content&#x60; and &#x60;external_ids&#x60; fields must be in Base64 format. Sending this request will cause Connect to create the first entry of the chain. The data entered into the &#x60;content&#x60; and &#x60;external_id&#x60; fields will be applied to this entry.

### Example
```javascript
var HarmonyConnectClient = require('harmony-connect-client');
var defaultClient = HarmonyConnectClient.ApiClient.instance;
// Configure API key authorization: AppId
var AppId = defaultClient.authentications['AppId'];
AppId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AppId.apiKeyPrefix = 'Token';
// Configure API key authorization: AppKey
var AppKey = defaultClient.authentications['AppKey'];
AppKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AppKey.apiKeyPrefix = 'Token';

var apiInstance = new HarmonyConnectClient.ChainsApi();
var chainCreate = new HarmonyConnectClient.ChainCreate(); // ChainCreate | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postChain(chainCreate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainCreate** | [**ChainCreate**](ChainCreate.md)|  | 

### Return type

[**ChainShort**](ChainShort.md)

### Authorization

[AppId](../README.md#AppId), [AppKey](../README.md#AppKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postChainSearch"></a>
# **postChainSearch**
> ChainList postChainSearch(searchBody, opts)

Search Chains

Finds all of the chains with &#x60;external_ids&#x60; that match what you&#39;ve entered. External IDs must be sent in Base64 format.

### Example
```javascript
var HarmonyConnectClient = require('harmony-connect-client');
var defaultClient = HarmonyConnectClient.ApiClient.instance;
// Configure API key authorization: AppId
var AppId = defaultClient.authentications['AppId'];
AppId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AppId.apiKeyPrefix = 'Token';
// Configure API key authorization: AppKey
var AppKey = defaultClient.authentications['AppKey'];
AppKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AppKey.apiKeyPrefix = 'Token';

var apiInstance = new HarmonyConnectClient.ChainsApi();
var searchBody = new HarmonyConnectClient.SearchBody(); // SearchBody | 
var opts = {
  'limit': 15, // Number | The number of items you would like back in each page.
  'offset': 2 // Number | The page you would like to request. The first page offset is Zero.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postChainSearch(searchBody, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchBody** | [**SearchBody**](SearchBody.md)|  | 
 **limit** | **Number**| The number of items you would like back in each page. | [optional] 
 **offset** | **Number**| The page you would like to request. The first page offset is Zero. | [optional] 

### Return type

[**ChainList**](ChainList.md)

### Authorization

[AppId](../README.md#AppId), [AppKey](../README.md#AppKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

