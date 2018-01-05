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


## Upgrading to v3.0.49
 If you want to check the record of other version, go to [Change Log](https://github.com/smilefam/SendBird-SDK-JavaScript/blob/master/CHANGELOG.md).
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
 
  
## [Change Log](https://github.com/smilefam/SendBird-SDK-JavaScript/blob/master/CHANGELOG.md)    


## License
[SendBird License](https://github.com/smilefam/SendBird-SDK-JavaScript/blob/master/LICENSE.md)  


