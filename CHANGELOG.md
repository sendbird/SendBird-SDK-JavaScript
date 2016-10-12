Changelog
=========

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
