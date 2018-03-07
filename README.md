SendBird-SDK-JavaScript
===========

[SendBird](https://sendbird.com) provides the chat API and SDK for your app enabling real-time communication among your users.  


# Getting Started  

[Bower](http://bower.io) package for [SendBird.com](https://sendbird.com) JavaScript SDK  

      bower install sendbird


[npm](https://www.npmjs.com/package/sendbird) module for [SendBird.com](https://sendbird.com) JavaScript SDK  

      npm install sendbird


[download](https://github.com/smilefam/SendBird-SDK-JavaScript) for [SendBird.com](https://sendbird.com) JavaScript SDK  


# TypeScript
Install via NPM and import like below in your TypeScript file:   
```javascript  
import * as SendBird from 'SendBird';
var sb = new SendBird({'appId': 'APP_ID'});
// do something...
```  
If you have trouble importing `SendBird`, please check your `tsconfig.json` file and change the value of `"allowSyntheticDefaultImports"` to `true` in `compilerOptions`.  


# [Sample](https://github.com/smilefam/SendBird-JavaScript)  

 * [Basic Sample](https://sample.sendbird.com) using [Sendbird SDK](https://github.com/smilefam/SendBird-SDK-JavaScript). [download](https://github.com/smilefam/SendBird-JavaScript/tree/master/web-sample)    
 * [Widget Sample](https://sample.sendbird.com/widget) using [Sendbird SDK](https://github.com/smilefam/SendBird-SDK-JavaScript). [download](https://github.com/smilefam/SendBird-JavaScript/tree/master/web-widget)    
 * [LiveChat Sample](https://sample.sendbird.com/livechat) using [Sendbird SDK](https://github.com/smilefam/SendBird-SDK-JavaScript). [download](https://github.com/smilefam/SendBird-JavaScript/tree/master/web-live-chat)    
  

# [Documentation](https://docs.sendbird.com/javascript)


## Upgrading to v3.0.55
 If you want to check the record of other version, go to [Change Log](https://github.com/smilefam/SendBird-SDK-JavaScript/blob/master/CHANGELOG.md).  
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
 
  
## [Change Log](https://github.com/smilefam/SendBird-SDK-JavaScript/blob/master/CHANGELOG.md)    


## License
[SendBird License](https://github.com/smilefam/SendBird-SDK-JavaScript/blob/master/LICENSE.md)  


