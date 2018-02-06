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


## Upgrading to v3.0.53
 If you want to check the record of other version, go to [Change Log](https://github.com/smilefam/SendBird-SDK-JavaScript/blob/master/CHANGELOG.md).
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
 
  
## [Change Log](https://github.com/smilefam/SendBird-SDK-JavaScript/blob/master/CHANGELOG.md)    


## License
[SendBird License](https://github.com/smilefam/SendBird-SDK-JavaScript/blob/master/LICENSE.md)  


