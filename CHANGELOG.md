Changelog
=========

## v3.0.93(JAN 17, 2019)
 * Add push trigger option to enable/disable remote push notification.
   * Added `setPushTriggerOption(option, callback)` to `SendBird`. It determines whether the current user receives remote push notification in all group channels.
   * Added `getPushTriggerOption(callback)` to `SendBird`. It returns the current push trigger option setting for all group channels.
   * Added `setMyPushTriggerOption(option, callback)` to `GroupChannel`. It determines whether the current user receives remote push notification in the group channel.
   * Added `getMyPushTriggerOption(callback)` to `GroupChannel`. It returns the current push trigger option setting for the group channel.
 * Snooze or stop snooze remote push notification in specific duration.
   * Added `setSnoozePeriod(snoozeOn, startTs, endTs, callback)` into `SendBird`. It enables or disables snooze in the period.
   * Added `getSnoozePeriod(callback)` into `SendBird`. It returns the current snooze setting for the current user.

## v3.0.92(DEC 13, 2018)
 * Minor bug fixed.

## v3.0.91(NOV 30, 2018)
 * Minor bug fixed.

## v3.0.90(NOV 23, 2018)
 * Minor bug fixed.  
 
## v3.0.89(NOV 22, 2018)
 * Added `createDistinctChannelIfNotExist()` in `GroupChannel`.
   * It creates distinct channel and gets the channel with `isCreated` flag which represents whether the channel is actually created or not.
 * Added `getMessageChangeLogsByTimestamp()` in `SendBird`.
   * It retrieves message change logs since the given timestamp.
 * Added `hiddenState` property in `GroupChannel` to get channel's hidden state.
   * `unhidden`: It's not hidden channel.
   * `hidden-allow-auto-unhide`: It's hidden channel which is automatically unhidden when new message comes in.
   * `hidden-prevent-auto-unhide`: It's hidden channel which is not unhidden when new message comes in.
 * Added `allowAutoUnhide` as the second parameter into `hide()` to allow automatic unhide on new message.
 * Added `unhide()` in `GroupChannel` to manually unhide the channel.
 * Added `hiddenChannelFilter` in `GroupChannelListQuery` to filter by `hiddenState`.
   * `unhidden_only`: Get all unhidden channels. (default)
   * `hidden_only`: Get all hidden channels which `hiddenState` is `hidden_allow_auto_unhide` or `hidden_prevent_auto_unhide`.
   * `hidden_allow_auto_unhide`: Get channels which `hiddenState` is `hidden_allow_auto_unhide`.
   * `hidden_prevent_auto_unhide`: Get channels which `hiddenState` is `hidden_prevent_auto_unhide`.

## v3.0.88(NOV 15, 2018)
 * Changed type of `sender` property in `UserMessage` and `FileMessage` from `User` to a new class `Sender` which extends `User`.
   * `Sender` has `isBlockedByMe` property which indicates that the message sender is blocked by the current user (default: false).
   * `isBlockedByMe` is valid in `GroupChannel` only.
   * Message from blocked user is delivered only when `block_mode` in `Application` is set to `explicit` mode. Otherwise, it's not visible nor delivered.
 * Minor bug fixed.

## v3.0.87(NOV 8, 2018)
 * Added `ApplicationUserListQuery`.  
   * It is used to get users created in the application.  
   * It could be derived by `createApplicationUserListQuery()` in `SendBird`.  
   * `userIdsFilter`: use to filter through userIds to get users.  
   * `metaDataKeyFilter`: use to filter by user's metaData to get users. If you set this value, you should set `metaDataValuesFilter` too.  
   * `metaDataValuesFilter`: use to filter by user's metaData to get users. If you set this value, you should set `metaDataKeyFilter` too.  
 * Added `userIdsFilter` in `BlockedUserListQuery` to get filtered by userIds among users blocked by currentUser.  
 * Deprecated `createUserListQuery()` in `SendBird`. We recommend that you use `createApplicationUserListQuery()`.  
 
## v3.0.85(OCT 31, 2018)
 * Added `ScheduledUserMessage` feature to send `UserMessage` at the time specified by a user.  
   * Added `ScheduledUserMessage` that is a scheduled `UserMessage`.  
   * Added `ScheduledUserMessageParams` in `SendBird` to be delivered as a parameter to register scheduled `UserMessage`.  
   * Added `registerScheduledUserMessage` in `GroupChannel` to register scheduled `UserMessage`.  
 * Improved stability.  
 * Minor bug fixed.  

## v3.0.84(OCT 26, 2018)
 * Added `getMyMutedInfo()` in `BaseChannel`
 * Added `muteUser(user, seconds, description, callback)` and `muteUserWithUserId(userId, seconds, description, callback)` in `BaseChannel`
 * Added `metadata_value_alphabetical` order in `GroupChannelListQuery` and `PublicGroupChannelListQuery`
 * Added `metadataOrderKeyFilter` in `GroupChannelListQuery` and `PublicGroupChannelListQuery`
 * Minor bug fixed

## v3.0.83(OCT 18, 2018)
 * Added `getLastConnectedAt()` in `SendBird` to get currentUser's last connection timestamp.  
 * Improved `sendFileMessage()` in `BaseChannel`. From now, message's order is guaranteed regardless of the file size uploaded.  
 * Improved stability.  
 * Minor bug fixed.  
 
## v3.0.82(OCT 11, 2018)
 * Improved stability.  
 * Minor bug fixed.  
 
## v3.0.81(SEP 21, 2018)  
 * Added readStatus of currentUser by passing `true` as first argument to `getReadStatus()` in `GroupChannel`. Passing `false` or nothing to `getReadStatus()` returns the read status without currentUser.  
 * Added `getReadMembers()` in `GroupChannel` to return a list of members who read the message.   
 * Added `getUnreadMember()` in `GroupChannel` to return a list of members who did not read the message.  
 * Added `isEqual()` in `GroupChannel` and `BaseMessage` to deep-equal with other instance.  
 * Added `isIdentical()` in `GroupChannel` and `BaseMessage` to check if the instance is identical to another.  
 * Fixed to call `connect()` callback function with an error when connection is lost while connecting to SendBird.  
 * Minor bug fixed.  
 * Deprecated some feature.  
   * Deprecated `getCurrentUserId()` in `SendBird`.  
   * Deprecated `CLOSING` in ConnectionState in `SendBird`.  
   * Deprecated some `createChannel()`, `createChannelWithUserIds()` in `GroupChannel` and `OpenChannel`.  
   * Deprecated some `updateChannel()` in `GroupChannel` and `OpenChannel`.  
   * Deprecated some `sendUserMessage()` and `sendFileMessage()`.  
   * Deprecated `getChannelCount()` in `GroupChannel`. Use newly added `SendBird.getGroupChannelCount()` instead.  
   * Deprecated `getTotalUnreadMessageCount()` in `GroupChannel`. Use newly added `SendBird.getTotalUnreadMessageCount()` instead.  
   * Deprecated `getTotalUnreadChannelCount()` in `GroupChannel`. Use newly added `SendBird.getTotalUnreadChannelCount()` instead.    
   * Deprecated `getUnreadItemCount()` in `GroupChannel`. Use newly added `SendBird.getUnreadItemCount()` instead.    
   
## v3.0.79(SEP 14, 2018)
 * From now, `useMemberAsMessageSender` option is true by default.  
 * Fixed a bug previous messages not showing the senders' latest user metadata.  
 * Minor bug fixed.  
 
## v3.0.78(SEP 11, 2018)
 * Improved stability.  
 * Minor bug fixed.  

## v3.0.77(SEP 5, 2018)
 * Fixed a bug to support NodeJS below 10.  

## v3.0.75(SEP 4, 2018)
 * Improved connection state check when reconnected.  
 
## v3.0.74(SEP 4, 2018)
 * Minor bug fixed.    
 * Improved reconnection mechanism to detect network recovered on browsers only.    
 * Support NodeJS version 10.    

## v3.0.73(SEP 3, 2018)  
 * Minor bug fixed.  
 
## v3.0.72(Aug 24, 2018)
 * Added `updateUserMessage()` with `UserMessageParams` in BaseChannel.  
 * Added `updateFileMessage()` with `FileMessageParams` in BaseChannel.  
 * Minor bug fixed.  
 
## v3.0.71(Aug 16, 2018)
 * Improved connection management.  
 
## v3.0.70(Aug 3, 2018)
 * Added `invitedAt` in GroupChannel.

## v3.0.69(Jul 13, 2018)
 * Added properties as `limit`, `reverse`, `messageTypeFilter`, `customTypeFilter`, and `senderUserIdsFilter` in PreviousMessageListQuery.    
 * Added `getNextMessagesByTimestamp`, `getPreviousMessagesByTimestamp`, `getPreviousAndNextMessagesByTimestamp`, `getNextMessagesByID`, `getPreviousMessagesByID`, and `getPreviousAndNextMessagesByID` with `sendUserIds` parameter in BaseChannel.   

## v3.0.68(Jul 6, 2018)
 * Disabled to put the current user into mentionedUsers, mentionedUserIds in UserMessageParams and FileMessageParams.
 * Changed not to increase unreadMentionCount and not to call onMentionReceived for CHANNEL mention by the current user (i.e. the message sender is the current user).

## v3.0.67(Jun 29, 2018)
 * Added `unreadMentionCount` in `GroupChannel` to check the mention count of the current user.    
 * Added `unread_mention_count_only` in CountPreference to receive only updated `unreadMentionCount`.  
 * Added `mentionType` with `users` and `channel` in `BaseMessage` to check the type of mention.  
 * Added `mentionType` with `users` and `channel` in `BaseMessageParams` to set type of mention.  
 
## v3.0.66(Jun 22, 2018)
 * Added `nicknameStartsWithFilter` in `MemberListQuery` to search Group Channel members by nickname.
 * Added `CountPreference` in `GroupChannel` which represents an enum of count preferences - 'all', 'unread_message_count_only', 'off'.
 * Added `myCountPreference` in `GroupChannel` to get my count preference of a Group Channel.
 * Added `setMyCountPreference` in `GroupChannel` to set my Group Channel count preference to a value in GroupChannel.CountPreference.
 * Minor bug-fix.

## v3.0.65(Jun 13, 2018)
 * Added `memberStateFilter` in `MemberListQuery` to search members based on the state of the member in a Group Channel.
 * Added `myMutedState` in `GroupChannel` to show the state of the connected user in a Group Channel.
 * Added `joinedMemberCount` in `GroupChannel` to show the total count of joined users in a Group Channel.
 * Added `getUnreadItemCount` that receives an array argument having at least one among 'non_super_group_channel_unread_message_count', 'non_super_group_channel_invitation_count', 'super_group_channel_unread_message_count', and 'super_group_channel_invitation_count' in `GroupChannel`.  
 * Changed the type of `invitees` from `Member` to `User` on `onUserReceivedInvitation`. 
 
## v3.0.64(Jun 1, 2018)
 * Added a typing indicator throttle option in SendBird.Options.  
 * Fixed a minor bug for `GroupChannelParams`, `UserMessageParams` and `FileMessageParams`.  
 * Fixed a minor bug for `includeEmpty` to accept only a boolean argument.  

## v3.0.63
 * Fixed an occasional member count mismatch in a super group channel.

## v3.0.62
 * Added a property named `myRole` in the `GroupChannel` which is a role of current user in the group channel.
 * Added `GroupChannelTotalUnreadMessageCountParams` class that is used to get total unread message count.

## v3.0.61
 * Ordered member list by nickname alphabetically.  
 * Fixed a bug that a file upload.  

## v3.0.60
 * Bugfix about RequireJS.  
 
## v3.0.59
 * Bugfix about myMemberState when user decline invitation.
 
## v3.0.58
 * Deprecated `operatorFilter` in `GroupChannelMemberListQuery`.
 * Added `createOperatorListQuery` in `BaseChannel` to search users that are operators in channel.
 * Minor bugfix.  

## v3.0.57
 * Added `pushNotificationDeliveryOption` in `UserMessageParams` and `FileMessageParams` to determine whether it’d deliver the push notification for a user/file message.
 * Added `channelCustomTypes` in `getTotalUnreadMessageCount()` to get an unread message count of `GroupChannel` with specific custom types.

## v3.0.56
 * Changed an ephemeral `GroupChannel` to maintain fields of `lastMessage` and `unreadMessageCount` after connected.
 * Update `SendBird.d.ts` file.  
 
## v3.0.55
 * Added `UserMessageParams` feature.  
   * This is used in `sendUserMessage()` of channel.  
   * message: set text message to send. This value is required.  
   * data: set message data to send.  
   * customType: set message customType to send.
   * targetLanguages: set message translation target language list.  
   * mentionedUserIds: set mentioned userId.
   * mentionedUsers: set mentioned User.
 * Added `FileMessageParams` feature.  
   * This is used in `sendFileMessage()` of channel.  
   * `file` or `fileUrl` is required.
   * file: set file to send.  
   * fileUrl: set file's url to send.  
   * fileName: set file's name to send. When you set a file and do not specify this value, it is specified by name of the file. When you set a fileUrl and do not specify this value, it is set as empty string.  
   * fileSize: set file's size to send.  When you set a file and do not specify this value, it is specified by size of the file. When you set a fileUrl and do not specify this value, it is set as 0.  
   * mimeType: set file's type to send.  When you set a file and do not specify this value, it is specified by type of the file. When you set a fileUrl and do not specify this value, it is specified by inferring from fileUrl.
   * data: set message data to send.  
   * customType: set message customType to send.
   * thumbnailSizes: set size of the thumbnail to be created. This value only works when you use file not fileUrl.
   * mentionedUserIds: set mentioned userId.
   * mentionedUsers: set mentioned User.
 * Added `sendUserMessage(UserMessageParams, CallBackFunction)` in channel.  
 * Added `sendFileMessage(FileMessageParams, CallBackFunction)` in channel.  
 * Added `mentionedUsers` in UserMessage and FileMessage to check mentioned user.  
 * Added `isEphemeral` in GroupChannel to indicate whether the channel supports message retention.
 * Added `myMemberState` in GroupChannel to check my joined state on GroupChannel.  
 * Added `operator` feature in GroupChannel.  
   * Added `operators` in `GroupChannelParams` to set operator.  
   * Added `operatorUserIds` in `GroupChannelParams` to set operator.  
 * Added `banUser` in `GroupChannel` to ban User.  
 * Added `banUserWithUserId` in `GroupChannel` to ban User using userId.
 * Added `unbanUser ` in `GroupChannel` to remove banned User using User object.  
 * Added `unbanUserWithUserId` in `GroupChannel` to remove banned User using userId.
 * Added `muteUser` in `GroupChannel` to mute User using User object.  
 * Added `muteUserWithUserId` in `GroupChannel` to mute User using userId.
 * Added `unmuteUser` in `GroupChannel` to unmute User using User object.  
 * Added `unmuteUserWithUserId` in `GroupChannel` to unmute User using userId.
 * Added `freeze` in `GroupChannel` not to allow messages from members from the channel.
 * Added `unfreeze` in `GroupChannel` to allow messages from members from the channel.
 * Added `isFrozen` in `GroupChannel` to check if the channel is frozen or not.
 * From now, channel param in callbacks of the ChannelHandler below can come in either GroupChannel or OpenChannel.
   * onUserMuted(channel, user)
   * onUserUnmuted(channel, user)
   * onUserBanned(channel, user)
   * onUserUnbanned(channel, user)
   * onChannelFrozen(channel)
   * onChannelUnfrozen(channel)
 * Added `createMemberListQuery()` in `GroupChannel` to search members.

## v3.0.54
 * Minor bugfix for `UserMessage` and `FileMessage`.  

## v3.0.53
 * Deprecated `userIdsFilter` in `GroupChannelListQuery`.
 * Deprecated `userIdsFilterExactMatch` in `GroupChannelListQuery`.
 * Deprecated `queryType` in `GroupChannelListQuery`.
 * Added `userIdsExactFilter` in `GroupChannelListQuery` to replace `userIdsFilter` and `userIdsFilterExactMatch`.  
 * Added `userIdsIncludeFilter` in `GroupChannelListQuery` to replace `userIdsFilter` and `userIdsFilterExactMatch`.    
 * Added `userIdsIncludeFilterQueryType` in `GroupChannelListQuery` to replace `queryType`.  
 * Added `customTypeStartsWithFilter` in `GroupChannelListQuery` to search channels based on `customType`.  
 * Added `superChannelFilter` in `GroupChannelListQuery` to search channels that `isSuper` is true.  
 * Added `publicChannelFilter` in `GroupChannelListQuery` to search channels that `isPublic` is true.
 * Added `GroupChannelParams` feature.
   * This is used in `createChannel()` and `updateChannel()` of GroupChannel.  
   * isDistinct: set isDistinct on creation or update.  
   * isSuper: set isSuper on creation.  
   * isPublic: set isPublic on creation or update.  
   * channelUrl: set url of channel on creation.  
   * name: set name on creation or update.  
   * data: set data on creation or update.  
   * customType: set customType on creation or update.  
   * coverUrl: set coverUrl on creation or update.  
   * coverImage: set coverUrl using file on creation or update.  
   * addUser(): add user to be invited using user instance.    
   * addUsers(): add user to be invited using user instance array.  
   * addUserId(): add user to be invited using userId.  
   * addUserIds(): add user to be invited using userId array.
 * Added `PublicGroupChannelListQuery` in `SendBird` to search channels that `isPublic` is true.  
   * limit: set list count for result.  
   * includeEmpty: set whether to get channel that conversation is empty.
   * order: set order of result.  
   * channelNameContainsFilter: set channelName to get channels based on.  
   * channelUrlsFilter: set channelUrls to get channels based on.  
   * customTypesFilter: set customTypes to get channels based on.  
   * customTypeStartsWithFilter: set to get channels starting with the passed customType.  
   * superChannelFilter: set whether to fetch all channels, super channels only, or non-super channels only.  
   * membershipFilter: set whether to fetch according to the current user state of join.  
   * next(): get channel list.  

## v3.0.52
 * Added `channelUrlsFilter` in `GroupChannelListQuery`.  
 
## v3.0.51
 * Minor bugfix for `markAsReadWithChannelUrls()`.  

## v3.0.50
 * Added `markAsReadWithChannelUrls()` in `SendBird` to simultaneously mark as read multiple channels the logged in user has joined.  
 * Added `markAsReadAll()` in `SendBird` to mark as read all channels the logged in user has joined.  
 * Deprecated `markAsReadAll()` in `GroupChannel`.
 * From now, if you pass param as `true` when you call `hide()`, the channel's unreadMessageCount set to 0.  

## v3.0.49
 * Added `customTypesFilter` in `GroupChannelListQuery` to search groupChannel.  
 * Added `getOriginalProfileUrl()` in `User` for getting original profile image.  
 * Added `Friend` feature.
   * uploadFriendDiscoveries(): add friend using discovery key. 
   * deleteFriendDiscovery() / deleteFriendDiscoveries(): delete friend's discovery key. 
   * addFriends(): add friend using friend's userID. 
   * deleteFriend() / deleteFriends(): delete friend using friend's userID.  
   * createFriendListQuery(): create object for getting friend list. 
   * getFriendChangeLogsByToken(): get friend relation changed log. 
   * addUserEventHandler(): add handler for receiving user event. 
   * removeUserEventHandler() / removeAllUserEventHandler(): remove user event handler.  
   * UserEventHandler: user event handler object. 
 * From now, even when you call `connect()` before the previous `connect()` finishes, all of them get called back for the connection establishment result at the same time.  

## v3.0.48
 * Added `isActive` in `User`.

## v3.0.47
 * Update TypeScript Definition file(SendBird.d.ts).  

## v3.0.46
 * Minor bug fixes.  

## v3.0.45
 * Minor bug fixes.      
 
## v3.0.44
 * Added `customTypeFilter` in `createMyGroupChannelListQuery`.  
 * Added `onChannelHidden` in `ChannelHandler`. 

## v3.0.43
 * Added `isHidden` in `GroupChannel`.  
 
## v3.0.42
 * Added `getMessageChangeLogsByToken()` in `Channel`.  

## v3.0.41
 * Updated TypeScript Definition file(SendBird.d.ts).  
> **NOTE**  
 Install via NPM and import like below in your TypeScript file:   
 ```javascript  
 import * as SendBird from 'SendBird';
 var sb = new SendBird({'appId': 'USER_APP_ID'});
 // do something...
 ```  
 If you have trouble importing `SendBird`, please check your `tsconfig.json` file and change the value of `"allowSyntheticDefaultImports"` to `true` in `compilerOptions`.  


## v3.0.40
 * Added `serialize()` and `buildFromSerializedData()` in `User`, `Message` and `Channel`.  
 * Added `getChannelCount()` and `resetMyHistory()` in `GroupChannel`.  
   
## v3.0.39
 * Added `isBlockedByMe` and `isBlockingMe` in `Member`.  

## v3.0.38
 * Added `createMetaData`, `updateMetaData`, `deleteMetaData` and `deleteAllMetaData` in `User`.  
 * Added `metaDataKey` and `metaDataValues` filter in `UserListQuery`.  
 * Added `isFrozen` in `OpenChannel`.  
 * Added `hidePreviousMessages` option in `hide` function.  

## v3.0.37
 * Added `channelNameContainsFilter` in myGroupChannelListQuery object.    
 * Added `onMetaDataCreated`, `onMetaDataUpdated`, `onMetaDataDeleted`, `onMetaCountersCreated`, `onMetaCountersUpdated` and `onMetaCountersDeleted` handlers in `ChannelHandler`.  
 
## v3.0.36
 * Updated login status check.  
 * minor bugfix for NodeJS.  
 
## v3.0.35
 * Updated dependent libs for NodeJS.

## v3.0.34
 * Updated the TypeScript file.  
 * Fixed the WebSocket disconnect.  

## v3.0.33
 * Fixed version check.   
 
## v3.0.32
 * Added `delete()` in OpenChannel.  
 * Added `updateChannel()` in GroupChannel and OpenChannel.  
 
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
