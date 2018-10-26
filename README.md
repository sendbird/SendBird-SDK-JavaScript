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

 * [Basic Sample](https://sample.sendbird.com/basic) using [Sendbird SDK](https://github.com/smilefam/SendBird-SDK-JavaScript). [download](https://github.com/smilefam/SendBird-JavaScript/tree/master/web-sample)    
 * [Widget Sample](https://sample.sendbird.com/widget) using [Sendbird SDK](https://github.com/smilefam/SendBird-SDK-JavaScript). [download](https://github.com/smilefam/SendBird-JavaScript/tree/master/web-widget)    
 * [LiveChat Sample](https://sample.sendbird.com/livechat) using [Sendbird SDK](https://github.com/smilefam/SendBird-SDK-JavaScript). [download](https://github.com/smilefam/SendBird-JavaScript/tree/master/web-live-chat)    
    
## SyncManager
`SyncManager` is a support add-on for [SendBird SDK](https://github.com/smilefam/SendBird-SDK-JavaScript). Major benefits of `SyncManager` are,  
  
 * Local cache integrated: store channel/message data in local storage for fast view loading.  
 * Event-driven data handling: subscribe channel/message event like `insert`, `update`, `remove` at a single spot in order to apply data event to view.  
  
Check out [Basic Sample with SyncManager](https://github.com/smilefam/SendBird-JavaScript/tree/master/web-basic-sample-localcache) which is same as [Basic Sample](https://sample.sendbird.com/basic) with `SyncManager` integrated.    
For more information about `SyncManager`, please refer to [SyncManager README](https://github.com/smilefam/SendBird-JavaScript/blob/master/web-basic-sample-localcache/src/js/manager/README.md).  


# [Documentation](https://docs.sendbird.com/javascript)

## v3.0.84(OCT 26, 2018)
If you want to check the record of other version, go to [Change Log](https://github.com/smilefam/SendBird-SDK-JavaScript/blob/master/CHANGELOG.md).
 * Added `getMyMutedInfo()` in `BaseChannel`
 * Added `muteUser(user, seconds, description, callback)` and `muteUserWithUserId(userId, seconds, description, callback)` in `BaseChannel`
 * Added `metadata_value_alphabetical` order in `GroupChannelListQuery` and `PublicGroupChannelListQuery`
 * Added `metadataOrderKeyFilter` in `GroupChannelListQuery` and `PublicGroupChannelListQuery`
 * Minor bug fixed
 
  
## [Change Log](https://github.com/smilefam/SendBird-SDK-JavaScript/blob/master/CHANGELOG.md)    


## License
[SendBird License](https://github.com/smilefam/SendBird-SDK-JavaScript/blob/master/LICENSE.md)  


