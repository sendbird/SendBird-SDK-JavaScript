# [Sendbird](https://sendbird.com) Chat SDK v3 for JavaScript

![Platform](https://img.shields.io/badge/platform-JAVASCRIPT-orange.svg)
![Languages](https://img.shields.io/badge/language-JAVASCRIPT-orange.svg)
[![npm](https://img.shields.io/npm/v/sendbird.svg?style=popout&colorB=red)](https://www.npmjs.com/package/sendbird)

## Deprecation Note (v3)
:warning: Please note that Sendbird’s SDK v3 will be deprecated by **July 2023**. You may still use the older SDKs at your choice, but no new updates or bug fixes will be made to SDK v3.

**We recommend clients to plan their migration to SDK v4 as early as possible as there are breaking changes.** We also provide prioritized support for migration and any issues related to v4. SDK v4 provides far richer and robust features in Websocket, Local caching, Polls, Scheduled Messages, Pinned Message, and many more. So try it out now! ([Chat SDK v4](https://github.com/sendbird/sendbird-chat-sdk-javascript/))

<br />

## Table of contents

  1. [Introduction](#introduction)
  1. [Before getting started](#before-getting-started)
  1. [Getting started](#getting-started)
  1. [Sending your first message](#sending-your-first-message)
  1. [Appendix](#appendix)
  2. [Notice](#notice)
  3. [Changelogs](#changelogs)

<br />

## Introduction

Through Sendbird Chat SDK for Javascript, you can efficiently integrate real-time chat into your client app. On the client-side implementation, you can initialize, configure and build the chat with minimal effort. On the server-side, Sendbird ensures reliable infra-management services for your chat within the app. This **read.me** provides the Chat SDK’s structure, supplementary features, and the installation steps.

### How it works

It is simple to implement chat in your client app with the Chat SDK: a user logs in, sees a list of channels, selects or creates an [open channel](https://sendbird.com/docs/chat/v3/javascript/guides/open-channel#2-create-a-channel) or a [group channel](https://sendbird.com/docs/chat/v3/javascript/guides/group-channel#2-create-a-channel), and, through the use of the [channel event handlers](https://sendbird.com/docs/chat/v3/javascript/guides/event-handler), sends messages to the channel, while also receiving them from other users within the channel.

### More about Sendbird Chat SDK for JavaScript

Find out more about Sendbird Chat for JavaScript on [Chat SDK for JavaScript doc](https://sendbird.com/docs/chat/v3/javascript/getting-started/about-chat-sdk).

<br />

## Before getting started

This section shows you the prerequisites you need to check for using Sendbird Chat SDK for JavaScript. If you have any comments or questions regarding bugs and feature requests, visit [Sendbird community](https://community.sendbird.com).

### Supported browsers

| Browser | Supported versions |
| :---: | :--- |
| Internet Explorer | 10 or higher |
| Edge | 13 or higher |
| Chrome | 16 or higher |
| Firefox | 11 or higher |
| Safari | 7 or higher |
| Opera | 12.1 or higher |
| iOS Safari | 7 or higher |
| Android Browswer | 4.4 (Kitkat) or higher |

### More about additional features of Sendbird the the Chat SDK

Try building your Sendbird application with these two add-ons:

- [Sendbird UIKit for JavaScript](https://sendbird.com/docs/uikit/v1/javascript/getting-started/about-uikit): a development kit with a user interface that enables an easy and fast integration of standard chat features into new or existing client apps.
- [Sendbird SyncManager for JavaScript](https://sendbird.com/docs/syncmanager/v1/javascript/getting-started/about-syncmanager): the Chat SDK add-on that optimizes the user caching experience by interlinking the synchronization of the local data storage with the chat data in Sendbird server through an event-driven structure.

<br />

## Getting started

This section gives you information you need to get started with Sendbird Chat SDK for JavaScript.

### Try the sample app

The fastest way to test the Chat SDK is to build your chat app on top of our sample app. To create a project for the sample app, download the app from our GitHub repository. The link is down below.

- https://github.com/sendbird/Sendbird-JavaScript

You can also download the sample using a git command:

```bash
$ git clone https://github.com/sendbird/SendBird-JavaScript
```

> **Note**: Find out more about Sendbird SDK for JavaScript samples on https://sample.sendbird.com

### Different sample projects

For JavaScript, Sendbird supports a variety of sample projects. Their installation procedures are detailed as below:

#### Run the web sample projects

There are three web sample projects: [basic sample](https://github.com/sendbird/sendbird-javascript-samples/tree/master/javascript/javascript-basic), [live chat sample](https://github.com/sendbird/sendbird-javascript-samples/tree/master/javascript/javascript-live-chat), and [widget sample](https://github.com/sendbird/sendbird-javascript-samples/tree/master/javascript/javascript-widget). To run the sample projects, do the following to use `NodeJS` for your local server:

1. Download and install `NodeJS` if your system doesn't have it yet.
2. Open a terminal and move to the project path.
```bash
$ cd web-basic-sample
```
3. Install packages that are used in the sample project.
```bash
$ npm install
```
4. Run the sample project.
```bash
$ npm start
```

#### Run the React Native sample project

Our [React Native sample project](https://github.com/sendbird/SendBird-JavaScript/tree/master/react-native-redux-sample) is built on the [Redux](https://redux.js.org/) pattern of [React Native](https://reactnative.dev/). To run the sample, do the following:

1. Download and install [`NodeJS`](https://nodejs.org/en/) if your system doesn't have it yet.
2. Setup the [React Native environment](https://reactnative.dev/docs/environment-setup) in your system.
3. Open a terminal and enter the commands below in your project path.
```bash
$ cd react-native-redux-sample/ReactNativeWithSendBird
$ npm install
```
4. Run the sample app by entering the commands below.
```bash
$ react-native run-ios
$ react-native run-android
```

Before entering the two commands above, you should run the simulator from the [Android Studio](https://developer.android.com/studio/) in advance. The command for iOS works without further action.

### Here are the steps to install Chat SDK

Follow the simple steps below to build the Chat SDK into your client app.

#### Step 1: Create a Sendbird application from your dashboard

A Sendbird application comprises everything required in a chat service including users, message, and channels. To create an application:

1. Go to the [Sendbird Dashboard](https://dashboard.sendbird.com/auth/signup) and enter your email and password, and create a new account. You can also sign up with a Google account.
2. When prompted by the setup wizard, enter your organization information to manage Sendbird applications.
3. Lastly, when your dashboard home appears after completing setup, click **Create +** at the top-right corner.

Regardless of the platform, only one Sendbird application can be integrated per app; however, the application supports communication across allSendbird’s provided platforms without any additional setup. Sendbird currently supports iOS, Android, web, .NET, and Unity client apps.

> Note: All the data is limited to the scope of a single application, thus the users in different Sendbird applications are unable to chat with each other.

#### Step 2: Install the Chat SDK

If you’re familiar with using external libraries or SDKs, installing the Chat SDK is simple.You can install the Chat SDK with package manager `npm` or `yarn` by entering the command below on the command line.

- **Npm**

> Note: To use npm to install the Chat SDK, Node.js must be first installed on your system.

```bash
$ npm install sendbird (request to npm server)
```

Install via `Npm` and import like below in your `TypeScript` file.

```bash
import * as SendBird from "sendbird";
var sb = new SendBird({ appId: "APP_ID" });
// do something...
```

If you have trouble importing Sendbird, please check your `tsconfig.json` file and change the value of `allowSyntheticDefaultImports` to true in `compilerOptions`.

- **Yarn**

```bash
$ yarn add sendbird
```

Or download the latest Chat SDK for JavaScript from the following link if you do not want to use package manager

- https://github.com/sendbird/Sendbird-SDK-JavaScript

> **Note**: You should also add `axios` library into the `<script>` tag before the Sendbird library inclusion since v3.0.127. You can host the library or utilize the CDN as the library refers to it. The following serves as examples.

```javascript
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="/your-own-path-to-sendbird/Sendbird.min.js"></script>
```

<br />

## Sending your first message

Follow the step-by-step instructions below to authenticate and send your first message.

### Authentication

To use the features of the Chat SDK in your client app, a `sb` instance must be initiated in each client app before user authentication with Sendbird server. These instances communicate and interact with the server based on an authenticated user account, allowing for the client app to use the Chat SDK features.

### Step 1: Initialize the Chat SDK

You need to initialize a `sb` instance before authentication. Initialization binds the Chat SDK to Javascript’s context which allows the Chat SDK to respond to connection and state changes and also enables client apps to use the Chat SDK features.

To initialize a `Sendbird` instance, pass the `App_ID` of your Sendbird application in the dashboard as an argument to a parameter in the `new Sendbird()` method. As the `new SendBird()` can only be a single instance, call it only a single time across your Javascript client app. Typically, initialization is implemented in the user login screen.

> **Note**: It is recommended to initialize the Chat SDK at the top of your Javascript file.

```javascript
var sb = new SendBird({appId: APP_ID});
```

### Step 2: Connect to Sendbird server

After initialization by use of `new SendBird()`, your client app must always be connected to Sendbird server before calling any methods. If you attempt to call a method without connecting, an [`ERR_CONNECTION_REQUIRED (800101)`](https://sendbird.com/docs/chat/v3/android/guides/error-codes) error would return.

Connect a user to Sendbird server either through a unique user ID or in combination with an access token. Sendbird prefers the latter method, as it ensures privacy with the user. The former is useful during the developmental phase or if your service doesn't require additional security.

#### A. User ID

Connect a user to Sendbird server using their unique **user ID**. By default, Sendbird server can authenticate a user by a unique user ID. Upon request for a connection, the server queries the database to check for a match. Any untaken user ID is automatically registered as a new user to the Sendbird system, while an existing ID is allowed to log indirectly. The ID must be unique within a Sendbird application, such as a hashed email address or phone number in your service.

```javascript
sb.connect(USER_ID, function(user, error) {
    if (error) {
        return;
    }
});
```

#### B. A combination of user ID and access token ID

Sendbird prefers that you pass the APP ID through the use of a token, as it ensures privacy for the users. Create a user along with their access token, or issue an access token for an existing user. Once an access token is issued, a user is required to provide the access token in the `sb.connect()` method which is used for logging in.

1. Using the Chat Platform API, create a Sendbird user account with the information submitted when a user signs up your service.
2. Save the user ID along with the issued access token to your persistent storage which is securely managed.
3. When the user attempts to log in to the Sendbird application, load the user ID and access token from the storage, and then pass them to the `sb.connect()` method.
4. Periodically replacing the user's access token is recommended to protect the account.

```javascript
sb.connect(USER_ID, ACCESS_TOKEN, function(user, error) {});
```

#### - Tips for user account security

From **Settings** > **Application** > **Security** > **Access token permission** setting in your dashboard, you can prevent users without an access token from logging in to your Sendbird application or restrict their access to **read** and **write** messages.

For security reasons, you can also use a session token when a user logs in to Sendbird server instead of an access token. Go to the [Access token vs. Session token](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user-3-access-token-vs-session-token) section from the [Chat Platform API](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api) guide to learn more.

### Step 3: Create a new open channel

Create an [open channel](https://sendbird.com/docs/chat/v3/javascript/guides/open-channel#2-create-a-channel). Once created, all users in your Sendbird application can easily participate in the channel. You also can create a [group channel](https://sendbird.com/docs/chat/v3/javascript/guides/group-channel#2-create-a-channel) by [inviting users](https://sendbird.com/docs/chat/v3/javascript/guides/group-channel#2-invite-users-as-members) as new members to the channel.

> Note: All the methods in the following steps are asynchronous, excluding the `new SendBird()`. As a result, your client app must receive success callbacks from Sendbird server to proceed to the next step. A good way to do this is the nesting of methods: Go to [Step 4: Enter the channel](#step-4-enter-the-channel) to learn more about how you can nest the `openChannel.enter()` in the `OpenChannel.getChannel()` method.

```javascript
sb.OpenChannel.createChannel(function(openChannel, error) {
    if (error) {
        return;
    }
});
```

### Step 4: Enter the channel

Enter the channel to send and receive messages.

```javascript
sb.OpenChannel.getChannel(CHANNEL_URL, function(openChannel, error) {
    if (error) {
        return;
    }

    openChannel.enter(function(response, error) {
        if (error) {
            return;
        }
    })
});
```

### Step 5: Send a message to the channel

Finally, send a message to the channel. There are [three types](https://sendbird.com/docs/chat/v3/platform-api/guides/messages#-3-resource-representation): a user message, which is a plain text, a file message, which is a binary file, such as an image or PDF, and an admin message, which is a plain text sent through the [dashboard](https://dashboard.sendbird.com/auth/signin) or [Chat Platform API](https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-send-a-message).

```javascript
openChannel.sendUserMessage(MESSAGE, DATA, CUSTOM_TYPE, function(message, error) {
    if (error) {
        return;
    }
});
```

<br />

## Appendix

Sendbird wants customers to be confident that Chat SDK will be useful, work well, and fit within their needs. Thus, we have compiled a couple of optional guidelines. Take a few minutes to read and apply them at your convenience.

### XSS prevention

XSS (Cross-site scripting) is a type of computer security vulnerability. XSS helps attackers inject client-side scripts into web pages viewed by other users. Users can send any type of string data without restriction through Chat SDKs. Make sure that you check the safety of received data from other users before rendering it into your DOM.

> **Note**: For more about the XSS prevention, visit the [OWASP's XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) page.

### Use functions of Sendbird objects with Immutable-js

If you are using the [Immutable-js](https://immutable-js.github.io/immutable-js/) in your web app, instead of the `Immutable.Map()`, call the `Immutable.fromJS()` which converts deeply nested objects to an `Immutable Map`.
So you can call the functions of Sendbird objects because the `fromJS()` method returns internal objects. But if you use a `Map` function, you can't call any functions of a Sendbird object.

```javascript
var userIds = ['John', 'Harry'];

sb.GroupChannel.createChannelWithUserIds(userIds, false, NAME, COVER_URL, DATA, function(groupChannel, error) {
    if (error) {
        return;
    }

    var immutableObject = Immutable.fromJS(groupChannel);
    console.log(immutableObject);
});
```

### Parameter ordering in callbacks

In a callback, the `error` parameter is passed last in order by default. For example, the `connect()` method below returns parameters in **(user, error)** order.

```javascript
sb.connect(USER_ID, function(user, error) {});
```

You can configure your Sendbird application to change the order by calling the `sb.setErrorFirstCallback(true)`. Once **true** is set, all callbacks pass the error as the first parameter.

```javascript
sb.setErrorFirstCallback(true);
sb.connect(USER_ID, function(error, user) {});
```

The `sb.setErrorFirstCallback(false)` returns callbacks to their original parameter ordering, with errors last.

> **Note**: Go to the [Event handler](https://sendbird.com/docs/chat/v3/javascript/guides/event-handler) page to learn more about the usages of the Chat SDK's handlers and callbacks.

<br />

## Notice

### v.3.1.0 Release (Local Caching)

Local caching has been introduced to the Chat SDK in this v3.1.0 release. The newly embedded local caching functionalities can be enabled through an optional parameter `localCacheEnabled` in the `Sendbird` constructor, whose default is **false**. When local caching is turned off, the SDK is backward compatible with v3.0. This means it will work exactly the same as v3.0 and therefore is compatible with SyncManager. However, we strongly recommend you to use the Chat SDK with local caching instead of SyncManager for the following reasons:

- Sendbird Chat SDK with local caching supports new functionalities such as group channel collection, message collection, and message auto-resend.
- SyncManager will be deprecated eventually as the embedded local caching serves as the new and better version of it.

For further information, please see our [Docs](https://sendbird.com/docs/chat/v3/javascript/guides/local-caching).

Additionally, migration guide for clients currently using SyncManager will be available soon.

<br />

## Changelogs

## v3.1.33 (Aug 24, 2023)
> **Thank you everyone for using our SDK v3. This is our final release as we transition to our latest SDK v4 (first released in Apr 2022). Please reach out to our support if you have any questions.**
### Improvements
- Fixed a bug where called `ChangeLogAPI` infinitely

If you want to check the record of other versions, go to [Change Log](https://github.com/sendbird/Sendbird-SDK-JavaScript/blob/master/CHANGELOG.md).
