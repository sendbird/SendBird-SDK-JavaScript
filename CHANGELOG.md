# Changelog
## v3.1.33 (Aug 24, 2023)
> **Thank you everyone for using our SDK v3. This is our final release as we transition to our latest SDK v4 (first released in Apr 2022). Please reach out to our support if you have any questions.**
### Improvements
- Fixed a bug where called `ChangeLogAPI` infinitely
## v3.1.32 (JAN 31, 2023)
### Improvements
- Fixed a bug where `sb.connect()` fails in React Native due to unexpected `localStorage` access

## v3.1.31 (JAN 25, 2023)
### Improvements
- Fixed a bug where `pendingMessage.data` is set to 'null' string when `sendUserMessage()` is called with a message text as an argument
- Fixed a bug where `MessageCollection` calls `onMessagesUpdated()` with old messages on connect and reconnect when `localCacheEnabled` is set to false

## v3.1.30 (JAN 10, 2023)
### Improvements
- Fixed a bug where MessageCollection is logging quota exceeded errors when local storage is full
- Improved stability

## v3.1.29 (NOV 04, 2022)
### Improvements
- Changed ackStateMap cleanup time when disconnect is called
- Fixed Message Filter in LocalCache not working with customTypes

## v3.1.28 (OCT 27, 2022)
- Fixed a bug where `channel.sendFileMessage()` fails when it is called in a web worker, `Worker`

## v3.1.27 (SEP 23, 2022)
- Fixed onMessageUpdate being called for the same message in View after checking HugeGap when connecting or reconnecting
- Fixed a bug in group channel changelogs

## v3.1.26 (SEP 7, 2022)
- Fixed wrong includeMetaArray property happening during changelog sync

## v3.1.25 (AUG 31, 2022)
- Implemented channel membership history where clients can retrieve whether users have joined or left the channel
- Improved stability

## v3.1.24 (AUG 119, 2022)
- Fixed Promise polyfill for browsers that do not support 'Promise.finally()'
- Improved stability

## v3.1.23 (AUG 03, 2022)
- Fixed a bug where `message.mentionedUsers` is not updated when `updateUserMessage()` is called with `messageParams.mentionedUserIds` set to an empty array
- Improved stability

## v3.1.22 (JUL 25, 2022)
- Added `sb.setOnlineListener()` and `sb.setOfflineListener()` interfaces for non-browser environments
- Improved stability

## v3.1.21 (JUL 20, 2022)
- File upload failed messages are now resendable through `channel.resendFileMessage()`.
- Fixed a bug where `groupChannelCollection.onChannelsUpdated()` is not called when `groupChannel.lastMessage` is updated.
- When local cache is enabled, conversion of pending messages that are not registered for auto-resend to failed messages is now being processed only when `sb.connect()` is called by customer.
- `channel.resendFileMessage()` now considers `fileMessage.messageParams.file` if blob is not given as an argument.
- Improved stability.

## v3.1.20 (JUN 30, 2022)
- Fixed File upload error with PUT requests in RN.

## v3.1.19 (JUN 24, 2022)
- Fixed a bug in `BaseChannel.resendFileMessage()` such that `reqId` of resent message is the same as `reqId` of the original failed message.

## v3.1.18 (JUN 22, 2022)
- Fixed incorrect failedMessage validation in resendFileMessage()
- Fixed issue in loading messages from cache using default limit
- Fixed incorrect type definition of CustomTypesFilterProperty in PreviousMessageListQuery
- Added nickname startswith/nickname exact match filter in groupChannelListQuery
- Fixed error occurs after deleteReaction in RN
## v3.1.17 (JUN 10, 2022)
- Fixed bug that enables custom typed messages being filtered out of message collection

## v3.1.16 (MAY 31, 2022)
- Fixed bug TypingStatusUpdate event does not work in GroupChannelCollection.
- Fixed Wrong Type definition in SendBird.d.ts
- Fixed bug Android file upload is not working(RN)
## v3.1.14 (MAY 20, 2022)
- Fixed bug SessionHandlers Broken.

## v3.1.13 (MAY 11, 2022)
- Fixed incorrect type in User.lastSeenAt.
- Fixed bug when createChannelWithUserIds without callback.
- Fixed bug "operators is not defined" on `CHANNEL_OPERATOR_UPDATE` event.
- Added `HiddenChannelFilter.ALL`.
- Update `axios` library.

## v3.1.11 (APR 29, 2022)
- Fixed bug when reading unsent file message from local cache in React Native.
- Fixed bug storing cached metadata into local cache in `BaseChannel`.

## v3.1.10 (APR 04, 2022)
- Fixed issue of MessageCollection changelog partially not updating/deleting cached messages.
- Fixed type error of `isUserMessage()` being undefined.

## v3.1.9 (MAR 16, 2022)
- Deprecated `ConnectionManager` in `SendBird`.
- Fixed wrong channel list order in `GroupChannelCollection`.
- Added GroupChannelTotalUnreadChannelCountParams.
- Added `getTotalUnreadChannelCount(params)` in `SendBird`.

## v3.1.8 (FEB 11, 2022)
- Fixed duplicate file messages being sent by `sendFileMessage()` in React Native.
- Fixed new messages not being fetched on websocket connect/reconnect in `MessageCollection`.

## v3.1.7 (JAN 07, 2022)
- Applied type narrowing to `BaseMessage`, `BaseChannel` and  `messageCallback`.
- Replaced all `File` type with the new `FileType` for React Native support.
- Fixed create channel with cover image error in React Native.
- Fixed child message's `parentMessage` update on parent message update when local cache is enabled.
- Added `applyParentMessage` in `BaseMessage`.
- Improved stability.

## v3.1.6 (DEC 29, 2021)
- Bug-fix in retrying reconnect with application settings.
- Fixed type definitions to `enum`.

## v3.1.5 (DEC 24, 2021)
- Fixed pending message not being added to a message collection issue when local cache enabled in React Native.
- All properties of `MessageSearchQueryOptions` are now made optional.
- Added type definitions `PUSH_TEMPLATE_DEFAULT` and `PUSH_TEMPLATE_ALTERNATIVE` in `SendBird`.
- Added `clearCachedData()` interface in `SendBird` for local caching.

## v3.1.4 (DEC 14, 2021)
- Improved stability.

## v3.1.3 (DEC 10, 2021)
- Added `useAsyncStorageAsDatabase` in `SendBird` for React Native.
- Fixed type signatures:
  - Fixed `setOrder` in `GroupChannelCollection`.
  - Fixed `next` in `OpenChannelListQuery`.
  - Fixed `load` in `PreviousMessageListQuery`.
- Improved stability.

## v3.1.2 (DEC 1, 2021)
- Fixed TypeScript interface in `PreviousMessageListQuery`.
- Deprecated `includeReplies` and `includeParentMessageText`.
- Added `replyType` and `includeParentMessageInfo`.

## v3.1.1 (NOV 24, 2021)
- `dns` dependency removed.

## v3.1.0 (NOV 23, 2021)
- Added local caching support (see the [details](https://sendbird.com/docs/chat/v3/javascript/guides/local-caching)):
  - Added `GroupChannelCollection`.
  - Added `GroupChannelCollectionHandler`.
  - Added `GroupChannelContext`.
  - Added `MessageCollectionInitPolicy`.
  - Added `MessageCollection`.
  - Added `MessageCollectionHandler`.
  - Added `MessageContext`.
  - Added `CollectionEventSource`.
  - Added new parameter `localCacheEnabled` in `SendBird` constructor.
  - Added `GroupChannelFilter` in `SendBird`.
  - Added `MessageFilter` enum in `SendBird`.
  - Added `messageParams` in `UserMessage`.
  - Added `messageParams` in `FileMessage`.
  - Added `clearCachedMessages()` in `SendBird`.
- Added reply to channel feature:
  - Added `includeParentMessageInfo` in `MessageRetrievalParams`.
  - Added `includeParentMessageInfo` in `MessageListParams`.
  - Added `includeParentMessageInfo` in `PreviousMessageListQuery`.
  - Added `includeParentMessageInfo` in `ThreadedMessageListParams`.
  - Added `includeParentMessageInfo` in `MessageChangeLogsParams`.
  - Added `parentMessage` in `BaseMessage`.
  - Deprecated `includeParentMessageText` in `MessageRetrievalParams`.
  - Deprecated `includeParentMessageText` in `MessageListParams`.
  - Deprecated `includeParentMessageText` in `PreviousMessageListQuery`.
  - Deprecated `includeParentMessageText` in `ThreadedMessageListParams`.
  - Deprecated `includeParentMessageText` in `MessageChangeLogsParams`.
  - Added `isReplyToChannel` in `UserMessageParams`.
  - Added `isReplyToChannel` in `FileMessageParams`.
  - Added `isReplyToChannel` in `BaseMessage`.
  - Added `replyType` in `MessageListParams`.
  - Added `replyType` in `PreviousMessageListQuery`.
  - Added `replyType` in `MessageChangeLogsParams`.
  - Added `ReplyType` enum in `BaseMessage`.
  - Deprecated `includeReplies` in `MessageListParams`.
  - Deprecated `includeReplies` in `PreviousMessageListQuery`.
  - Deprecated `includeReplies` in `MessageChangeLogsParams`.
- Added `belongsTo()` in `MessageListParams`.

## v3.0.160(OCT 29, 2021)
- Improved stability.

## v3.0.159(OCT 26, 2021)
- Changed `User` to `RestrictedUser` when `MutedUserListQuery` and `BannedUserListQuery` fetch users.
- Changed `User` to `RestrictedUser` in `onUserMuted` and `onUserBanned` in `ChannelHandler`.
- Added `restrictionInfo` in `Member`.

## v3.0.158(OCT 06, 2021)
- Improved stability.

## v3.0.157(OCT 01, 2021)
- Downgraded ws version from 8.2.0 to 7.5.5 due to Webpack 5 build error.

## v3.0.156(SEP 24, 2021)
- Added `markAsRead(callback)` in `GroupChannel`.
- Deprecated `markAsRead()` in `GroupChannel`.

## v3.0.155(SEP 1, 2021)
- Added `includeReactions` in `MessageRetrievalParams`.
- Resolved security advisory on `ws` dependency with version upgrade.

## v3.0.154(AUG 6, 2021)
- Added `metadataKey`, `metadataValues` and `metadataValueStartsWith` in `GroupChannelListQuery` and `PublicGroupChannelListQuery`.
- Optimized Supergroup protocol handling to improve performance for specific use cases.
- Improved stability.

## v3.0.153(JUN 11, 2021)
- Improved stability.

## v3.0.152(JUN 10, 2021)
- Added `getMessage()` in `BaseMessage`.

## v3.0.151(MAY 28, 2021)
- Added `MessageTypeFilter` in `BaseChannel`.
- Improved stability.

## v3.0.150(MAY 26, 2021)
- Added `joinedAt` in `GroupChannel`.
- Improved stability.

## v3.0.149(APR 20, 2021)
- Added `NONE` log level in `LogLevel`.
- Improved stability.

## v3.0.148(MAR 31, 2021)

- Added `AppleCriticalAlertOptions` interface.
- Added `appleCriticalAlertOptions` in `BaseMessage`, `UserMessageParams`, `FileMessageParams`, `ScheduledUserMessage`, and `ScheduledUserMessageParams`.
- Downgraded log level from `ERROR` to `DEBUG` for all internal API calls.

## v3.0.147(MAR 24, 2021)

- Added `onChannelMemberCountChanged` and `onChannelParticipantCountChanged` in `ChannelHandler`.
- Changed `markAsDelivered` policy to remove rate limit timer.
- Improved stability.

## v3.0.145(MAR 05, 2021)

- Added `getCachedMetaData()` in BaseChannel.
- Corrected type signatures in `getMessagesByTimestamp()` and `getMessagesByMessageId()`.
- Corrected attribute name to `reverse` in `MessageListParams`.

## v3.0.144(FEB 19, 2021)

- Add & Delete reaction API bug-fix to support emoji code and URI encoding.
- React native bug fix: Group channel static `buildFromSerializedData()`.

## v3.0.143(FEB 04, 2021)

- IE11 compatibility fix for `getPreviousMessagesByID()`.
- Deprecated `markAsDelivered()` in `GroupChannel`.
- Improved stability.

## v3.0.142(JAN 11, 2021)

- Added `sendingStatus` to `AdminMessage`.
- Updated TypeScript DefinitelyTyped file for Promise feature support.
- Resolved security advisory on `axios` dependency.
- Improved stability.

## v3.0.141(DEC 21, 2020)

- Added a setter for `operators` in `OpenChannelParams`.
- Added `getLogLevel()` and `setLogLevel()` in `SendBird`.
- Improved stability.

## v3.0.140(NOV 25, 2020)

- Bug-fix in connection management.
- Minor bug fixed.

## v3.0.139(NOV 25, 2020) (DEPRECATED)

- Removed `addOperator()`, `addOperators()`, `addOperatorUserId()`, `addOperatorUserIds()` from `OpenChannelParams`.
- Improved stability.

## v3.0.138(OCT 30, 2020)

- Added `getAllowFriendDiscovery()` and `setAllowFriendDiscovery()` in `SendBird`.
  - If it's set to `false`, `uploadFriendDiscoveries()` called by others does not add the user as a friend.
- Set `size` in `FileMessage` automatically.
- Improved stability.

## v3.0.137(OCT 21, 2020)

- Bug-fix in `profileUrl`.

## v3.0.136(OCT 16, 2020) (DEPRECATED)

- Added `showSubchannelMessagesOnly` in `MessageListParams` and `PreviousMessageListQuery`.
- Bug-fix in `profileUrl` not showing in `Sender`.
- Improved stability.

## v3.0.135(OCT 8, 2020)

- Bug-fix in outdated `isMuted` in `Member`.
- Bug-fix in error handling.

## v3.0.134(SEP 17, 2020)

- Added `getTypingUsers()` in `GroupChannel`.
  - It returns the users even if the user is not in `members`.
  - Deprecated `getTypingMembers()` in `GroupChanenl`.
- Set `url` as visible in `FileMessage` object.
- Set `profileUrl` as visible in `User` object.
- Bug-fix in error handling
- Improved stability.

## v3.0.133(SEP 4, 2020)

- Added `nicknameStartsWithFilter` in `ApplicationUserListQuery`.

## v3.0.132(AUG 21, 2020)

- Added `creator` in `BaseChannel`.
- Added `isOperatorMessage` in `BaseMessage`.
- Added `copyUserMessage()` and `copyFileMessage()` in `BaseChannel`.
- Change the type of all `messageId`s to `number`.
- Bug-fix in wrong channel info in `onChannelFrozen` callback.
- Bug-fix in unread member count and unread delivery count.

## v3.0.131(AUG 7, 2020)

- Fixed duplicated `appInfo` in `SendBird.d.ts`.

## v3.0.130(AUG 7, 2020) (DEPRECATED)

- Added `order` in `GroupChannelMemberListQuery`. The value could be `member_nickname_alphabetical` (default) or `operator_then_member_alphabetical`.
- Added `isMuted` in `Member`.
- Removed value type check in `channel.createMetaData()` and `channel.updateMetaData()`.
- Bug-fix on `profileUrl` setter.

## v3.0.129(JUL 24, 2020)

- Renamed `includeReaction` to `includeReactions` in `channel.getMessageChangeLogs()` (`includeReaction` is deprecated).
- Added `ogMetaData` in `BaseMessage`.
  - `ogMetaData` holds open graph properties including `title`, `url`, `description`, and `defaultImage`.
  - `ogMetaData.defaultImage` has the image-related properties including `url`, `secureUrl`, `type`, `width`, `height`, `alt` as defined in the target website.
  - `ogMetaData` may not be set at the moment of sending. Once the message is sent, Sendbird service would fetch and analyze the open graph property and give the result as a form of message update event.

## v3.0.128(JUL 10, 2020)

- Added `addOperators()` and `removeOperators()` in `GroupChannel` and `OpenChannel`.
- Bug-fix in missing `data` field of file message.

## v3.0.127(JUN 26, 2020)

- Added a dependency for `axios` and `form-data`.
  - Please add [axios](https://github.com/axios/axios) to the `script` tag if you're using SendBird by copy-and-paste the `SendBird.min.js` file.
- Added `getUnreadMemberCount()` and `getUndeliveredMemberCount()` in `GroupChannel`.
  - Deprecated `getReadReceipt()` and `getDeliveryReceipt()` in `GroupChannel`.
- Bug-fix in updating operators in `GroupChannel`.

## v3.0.126(JUN 16, 2020)

- Bug-fixes in message threading.
- Improved stability.

## v3.0.125(JUN 1, 2020)

- Added `includeFrozen` property in `GroupChannelListQuery`, `PublicGroupChannelListQuery`, `OpenChannelListQuery` and `GroupChannelChangeLogsParams`.
- Added `GroupChannelChangeLogsParams`.
- Added `getMyGroupChannelChangeLogsByToken()` and `getMyGroupChannelChangeLogsByTimestamp()` with `GroupChannelChangeLogsParams` in `SendBird`.
- Deprecated some `getMyGroupChannelChangeLogsByToken()` and `getMyGroupChannelChangeLogsByTimestamp()` in `SendBird`.
- Bug-fix: Failure in applying reactions.
- Bug-fix: Invalid `channelUrl` on `getMessage()`.

## v3.0.124(MAY 23, 2020)

- Bug-fix: Failure in `getMessageList()`.

## v3.0.123(MAY 22, 2020)

- Added message thread feature support
  - Added `parentMessageId`, `parentMessageText`, `threadInfo` in `UserMessage` and `FileMessage`.
  - Added `onThreadInfoUpdated()` in `ChannelHandler`.
  - Added `getThreadedMessagesByTimestamp()`, `applyThreadInfoUpdateEvent()` in `UserMessage` and `FileMessage`.
  - Added thread-related parameters in `GroupChannelListQuery`.
- Added emoji feature support
  - Added `getAllEmoji()`, `getEmojiCategory()`, and `getEmoji()` in `SendBird`.
- Added parameter classes for message retrieval.
- Bug-fix: Crash on IE strict mode.

## v3.0.122(APR 29, 2020)

- Added `metaArrays` in `UserMessageParams` and `FileMessageParams`.
  - Message could be sent with predefined `metaArrays`.

## v3.0.121(APR 10, 2020)

- Improved stability.

## v3.0.120(APR 7, 2020)

- `webpack` build failure fix.
- Improved stability.

## v3.0.119(MAR 11, 2020)

- Added `sendingStatus` in `UserMessage` and `FileMessage`.
- Added `role` in `Member`.
- Added `onOperatorUpdated` in `ChannelHandler`.
- Deprecated `requestState` in `UserMessage` and `FileMessage`.
- Improved stability.

## v3.0.118(MAR 5, 2020)

- Added version control over the final state of `reactions`.
- Improved stability.

## v3.0.117(JAN 15, 2020)

- Added `createMessageSearchQuery()` in `SendBird`.
  - `MessageSearchQuery` searches messages with the keyword.
  - Options like `exactMatch`, `channelUrl`, `channelCustomType`, `messageTimestampFrom`, `messageTimestampTo`, `order` are available for fine-tuned search.
- Improved stability.

## v3.0.116(JAN 10, 2020)

- Improved stability.

## v3.0.115(DEC 24, 2019)

- Added `reactions` in `BaseMessage`.
  - Added `addReaction()`, `deleteReaction()` in `BaseChannel`.
  - Added `onReactionUpdated()` in `ChannelHandler`.
  - Added `applyReactionEvent()` in `BaseMessage`.
  - Added `includeReaction` parameter to `get**MessagesByID()`, `get**MessagesByTimestamp()` in `BaseChannel`.
  - Added `includeReaction` parameter to `getMessageChangeLogsByID()`, `getMessageChangeLogsByTimestamp()` in `BaseChannel`.
- Added `markAsDelivered()`, `getDeliveryReceipt()` in `GroupChannel`.
  - Added `onDeliveryReceiptUpdated` in `ChannelHandler`.
- Improved stability.

## v3.0.114(DEC 18, 2019)

- Bug-fix in file uploading.
- Improved stability.

## v3.0.113(DEC 4, 2019)

- Added `errorCode` and `isResendable()` in `UserMessage` and `FileMessage`.
  - `resendUserMessage()` and `resendFileMessage()` work only when `isResendable()` is `true`.
- Improved stability.

## v3.0.112(NOV 8, 2019)

- Added `updateCurrentUserInfoWithPreferredLanguages()` in `SendBird`.
  - When `preferredLanguages` is set, push notification message would get translated with target languages.
- Added `preferredLanguages` in `User`.
- Added `messageOffsetTimestamp` in `GroupChannel`.
- Added `reqId` for the `BaseMessage`s which are fetched from API call.
- Improved stability.

## v3.0.111(OCT 25, 2019)

- Compatibility fix for React Native and Internet Explorer 10.
- Improved stability.

## v3.0.110(OCT 23, 2019)

- Improved stability.

## v3.0.109(OCT 22, 2019)

- Added support for Promise pattern (BETA)
  - except `sendUserMessage()`, `sendFileMessage()`, `cancelUploadingFileMessage()`
- Added `report()`, `reportUser()` and `reportMessage()` in `BaseChannel`.
- Added `onTotalUnreadMessageCountUpdated` in `UserEventHandler`.
  - `onTotalUnreadMessageCountUpdated` is called when total unread message count is updated.
- Improved stability.

## v3.0.108(SEP 9, 2019)

- Improved stability.

## v3.0.106(AUG 23, 2019)

- Improved stability.

## v3.0.105(AUG 16, 2019)

- Added `translateUserMessage()` in `BaseChannel` to support on-demand translation.
- Added `resendFileMessage()` in `BaseChannel` to support resend file message with `Blob` object.
- Added `metaArrays` property in `BaseMessage` and deprecated `metaArray`.
  - `metaArrays` is an array which contains `MessageMetaArray` instances.
  - `MessageMetaArray` is a pair of key and a value array.
  - `metaArrays` keeps the inserted order.
- Added `isStrict()` and `setStrict()` in `GroupChannelParams` to set strict channel creation mode.
  - When the strict mode is `true`, creating channel with a invalid user will fail.
- Improved stability.

## v3.0.104(JUL 22, 2019)

- Improved stability.

## v3.0.103(JUN 14, 2019)

- Improved stability.

## v3.0.102(JUN 11, 2019)

- Fixed a bug about TypeScript.

## v3.0.101(JUN 11, 2019)

- Improved stability.
- Added `resendUserMessage()` in `BaseChannel` to retry to send a `UserMessage` which has `requestID`.
- Added `requestState` and enum `MessageRequestState` which has NONE, PENDING, FAILED, and SUCCEEDED in `SendBird`.
- Added `myLastRead` in `GroupChannel` to detect last read timestamp of current connected user.

## v3.0.100(MAY 17, 2019)

- Improved stability.
- Added `delete()` in `GroupChannel` to delete the `GroupChannel`. Only operators can do this action.

## v3.0.99(MAY 3, 2019)

- Added `isDiscoverable` property to `GroupChannel` and `GroupChannelParams`.
  - if `isDiscoverable` of a public group channel is set to false, then the channel will not appear during querying with `PublicGroupChannelListQuery`. (default: true)

## v3.0.98(APR 5, 2019)

- Improved stability.

## v3.0.97(MAR 14, 2019)

- Improved stability.

## v3.0.96(FEB 21, 2019)

- Minor bug fixed.

## v3.0.95(FEB 21, 2019)

- Minor bug fixed.

## v3.0.94(FEB 14, 2019)

- Improved stability.
- Minor bug fixed.
- Updated `SendBird.d.ts` file for TypeScript.

## v3.0.93(JAN 17, 2019)

- Add push trigger option to enable/disable remote push notification.
  - Added `setPushTriggerOption(option, callback)` to `SendBird`. It determines whether the current user receives remote push notification in all group channels.
  - Added `getPushTriggerOption(callback)` to `SendBird`. It returns the current push trigger option setting for all group channels.
  - Added `setMyPushTriggerOption(option, callback)` to `GroupChannel`. It determines whether the current user receives remote push notification in the group channel.
  - Added `getMyPushTriggerOption(callback)` to `GroupChannel`. It returns the current push trigger option setting for the group channel.
- Snooze or stop snooze remote push notification in specific duration.
  - Added `setSnoozePeriod(snoozeOn, startTs, endTs, callback)` into `SendBird`. It enables or disables snooze in the period.
  - Added `getSnoozePeriod(callback)` into `SendBird`. It returns the current snooze setting for the current user.

## v3.0.92(DEC 13, 2018)

- Minor bug fixed.

## v3.0.91(NOV 30, 2018)

- Minor bug fixed.

## v3.0.90(NOV 23, 2018)

- Minor bug fixed.

## v3.0.89(NOV 22, 2018)

- Added `createDistinctChannelIfNotExist()` in `GroupChannel`.
  - It creates distinct channel and gets the channel with `isCreated` flag which represents whether the channel is actually created or not.
- Added `getMessageChangeLogsByTimestamp()` in `SendBird`.
  - It retrieves message change logs since the given timestamp.
- Added `hiddenState` property in `GroupChannel` to get channel's hidden state.
  - `unhidden`: It's not hidden channel.
  - `hidden-allow-auto-unhide`: It's hidden channel which is automatically unhidden when new message comes in.
  - `hidden-prevent-auto-unhide`: It's hidden channel which is not unhidden when new message comes in.
- Added `allowAutoUnhide` as the second parameter into `hide()` to allow automatic unhide on new message.
- Added `unhide()` in `GroupChannel` to manually unhide the channel.
- Added `hiddenChannelFilter` in `GroupChannelListQuery` to filter by `hiddenState`.
  - `unhidden_only`: Get all unhidden channels. (default)
  - `hidden_only`: Get all hidden channels which `hiddenState` is `hidden_allow_auto_unhide` or `hidden_prevent_auto_unhide`.
  - `hidden_allow_auto_unhide`: Get channels which `hiddenState` is `hidden_allow_auto_unhide`.
  - `hidden_prevent_auto_unhide`: Get channels which `hiddenState` is `hidden_prevent_auto_unhide`.

## v3.0.88(NOV 15, 2018)

- Changed type of `sender` property in `UserMessage` and `FileMessage` from `User` to a new class `Sender` which extends `User`.
  - `Sender` has `isBlockedByMe` property which indicates that the message sender is blocked by the current user (default: false).
  - `isBlockedByMe` is valid in `GroupChannel` only.
  - Message from blocked user is delivered only when `block_mode` in `Application` is set to `explicit` mode. Otherwise, it's not visible nor delivered.
- Minor bug fixed.

## v3.0.87(NOV 8, 2018)

- Added `ApplicationUserListQuery`.
  - It is used to get users created in the application.
  - It could be derived by `createApplicationUserListQuery()` in `SendBird`.
  - `userIdsFilter`: use to filter through userIds to get users.
  - `metaDataKeyFilter`: use to filter by user's metaData to get users. If you set this value, you should set `metaDataValuesFilter` too.
  - `metaDataValuesFilter`: use to filter by user's metaData to get users. If you set this value, you should set `metaDataKeyFilter` too.
- Added `userIdsFilter` in `BlockedUserListQuery` to get filtered by userIds among users blocked by currentUser.
- Deprecated `createUserListQuery()` in `SendBird`. We recommend that you use `createApplicationUserListQuery()`.

## v3.0.85(OCT 31, 2018)

- Added `ScheduledUserMessage` feature to send `UserMessage` at the time specified by a user.
  - Added `ScheduledUserMessage` that is a scheduled `UserMessage`.
  - Added `ScheduledUserMessageParams` in `SendBird` to be delivered as a parameter to register scheduled `UserMessage`.
  - Added `registerScheduledUserMessage` in `GroupChannel` to register scheduled `UserMessage`.
- Improved stability.
- Minor bug fixed.

## v3.0.84(OCT 26, 2018)

- Added `getMyMutedInfo()` in `BaseChannel`
- Added `muteUser(user, seconds, description, callback)` and `muteUserWithUserId(userId, seconds, description, callback)` in `BaseChannel`
- Added `metadata_value_alphabetical` order in `GroupChannelListQuery` and `PublicGroupChannelListQuery`
- Added `metadataOrderKeyFilter` in `GroupChannelListQuery` and `PublicGroupChannelListQuery`
- Minor bug fixed

## v3.0.83(OCT 18, 2018)

- Added `getLastConnectedAt()` in `SendBird` to get currentUser's last connection timestamp.
- Improved `sendFileMessage()` in `BaseChannel`. From now, message's order is guaranteed regardless of the file size uploaded.
- Improved stability.
- Minor bug fixed.

## v3.0.82(OCT 11, 2018)

- Improved stability.
- Minor bug fixed.

## v3.0.81(SEP 21, 2018)

- Added readStatus of currentUser by passing `true` as first argument to `getReadStatus()` in `GroupChannel`. Passing `false` or nothing to `getReadStatus()` returns the read status without currentUser.
- Added `getReadMembers()` in `GroupChannel` to return a list of members who read the message.
- Added `getUnreadMember()` in `GroupChannel` to return a list of members who did not read the message.
- Added `isEqual()` in `GroupChannel` and `BaseMessage` to deep-equal with other instance.
- Added `isIdentical()` in `GroupChannel` and `BaseMessage` to check if the instance is identical to another.
- Fixed to call `connect()` callback function with an error when connection is lost while connecting to SendBird.
- Minor bug fixed.
- Deprecated some feature.

  - Deprecated `getCurrentUserId()` in `SendBird`.
  - Deprecated `CLOSING` in ConnectionState in `SendBird`.
  - Deprecated some `createChannel()`, `createChannelWithUserIds()` in `GroupChannel` and `OpenChannel`.
  - Deprecated some `updateChannel()` in `GroupChannel` and `OpenChannel`.
  - Deprecated some `sendUserMessage()` and `sendFileMessage()`.
  - Deprecated `getChannelCount()` in `GroupChannel`. Use newly added `SendBird.getGroupChannelCount()` instead.
  - Deprecated `getTotalUnreadMessageCount()` in `GroupChannel`. Use newly added `SendBird.getTotalUnreadMessageCount()` instead.
  - Deprecated `getTotalUnreadChannelCount()` in `GroupChannel`. Use newly added `SendBird.getTotalUnreadChannelCount()` instead.
  - Deprecated `getUnreadItemCount()` in `GroupChannel`. Use newly added `SendBird.getUnreadItemCount()` instead.

## v3.0.79(SEP 14, 2018)

- From now, `useMemberAsMessageSender` option is true by default.
- Fixed a bug previous messages not showing the senders' latest user metadata.
- Minor bug fixed.

## v3.0.78(SEP 11, 2018)

- Improved stability.
- Minor bug fixed.

## v3.0.77(SEP 5, 2018)

- Fixed a bug to support NodeJS below 10.

## v3.0.75(SEP 4, 2018)

- Improved connection state check when reconnected.

## v3.0.74(SEP 4, 2018)

- Minor bug fixed.
- Improved reconnection mechanism to detect network recovered on browsers only.
- Support NodeJS version 10.

## v3.0.73(SEP 3, 2018)

- Minor bug fixed.

## v3.0.72(Aug 24, 2018)

- Added `updateUserMessage()` with `UserMessageParams` in BaseChannel.
- Added `updateFileMessage()` with `FileMessageParams` in BaseChannel.
- Minor bug fixed.

## v3.0.71(Aug 16, 2018)

- Improved connection management.

## v3.0.70(Aug 3, 2018)

- Added `invitedAt` in GroupChannel.

## v3.0.69(Jul 13, 2018)

- Added properties as `limit`, `reverse`, `messageTypeFilter`, `customTypeFilter`, and `senderUserIdsFilter` in PreviousMessageListQuery.
- Added `getNextMessagesByTimestamp`, `getPreviousMessagesByTimestamp`, `getPreviousAndNextMessagesByTimestamp`, `getNextMessagesByID`, `getPreviousMessagesByID`, and `getPreviousAndNextMessagesByID` with `sendUserIds` parameter in BaseChannel.

## v3.0.68(Jul 6, 2018)

- Disabled to put the current user into mentionedUsers, mentionedUserIds in UserMessageParams and FileMessageParams.
- Changed not to increase unreadMentionCount and not to call onMentionReceived for CHANNEL mention by the current user (i.e. the message sender is the current user).

## v3.0.67(Jun 29, 2018)

- Added `unreadMentionCount` in `GroupChannel` to check the mention count of the current user.
- Added `unread_mention_count_only` in CountPreference to receive only updated `unreadMentionCount`.
- Added `mentionType` with `users` and `channel` in `BaseMessage` to check the type of mention.
- Added `mentionType` with `users` and `channel` in `BaseMessageParams` to set type of mention.

## v3.0.66(Jun 22, 2018)

- Added `nicknameStartsWithFilter` in `MemberListQuery` to search Group Channel members by nickname.
- Added `CountPreference` in `GroupChannel` which represents an enum of count preferences - 'all', 'unread_message_count_only', 'off'.
- Added `myCountPreference` in `GroupChannel` to get my count preference of a Group Channel.
- Added `setMyCountPreference` in `GroupChannel` to set my Group Channel count preference to a value in GroupChannel.CountPreference.
- Minor bug-fix.

## v3.0.65(Jun 13, 2018)

- Added `memberStateFilter` in `MemberListQuery` to search members based on the state of the member in a Group Channel.
- Added `myMutedState` in `GroupChannel` to show the state of the connected user in a Group Channel.
- Added `joinedMemberCount` in `GroupChannel` to show the total count of joined users in a Group Channel.
- Added `getUnreadItemCount` that receives an array argument having at least one among 'non_super_group_channel_unread_message_count', 'non_super_group_channel_invitation_count', 'super_group_channel_unread_message_count', and 'super_group_channel_invitation_count' in `GroupChannel`.
- Changed the type of `invitees` from `Member` to `User` on `onUserReceivedInvitation`.

## v3.0.64(Jun 1, 2018)

- Added a typing indicator throttle option in SendBird.Options.
- Fixed a minor bug for `GroupChannelParams`, `UserMessageParams` and `FileMessageParams`.
- Fixed a minor bug for `includeEmpty` to accept only a boolean argument.

## v3.0.63

- Fixed an occasional member count mismatch in a super group channel.

## v3.0.62

- Added a property named `myRole` in the `GroupChannel` which is a role of current user in the group channel.
- Added `GroupChannelTotalUnreadMessageCountParams` class that is used to get total unread message count.

## v3.0.61

- Ordered member list by nickname alphabetically.
- Fixed a bug that a file upload.

## v3.0.60

- Bugfix about RequireJS.

## v3.0.59

- Bugfix about myMemberState when user decline invitation.

## v3.0.58

- Deprecated `operatorFilter` in `GroupChannelMemberListQuery`.
- Added `createOperatorListQuery` in `BaseChannel` to search users that are operators in channel.
- Minor bugfix.

## v3.0.57

- Added `pushNotificationDeliveryOption` in `UserMessageParams` and `FileMessageParams` to determine whether it’d deliver the push notification for a user/file message.
- Added `channelCustomTypes` in `getTotalUnreadMessageCount()` to get an unread message count of `GroupChannel` with specific custom types.

## v3.0.56

- Changed an ephemeral `GroupChannel` to maintain fields of `lastMessage` and `unreadMessageCount` after connected.
- Update `SendBird.d.ts` file.

## v3.0.55

- Added `UserMessageParams` feature.
  - This is used in `sendUserMessage()` of channel.
  - message: set text message to send. This value is required.
  - data: set message data to send.
  - customType: set message customType to send.
  - targetLanguages: set message translation target language list.
  - mentionedUserIds: set mentioned userId.
  - mentionedUsers: set mentioned User.
- Added `FileMessageParams` feature.
  - This is used in `sendFileMessage()` of channel.
  - `file` or `fileUrl` is required.
  - file: set file to send.
  - fileUrl: set file's url to send.
  - fileName: set file's name to send. When you set a file and do not specify this value, it is specified by name of the file. When you set a fileUrl and do not specify this value, it is set as empty string.
  - fileSize: set file's size to send. When you set a file and do not specify this value, it is specified by size of the file. When you set a fileUrl and do not specify this value, it is set as 0.
  - mimeType: set file's type to send. When you set a file and do not specify this value, it is specified by type of the file. When you set a fileUrl and do not specify this value, it is specified by inferring from fileUrl.
  - data: set message data to send.
  - customType: set message customType to send.
  - thumbnailSizes: set size of the thumbnail to be created. This value only works when you use file not fileUrl.
  - mentionedUserIds: set mentioned userId.
  - mentionedUsers: set mentioned User.
- Added `sendUserMessage(UserMessageParams, CallBackFunction)` in channel.
- Added `sendFileMessage(FileMessageParams, CallBackFunction)` in channel.
- Added `mentionedUsers` in UserMessage and FileMessage to check mentioned user.
- Added `isEphemeral` in GroupChannel to indicate whether the channel supports message retention.
- Added `myMemberState` in GroupChannel to check my joined state on GroupChannel.
- Added `operator` feature in GroupChannel.
  - Added `operators` in `GroupChannelParams` to set operator.
  - Added `operatorUserIds` in `GroupChannelParams` to set operator.
- Added `banUser` in `GroupChannel` to ban User.
- Added `banUserWithUserId` in `GroupChannel` to ban User using userId.
- Added `unbanUser` in `GroupChannel` to remove banned User using User object.
- Added `unbanUserWithUserId` in `GroupChannel` to remove banned User using userId.
- Added `muteUser` in `GroupChannel` to mute User using User object.
- Added `muteUserWithUserId` in `GroupChannel` to mute User using userId.
- Added `unmuteUser` in `GroupChannel` to unmute User using User object.
- Added `unmuteUserWithUserId` in `GroupChannel` to unmute User using userId.
- Added `freeze` in `GroupChannel` not to allow messages from members from the channel.
- Added `unfreeze` in `GroupChannel` to allow messages from members from the channel.
- Added `isFrozen` in `GroupChannel` to check if the channel is frozen or not.
- From now, channel param in callbacks of the ChannelHandler below can come in either GroupChannel or OpenChannel.
  - onUserMuted(channel, user)
  - onUserUnmuted(channel, user)
  - onUserBanned(channel, user)
  - onUserUnbanned(channel, user)
  - onChannelFrozen(channel)
  - onChannelUnfrozen(channel)
- Added `createMemberListQuery()` in `GroupChannel` to search members.

## v3.0.54

- Minor bugfix for `UserMessage` and `FileMessage`.

## v3.0.53

- Deprecated `userIdsFilter` in `GroupChannelListQuery`.
- Deprecated `userIdsFilterExactMatch` in `GroupChannelListQuery`.
- Deprecated `queryType` in `GroupChannelListQuery`.
- Added `userIdsExactFilter` in `GroupChannelListQuery` to replace `userIdsFilter` and `userIdsFilterExactMatch`.
- Added `userIdsIncludeFilter` in `GroupChannelListQuery` to replace `userIdsFilter` and `userIdsFilterExactMatch`.
- Added `userIdsIncludeFilterQueryType` in `GroupChannelListQuery` to replace `queryType`.
- Added `customTypeStartsWithFilter` in `GroupChannelListQuery` to search channels based on `customType`.
- Added `superChannelFilter` in `GroupChannelListQuery` to search channels that `isSuper` is true.
- Added `publicChannelFilter` in `GroupChannelListQuery` to search channels that `isPublic` is true.
- Added `GroupChannelParams` feature.
  - This is used in `createChannel()` and `updateChannel()` of GroupChannel.
  - isDistinct: set isDistinct on creation or update.
  - isSuper: set isSuper on creation.
  - isPublic: set isPublic on creation or update.
  - channelUrl: set url of channel on creation.
  - name: set name on creation or update.
  - data: set data on creation or update.
  - customType: set customType on creation or update.
  - coverUrl: set coverUrl on creation or update.
  - coverImage: set coverUrl using file on creation or update.
  - addUser(): add user to be invited using user instance.
  - addUsers(): add user to be invited using user instance array.
  - addUserId(): add user to be invited using userId.
  - addUserIds(): add user to be invited using userId array.
- Added `PublicGroupChannelListQuery` in `SendBird` to search channels that `isPublic` is true.
  - limit: set list count for result.
  - includeEmpty: set whether to get channel that conversation is empty.
  - order: set order of result.
  - channelNameContainsFilter: set channelName to get channels based on.
  - channelUrlsFilter: set channelUrls to get channels based on.
  - customTypesFilter: set customTypes to get channels based on.
  - customTypeStartsWithFilter: set to get channels starting with the passed customType.
  - superChannelFilter: set whether to fetch all channels, super channels only, or non-super channels only.
  - membershipFilter: set whether to fetch according to the current user state of join.
  - next(): get channel list.

## v3.0.52

- Added `channelUrlsFilter` in `GroupChannelListQuery`.

## v3.0.51

- Minor bugfix for `markAsReadWithChannelUrls()`.

## v3.0.50

- Added `markAsReadWithChannelUrls()` in `SendBird` to simultaneously mark as read multiple channels the logged in user has joined.
- Added `markAsReadAll()` in `SendBird` to mark as read all channels the logged in user has joined.
- Deprecated `markAsReadAll()` in `GroupChannel`.
- From now, if you pass param as `true` when you call `hide()`, the channel's unreadMessageCount set to 0.

## v3.0.49

- Added `customTypesFilter` in `GroupChannelListQuery` to search groupChannel.
- Added `getOriginalProfileUrl()` in `User` for getting original profile image.
- Added `Friend` feature.
  - uploadFriendDiscoveries(): add friend using discovery key.
  - deleteFriendDiscovery() / deleteFriendDiscoveries(): delete friend's discovery key.
  - addFriends(): add friend using friend's userID.
  - deleteFriend() / deleteFriends(): delete friend using friend's userID.
  - createFriendListQuery(): create object for getting friend list.
  - getFriendChangeLogsByToken(): get friend relation changed log.
  - addUserEventHandler(): add handler for receiving user event.
  - removeUserEventHandler() / removeAllUserEventHandler(): remove user event handler.
  - UserEventHandler: user event handler object.
- From now, even when you call `connect()` before the previous `connect()` finishes, all of them get called back for the connection establishment result at the same time.

## v3.0.48

- Added `isActive` in `User`.

## v3.0.47

- Update TypeScript Definition file(SendBird.d.ts).

## v3.0.46

- Minor bug fixes.

## v3.0.45

- Minor bug fixes.

## v3.0.44

- Added `customTypeFilter` in `createMyGroupChannelListQuery`.
- Added `onChannelHidden` in `ChannelHandler`.

## v3.0.43

- Added `isHidden` in `GroupChannel`.

## v3.0.42

- Added `getMessageChangeLogsByToken()` in `Channel`.

## v3.0.41

- Updated TypeScript Definition file(SendBird.d.ts).
  > **NOTE**
  > Install via NPM and import like below in your TypeScript file:

```javascript
import * as SendBird from "SendBird";
var sb = new SendBird({ appId: "USER_APP_ID" });
// do something...
```

If you have trouble importing `SendBird`, please check your `tsconfig.json` file and change the value of `"allowSyntheticDefaultImports"` to `true` in `compilerOptions`.

## v3.0.40

- Added `serialize()` and `buildFromSerializedData()` in `User`, `Message` and `Channel`.
- Added `getChannelCount()` and `resetMyHistory()` in `GroupChannel`.

## v3.0.39

- Added `isBlockedByMe` and `isBlockingMe` in `Member`.

## v3.0.38

- Added `createMetaData`, `updateMetaData`, `deleteMetaData` and `deleteAllMetaData` in `User`.
- Added `metaDataKey` and `metaDataValues` filter in `UserListQuery`.
- Added `isFrozen` in `OpenChannel`.
- Added `hidePreviousMessages` option in `hide` function.

## v3.0.37

- Added `channelNameContainsFilter` in myGroupChannelListQuery object.
- Added `onMetaDataCreated`, `onMetaDataUpdated`, `onMetaDataDeleted`, `onMetaCountersCreated`, `onMetaCountersUpdated` and `onMetaCountersDeleted` handlers in `ChannelHandler`.

## v3.0.36

- Updated login status check.
- minor bugfix for NodeJS.

## v3.0.35

- Updated dependent libs for NodeJS.

## v3.0.34

- Updated the TypeScript file.
- Fixed the WebSocket disconnect.

## v3.0.33

- Fixed version check.

## v3.0.32

- Added `delete()` in OpenChannel.
- Added `updateChannel()` in GroupChannel and OpenChannel.

## v3.0.31

- Fixed a compatibility issue with React Native.

## v3.0.30

- Added `getPushTemplate()` and `setPushTemplate()`.
- Added checking SDK's version using `SendBird.version`.
- Now support connecting to custom host.
- Added return value when call `cancelUploadingFileMessage()`.

## v3.0.29

- Fix the bug that drops message events when sb.setErrorFirstCallback was set to True.

## v3.0.28

- `SendBirdException` now inherits from the JavaScript Error object.
- You can now decide the error parameter order in callback functions using `sb.setErrorFirstCallback(True|False)`.

## v3.0.27

- Added `updateUserMessage()` and `updateFileMessage()`.
- Added `onMessageUpdated()` in ChannelHandler.
- You now can confirm file upload progress by passing a progressHandler as a parameter when calling `sendFileMessage()`.
- Added `cancelUploadingFileMessage()`.

## v3.0.26

- Added getTotalUnreadChannelCount
- Now markAsRead doesn't have any delays

## v3.0.25

- Now GroupChannelList returns correct readstatus as well.
- Member nickname/profile get updated when new messages arrived.
- Return more consistent errors when connection() is not made before calling methods.
- Now we don't count senders in readreceipt.

## v3.0.24

- Now it supports IE8/9 with some Flash libraries
- Fixed a bug regarding disableStateChange/enableStateChange

## v3.0.23

### update

- Fixed a file uploading bug in React Native.
- Fixed minor bugs related to null check.

## v3.0.22

### update

- Fixed a bug in calling markAsRead().
- Added supports for video/image thumbnail generations and file encryption/access control.

## v3.0.19

### update

- connect()/disconnect() doesn't clear out connection/channel handlers anymore.
  Instead you should use removeAllConnectionHandlers() and removeAllChannelHandlers().
- Fixed a bug in removing ios push tokens.
- Now reconnect() method has been added which you can use when you want to manually trigger reconnect logic when network condition gets better.

## v3.0.18

### update

- Added "getMessages" series of methods with timestamp and messageId filter.
- Fixed a callback handling bug.

## v3.0.17

### update

- Finally push notifications feature is officially supported in V3 JS SDK.
- Added "setBackgroundState()" and "setForegroundState()".
- Added "messageType" filter to PreviousMessageQueryList.

## v3.0.16

### update

- InItial connection speed has been improved a lot!.
- Auto-Reconnection is now more robust.
- Auto-Translation support has been added.

## v3.0.15

### update

- Fixed a bug that created non-integer file size field.

## v3.0.14

### update

- Fixed a reconnection bug happening after calling disconnect() and connect() in serial.
- Added "custom_type" field to message/file object.
- Added "user_id"/"nickanme" filters to GroupChannelList.

## v3.0.12

### update

- Fixed wrong message_id, data field of FileMessage object.

## v3.0.11

### update

- Fixed a Keep-Alive bug now and it should be much faster in React Native/NodeJS.
- Now calling "connect()" multiple times in a row triggers "disconnect()" internally to avoid having multiple websocket connections
- New License File

## v3.0.10

### update

- Fixed a bug that increases unread message count when a user gets its own messages
- Cleared out old ws object's event handlers after disconnect to prevent a user from getting messages from another user who logged in on the same device.

## v3.0.9

### update

- minor bugfix for IE, Safari, Opera.

## v3.0.8

### update

- `sendFileMessage` bugfix.

## v3.0.7

### update

- Added features like filtered user list, open channel keyword search, push preference setting, etc.
- `messageListQuery` bugfix.

## v3.0.6

### update

- add dependencies

## v3.0.5

### update

- NodeJS Keepalive bugfix.
- React Native android bugfix.

## v3.0.4

### update

- `createPreviousMessageListQuery` bugfix.
- npm bundle bugfix.

## v3.0.3

### update

- npm publish.

## v3.0.2

### update

- Reconnect bugfix.
- `getMetaCounters`, `getMetaData` bugfix.

## v3.0.1

### update

- `blockUserWithUserId` bugfix.

## v3.0.0

### update

- v3.0.0 release.
