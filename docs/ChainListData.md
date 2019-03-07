# HarmonyConnectClient.ChainListData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chainId** | **String** | The ID for this chain on the Factom blockchain. | 
**externalIds** | **[String]** | The external IDs attached to this chain on the Factom blockchain. | 
**href** | **String** | An API link to retrieve all information about this chain. | 
**stage** | **String** | The level of immutability that this chain has reached. | 
**createdAt** | **String** | The time at which this chain was created. Sent in [ISO 8601 Format](https://en.wikipedia.org/wiki/ISO_8601). For example: &#x60;YYYY-MM-DDThh:mm:ss.ssssssZ&#x60; This will be null if the chain is not at least at the &#x60;factom&#x60; immutability stage. | [optional] 


