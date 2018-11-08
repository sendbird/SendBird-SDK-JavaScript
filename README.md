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
import * as SendBird from 'sendbird';
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

## v3.0.86(NOV 8, 2018)
If you want to check the record of other version, go to [Change Log](https://github.com/smilefam/SendBird-SDK-JavaScript/blob/master/CHANGELOG.md).
 * Added `ApplicationUserListQuery`.  
   * It is used to get users created in the application.  
   * It could be derived by `createApplicationUserListQuery()` in `SendBird`.  
   * `userIdsFilter`: use to filter through userIds to get users.  
   * `metaDataKeyFilter`: use to filter by user's metaData to get users. If you set this value, you should set `metaDataValuesFilter` too.  
   * `metaDataValuesFilter`: use to filter by user's metaData to get users. If you set this value, you should set `metaDataKeyFilter` too.  
 * Added `userIdsFilter` in `BlockedUserListQuery` to get filtered by userIds among users blocked by currentUser.  
 * Deprecated `createUserListQuery()` in `SendBird`. We recommend that you use `createApplicationUserListQuery()`.  
 
  
## [Change Log](https://github.com/smilefam/SendBird-SDK-JavaScript/blob/master/CHANGELOG.md)    


## License
[SendBird License](https://github.com/smilefam/SendBird-SDK-JavaScript/blob/master/LICENSE.md)  


