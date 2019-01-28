# Factom Harmony Connect - Node.js Client Library

This is an automatically generated Node.js client library for [Factom Harmony Connect](https://www.factom.com/products/harmony-connect/).

Connect is the fastest way to add blockchain capabilities to your app without cryptocurrencies, wallets, or network nodes. [Create an account](https://account.factom.com/) to get your free API key for the sandbox environment.

- API version: 1.0.17
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, you can view the Connect documentation at [https://docs.harmony.factom.com](https://docs.harmony.factom.com)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

You can install this package via:

```shell
npm install harmony-connect-client --save
```

#### Local development

To use the library locally without using a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your harmony-connect-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('harmony-connect-client')` in javascript files from the directory you ran the last 
command above from.

#### git

To install the package via the git repository:

```shell
    npm install FactomProject/factom-harmony-connect-node-client --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var HarmonyConnectClient = require('harmony-connect-client');

var defaultClient = HarmonyConnectClient.ApiClient.instance;

// Configure API key authorization: AppId
var AppId = defaultClient.authentications['AppId'];
AppId.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AppId.apiKeyPrefix['app_id'] = "Token"

// Configure API key authorization: AppKey
var AppKey = defaultClient.authentications['AppKey'];
AppKey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AppKey.apiKeyPrefix['app_key'] = "Token"

var api = new HarmonyConnectClient.ChainsApi()
var chainId = 285904; // {String} Chain identifier

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getChainByID(chainId, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://connect-shared-sandbox-2445582615332.production.gw.apicast.io/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*HarmonyConnectClient.ChainsApi* | [**getChainByID**](docs/ChainsApi.md#getChainByID) | **GET** /chains/{chain_id} | Get Chain Info
*HarmonyConnectClient.ChainsApi* | [**getChains**](docs/ChainsApi.md#getChains) | **GET** /chains | Get All Chains
*HarmonyConnectClient.ChainsApi* | [**postChain**](docs/ChainsApi.md#postChain) | **POST** /chains | Create a Chain
*HarmonyConnectClient.ChainsApi* | [**postChainSearch**](docs/ChainsApi.md#postChainSearch) | **POST** /chains/search | Search Chains
*HarmonyConnectClient.EntriesApi* | [**getEntriesByChainID**](docs/EntriesApi.md#getEntriesByChainID) | **GET** /chains/{chain_id}/entries | Get Chain&#39;s Entries
*HarmonyConnectClient.EntriesApi* | [**getEntryByHash**](docs/EntriesApi.md#getEntryByHash) | **GET** /chains/{chain_id}/entries/{entry_hash} | Get Entry Info
*HarmonyConnectClient.EntriesApi* | [**getFirstEntry**](docs/EntriesApi.md#getFirstEntry) | **GET** /chains/{chain_id}/entries/first | Get Chain&#39;s First Entry
*HarmonyConnectClient.EntriesApi* | [**getLastEntry**](docs/EntriesApi.md#getLastEntry) | **GET** /chains/{chain_id}/entries/last | Get Chain&#39;s Last Entry
*HarmonyConnectClient.EntriesApi* | [**postEntriesSearch**](docs/EntriesApi.md#postEntriesSearch) | **POST** /chains/{chain_id}/entries/search | Search Chain&#39;s Entries
*HarmonyConnectClient.EntriesApi* | [**postEntryToChainID**](docs/EntriesApi.md#postEntryToChainID) | **POST** /chains/{chain_id}/entries | Create an Entry
*HarmonyConnectClient.InfoApi* | [**getAllInfo**](docs/InfoApi.md#getAllInfo) | **GET** / | API Info


## Documentation for Models

 - [HarmonyConnectClient.AllInfo](docs/AllInfo.md)
 - [HarmonyConnectClient.AllInfoLinks](docs/AllInfoLinks.md)
 - [HarmonyConnectClient.Chain](docs/Chain.md)
 - [HarmonyConnectClient.ChainCreate](docs/ChainCreate.md)
 - [HarmonyConnectClient.ChainData](docs/ChainData.md)
 - [HarmonyConnectClient.ChainDataEntries](docs/ChainDataEntries.md)
 - [HarmonyConnectClient.ChainLink](docs/ChainLink.md)
 - [HarmonyConnectClient.ChainList](docs/ChainList.md)
 - [HarmonyConnectClient.ChainListData](docs/ChainListData.md)
 - [HarmonyConnectClient.ChainShort](docs/ChainShort.md)
 - [HarmonyConnectClient.Entry](docs/Entry.md)
 - [HarmonyConnectClient.EntryCreate](docs/EntryCreate.md)
 - [HarmonyConnectClient.EntryData](docs/EntryData.md)
 - [HarmonyConnectClient.EntryDataEblock](docs/EntryDataEblock.md)
 - [HarmonyConnectClient.EntryLink](docs/EntryLink.md)
 - [HarmonyConnectClient.EntryLinkChain](docs/EntryLinkChain.md)
 - [HarmonyConnectClient.EntryList](docs/EntryList.md)
 - [HarmonyConnectClient.EntryListData](docs/EntryListData.md)
 - [HarmonyConnectClient.EntrySearchResponse](docs/EntrySearchResponse.md)
 - [HarmonyConnectClient.EntrySearchResponseData](docs/EntrySearchResponseData.md)
 - [HarmonyConnectClient.EntryShort](docs/EntryShort.md)
 - [HarmonyConnectClient.SearchBody](docs/SearchBody.md)


## Documentation for Authorization


### AppId

- **Type**: API key
- **API key parameter name**: app_id
- **Location**: HTTP header

### AppKey

- **Type**: API key
- **API key parameter name**: app_key
- **Location**: HTTP header


## Support

For more information, you can view the Connect documentation at [https://docs.harmony.factom.com](https://docs.harmony.factom.com)


For additional support, contact us at harmony-support@factom.com
