[![npm](https://img.shields.io/npm/v/sendbird.svg?style=popout&colorB=red)](https://www.npmjs.com/package/sendbird)  
  
SendBird JavaScript SDK
===========
    
[SendBird](https://sendbird.com) provides the chat API and SDK for your app enabling real-time communication among your users.  


# Getting Started  

[Bower](http://bower.io) package for [SendBird.com](https://sendbird.com) JavaScript SDK  

      bower install sendbird  


[npm](https://www.npmjs.com/package/sendbird) module for [SendBird.com](https://sendbird.com) JavaScript SDK  

      npm install sendbird --save  


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

## v3.0.80(SEP 21, 2018)  
If you want to check the record of other version, go to [Change Log](https://github.com/smilefam/SendBird-SDK-JavaScript/blob/master/CHANGELOG.md).
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
 
  
## [Change Log](https://github.com/smilefam/SendBird-SDK-JavaScript/blob/master/CHANGELOG.md)    


## License
[SendBird License](https://github.com/smilefam/SendBird-SDK-JavaScript/blob/master/LICENSE.md)  


