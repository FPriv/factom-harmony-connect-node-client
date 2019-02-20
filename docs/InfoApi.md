# HarmonyConnectClient.InfoApi

All URIs are relative to *https://connect-shared-sandbox-2445582615332.production.gw.apicast.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApiInfo**](InfoApi.md#getApiInfo) | **GET** / | API Info


<a name="getApiInfo"></a>
# **getApiInfo**
> AllInfo getApiInfo()

API Info

Request general information about the Connect API such as the version and available endpoints.

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

var apiInstance = new HarmonyConnectClient.InfoApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getApiInfo(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AllInfo**](AllInfo.md)

### Authorization

[AppId](../README.md#AppId), [AppKey](../README.md#AppKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

