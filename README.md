[![npm](https://img.shields.io/npm/v/sendbird.svg?style=popout&colorB=red)](https://www.npmjs.com/package/sendbird)

# Sendbird JavaScript SDK

[Sendbird](https://sendbird.com) provides the chat API and SDK for your app enabling real-time communication among your users.

# Getting Started

[bower](http://bower.io) package for [Sendbird](https://sendbird.com) JavaScript SDK

      bower install sendbird

[npm](https://www.npmjs.com/package/sendbird) module for [Sendbird](https://sendbird.com) JavaScript SDK

      npm install sendbird --save

[Download](https://github.com/sendbird/Sendbird-SDK-JavaScript) for [Sendbird](https://sendbird.com) JavaScript SDK if you wish to use it without a package manager.

> NOTICE! You should also add [axios](https://github.com/axios/axios) library into the `script` tag before the Sendbird library inclusion since `v3.0.127`. You can host the library by your own, or utilize the CDN as the library refers to it. The below is an example.

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="/your-own-path-to-sendbird/Sendbird.min.js"></script>
```

# TypeScript

Install via NPM and import like below in your TypeScript file:

```javascript
import * as SendBird from "sendbird";
var sb = new SendBird({ appId: "APP_ID" });
// do something...
```

If you have trouble importing `Sendbird`, please check your `tsconfig.json` file and change the value of `"allowSyntheticDefaultImports"` to `true` in `compilerOptions`.

# [Sample](https://github.com/sendbird/Sendbird-JavaScript)

- [Basic Sample](https://sample.sendbird.com/basic) using [Sendbird SDK](https://github.com/sendbird/Sendbird-SDK-JavaScript). [download](https://github.com/sendbird/Sendbird-JavaScript/tree/master/web-sample)
- [Widget Sample](https://sample.sendbird.com/widget) using [Sendbird SDK](https://github.com/sendbird/Sendbird-SDK-JavaScript). [download](https://github.com/sendbird/Sendbird-JavaScript/tree/master/web-widget)
- [LiveChat Sample](https://sample.sendbird.com/livechat) using [Sendbird SDK](https://github.com/sendbird/Sendbird-SDK-JavaScript). [download](https://github.com/sendbird/Sendbird-JavaScript/tree/master/web-live-chat)

## SyncManager

`SyncManager` is a support add-on for [Sendbird SDK](https://github.com/sendbird/Sendbird-SDK-JavaScript). Major benefits of `SyncManager` are,

- Local cache integrated: store channel/message data in local storage for fast view loading.
- Event-driven data handling: subscribe channel/message event like `insert`, `update`, `remove` at a single spot in order to apply data event to view.

Check out [Basic Sample with SyncManager](https://github.com/sendbird/Sendbird-JavaScript/tree/master/web-basic-sample-syncmanager) which is similar to [Basic Sample](https://sample.sendbird.com/basic) but `SyncManager` integrated. For more information about `SyncManager`, please refer to [SyncManager README](https://github.com/sendbird/sendbird-syncmanager-javascript/blob/master/README.md).

# [Documentation](https://docs.sendbird.com/javascript)

## v3.0.138(OCT 30, 2020)

If you want to check the record of other version, go to [Change Log](https://github.com/sendbird/Sendbird-SDK-JavaScript/blob/master/CHANGELOG.md).

- Added `getAllowFriendDiscovery()` and `setAllowFriendDiscovery()` in `SendBird`.
  - If it's set to `false`, `uploadFriendDiscoveries()` called by others does not add the user as a friend.
- Set `size` in `FileMessage` automatically.
- Improved stability.

## [Change Log](https://github.com/sendbird/Sendbird-SDK-JavaScript/blob/master/CHANGELOG.md)

## License

[Sendbird License](https://github.com/sendbird/Sendbird-SDK-JavaScript/blob/master/LICENSE.md)
