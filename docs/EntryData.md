# HarmonyConnectClient.EntryData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entryHash** | **String** | The SHA256 Hash of this entry. | [optional] 
**chain** | [**EntryLinkChain**](EntryLinkChain.md) |  | [optional] 
**createdAt** | **String** | The time when this entry was created. Sent in [ISO 8601 Format](https://en.wikipedia.org/wiki/ISO_8601). For example: &#x60;YYYY-MM-DDThh:mm:ssZ&#x60; | [optional] 
**externalIds** | **[String]** | Tags that can be used to identify your entry. You can search for records that contain a particular external_id using Connect. External IDs are returned in Base64. | [optional] 
**content** | **String** | This is the data that is stored by the entry. Content will be sent in Base64 format. | [optional] 
**stage** | **String** | The level of immutability that this entry has reached. | [optional] 
**eblock** | [**EntryDataEblock**](EntryDataEblock.md) |  | [optional] 


