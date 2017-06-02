Changelog
=========
## v3.0.31
 * Fixed a compatibility issue with React Native.

## v3.0.30
 * Added `getPushTemplate()` and `setPushTemplate()`.  
 * Added checking SDK's version using `SendBird.version`.  
 * Now support connecting to custom host.  
 * Added return value when call `cancelUploadingFileMessage()`.  
 
## v3.0.29
 * Fix the bug that drops message events when sb.setErrorFirstCallback was set to True.

## v3.0.28
 * `SendBirdException` now inherits from the JavaScript Error object.  
 * You can now decide the error parameter order in callback functions using `sb.setErrorFirstCallback(True|False)`.  

## v3.0.27
 * Added `updateUserMessage()` and `updateFileMessage()`.
 * Added `onMessageUpdated()` in ChannelHandler.
 * You now can confirm file upload progress by passing a progressHandler as a parameter when calling `sendFileMessage()`.
 * Added `cancelUploadingFileMessage()`.
 
## v3.0.26
 * Added getTotalUnreadChannelCount
 * Now markAsRead doesn't have any delays

## v3.0.25
 * Now GroupChannelList returns correct readstatus as well.
 * Member nickname/profile get updated when new messages arrived.
 * Return more consistent errors when connection() is not made before calling methods.
 * Now we don't count senders in readreceipt.

## v3.0.24
 * Now it supports IE8/9 with some Flash libraries
 * Fixed a bug regarding disableStateChange/enableStateChange

## v3.0.23
### update
 * Fixed a file uploading bug in React Native.
 * Fixed minor bugs related to null check.

## v3.0.22
### update
 * Fixed a bug in calling markAsRead().
 * Added supports for video/image thumbnail generations and file encryption/access control.

## v3.0.19
### update
 * connect()/disconnect() doesn't clear out connection/channel handlers anymore. 
   Instead you should use removeAllConnectionHandlers() and removeAllChannelHandlers().
 * Fixed a bug in removing ios push tokens.
 * Now reconnect() method has been added which you can use when you want to manually trigger reconnect logic when network condition gets better.

## v3.0.18
### update
 * Added "getMessages" series of methods with timestamp and messageId filter.
 * Fixed a callback handling bug.

## v3.0.17
### update
 * Finally push notifications feature is officially supported in V3 JS SDK.
 * Added "setBackgroundState()" and "setForegroundState()".
 * Added "messageType" filter to PreviousMessageQueryList.

## v3.0.16
### update
 * InItial connection speed has been improved a lot!.
 * Auto-Reconnection is now more robust.
 * Auto-Translation support has been added.

## v3.0.15
### update
 * Fixed a bug that created non-integer file size field.

## v3.0.14
### update
 * Fixed a reconnection bug happening after calling disconnect() and connect() in serial.
 * Added "custom_type" field to message/file object.
 * Added "user_id"/"nickanme" filters to GroupChannelList.

## v3.0.12
### update
 * Fixed wrong message_id, data field of FileMessage object.

## v3.0.11
### update
 * Fixed a Keep-Alive bug now and it should be much faster in React Native/NodeJS.
 * Now calling "connect()" multiple times in a row triggers "disconnect()" internally to avoid having multiple websocket connections
 * New License File

## v3.0.10
### update
 * Fixed a bug that increases unread message count when a user gets its own messages
 * Cleared out old ws object's event handlers after disconnect to prevent a user from getting messages from another user who logged in on the same device.

## v3.0.9
### update
 * minor bugfix for IE, Safari, Opera.

## v3.0.8
### update
 * `sendFileMessage` bugfix.

## v3.0.7
### update
 * Added features like filtered user list, open channel keyword search, push preference setting, etc.
 * `messageListQuery` bugfix.

## v3.0.6
### update
 * add dependencies

## v3.0.5
### update
 * NodeJS Keepalive bugfix.
 * React Native android bugfix.

## v3.0.4
### update
 * `createPreviousMessageListQuery` bugfix.
 * npm bundle bugfix.

## v3.0.3
### update
 * npm publish.


## v3.0.2
### update
 * Reconnect bugfix.
 * `getMetaCounters`, `getMetaData` bugfix.


## v3.0.1
### update
 * `blockUserWithUserId` bugfix.


## v3.0.0
### update
 * v3.0.0 release.
