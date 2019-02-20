# HarmonyConnectClient.EntriesApi

All URIs are relative to *https://connect-shared-sandbox-2445582615332.production.gw.apicast.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEntriesByChainID**](EntriesApi.md#getEntriesByChainID) | **GET** /chains/{chain_id}/entries | Get Chain&#39;s Entries
[**getEntryByHash**](EntriesApi.md#getEntryByHash) | **GET** /chains/{chain_id}/entries/{entry_hash} | Get Entry Info
[**getFirstEntry**](EntriesApi.md#getFirstEntry) | **GET** /chains/{chain_id}/entries/first | Get Chain&#39;s First Entry
[**getLastEntry**](EntriesApi.md#getLastEntry) | **GET** /chains/{chain_id}/entries/last | Get Chain&#39;s Last Entry
[**postEntriesSearch**](EntriesApi.md#postEntriesSearch) | **POST** /chains/{chain_id}/entries/search | Search Chain&#39;s Entries
[**postEntryToChainID**](EntriesApi.md#postEntryToChainID) | **POST** /chains/{chain_id}/entries | Create an Entry


<a name="getEntriesByChainID"></a>
# **getEntriesByChainID**
> EntryList getEntriesByChainID(chainId, opts)

Get Chain&#39;s Entries

List all entries contained on the specified chain.

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

var apiInstance = new HarmonyConnectClient.EntriesApi();
var chainId = 285904; // String | Chain identifier
var opts = {
  'limit': 15, // Number | The number of items you would like back in each page.
  'offset': 2, // Number | The offset parameter allows you to select which item you would like to start from when you get back a list from Connect. For example, if you've already seen the first 15 items and you'd like the next set, you would send an offset of 15. `offset=0` starts from the first item of the set and is the default position.
  'stages': "stages_example" // String | The immutability stages you want to restrict results to. You can choose any from `replicated`, `factom`, and `anchored`. If you would like to search among multiple stages, send them in a comma separated string. For example: `'replicated,factom'`.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEntriesByChainID(chainId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainId** | **String**| Chain identifier | 
 **limit** | **Number**| The number of items you would like back in each page. | [optional] 
 **offset** | **Number**| The offset parameter allows you to select which item you would like to start from when you get back a list from Connect. For example, if you&#39;ve already seen the first 15 items and you&#39;d like the next set, you would send an offset of 15. &#x60;offset&#x3D;0&#x60; starts from the first item of the set and is the default position. | [optional] 
 **stages** | **String**| The immutability stages you want to restrict results to. You can choose any from &#x60;replicated&#x60;, &#x60;factom&#x60;, and &#x60;anchored&#x60;. If you would like to search among multiple stages, send them in a comma separated string. For example: &#x60;&#39;replicated,factom&#39;&#x60;. | [optional] 

### Return type

[**EntryList**](EntryList.md)

### Authorization

[AppId](../README.md#AppId), [AppKey](../README.md#AppKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEntryByHash"></a>
# **getEntryByHash**
> Entry getEntryByHash(chainId, entryHash)

Get Entry Info

Returns information about a specific entry on Connect. The requested entry must be specified using the Chain ID and Entry Hash.

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

var apiInstance = new HarmonyConnectClient.EntriesApi();
var chainId = 285904; // String | Chain identifier
var entryHash = db; // String | The SHA256 hash of the entry.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEntryByHash(chainId, entryHash, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainId** | **String**| Chain identifier | 
 **entryHash** | **String**| The SHA256 hash of the entry. | 

### Return type

[**Entry**](Entry.md)

### Authorization

[AppId](../README.md#AppId), [AppKey](../README.md#AppKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFirstEntry"></a>
# **getFirstEntry**
> Entry getFirstEntry(chainId)

Get Chain&#39;s First Entry

Retrieve the first entry that has been saved to this chain.

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

var apiInstance = new HarmonyConnectClient.EntriesApi();
var chainId = 285904; // String | Chain identifier
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFirstEntry(chainId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainId** | **String**| Chain identifier | 

### Return type

[**Entry**](Entry.md)

### Authorization

[AppId](../README.md#AppId), [AppKey](../README.md#AppKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLastEntry"></a>
# **getLastEntry**
> Entry getLastEntry(chainId)

Get Chain&#39;s Last Entry

Retrieve the last entry that has been saved to this chain.

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

var apiInstance = new HarmonyConnectClient.EntriesApi();
var chainId = 285904; // String | Chain identifier
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLastEntry(chainId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainId** | **String**| Chain identifier | 

### Return type

[**Entry**](Entry.md)

### Authorization

[AppId](../README.md#AppId), [AppKey](../README.md#AppKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postEntriesSearch"></a>
# **postEntriesSearch**
> EntrySearchResponse postEntriesSearch(chainId, searchBody, opts)

Search Chain&#39;s Entries

Find all of the entries within the specified chain that have the requested &#x60;external_ids&#x60;.

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

var apiInstance = new HarmonyConnectClient.EntriesApi();
var chainId = 285904; // String | Chain identifier
var searchBody = new HarmonyConnectClient.SearchBody(); // SearchBody | 
var opts = {
  'limit': 15, // Number | The number of items you would like back in each page.
  'offset': 2 // Number | The offset parameter allows you to select which item you would like to start from when you get back a list from Connect. For example, if you've already seen the first 15 items and you'd like the next set, you would send an offset of 15. `offset=0` starts from the first item of the set and is the default position.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postEntriesSearch(chainId, searchBody, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainId** | **String**| Chain identifier | 
 **searchBody** | [**SearchBody**](SearchBody.md)|  | 
 **limit** | **Number**| The number of items you would like back in each page. | [optional] 
 **offset** | **Number**| The offset parameter allows you to select which item you would like to start from when you get back a list from Connect. For example, if you&#39;ve already seen the first 15 items and you&#39;d like the next set, you would send an offset of 15. &#x60;offset&#x3D;0&#x60; starts from the first item of the set and is the default position. | [optional] 

### Return type

[**EntrySearchResponse**](EntrySearchResponse.md)

### Authorization

[AppId](../README.md#AppId), [AppKey](../README.md#AppKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postEntryToChainID"></a>
# **postEntryToChainID**
> EntryShort postEntryToChainID(chainId, entryCreate)

Create an Entry

Create a new entry for the selected chain. Content and external id must be uploaded in Base64 format.

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

var apiInstance = new HarmonyConnectClient.EntriesApi();
var chainId = 285904; // String | Chain identifier
var entryCreate = new HarmonyConnectClient.EntryCreate(); // EntryCreate | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postEntryToChainID(chainId, entryCreate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainId** | **String**| Chain identifier | 
 **entryCreate** | [**EntryCreate**](EntryCreate.md)|  | 

### Return type

[**EntryShort**](EntryShort.md)

### Authorization

[AppId](../README.md#AppId), [AppKey](../README.md#AppKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

