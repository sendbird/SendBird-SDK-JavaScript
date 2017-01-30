SendBird-SDK-JavaScript
===========

[SendBird](https://sendbird.com) provides the chat API and SDK for your app enabling real-time communication among your users.  


# Getting Started  

[Bower](http://bower.io) package for [SendBird.com](https://sendbird.com) JavaScript SDK  

      bower install sendbird


[npm](https://www.npmjs.com/package/sendbird) module for [SendBird.com](https://sendbird.com) JavaScript SDK  

      npm install sendbird


[download](https://github.com/smilefam/SendBird-SDK-JavaScript) for [SendBird.com](https://sendbird.com) JavaScript SDK  


# [Sample](https://github.com/smilefam/SendBird-JavaScript)  

 * [Basic Sample](https://sample.sendbird.com) using [Sendbird SDK](https://github.com/smilefam/SendBird-SDK-JavaScript). [download](https://github.com/smilefam/SendBird-JavaScript/tree/master/basic-sample)    
  

# [Documentation](https://docs.sendbird.com/javascript)


## Upgrading to v3.0.19
  If you want to check the record of other version, go to [Change Log](https://github.com/smilefam/SendBird-SDK-JavaScript/blob/master/CHANGELOG.md).  
  * connect()/disconnect() doesn't clear out connection/channel handlers anymore.
    Instead you should use removeAllConnectionHandlers() and removeAllChannelHandlers().
  * Fixed a bug in removing ios push tokens.
  * Now reconnect() method has been added which you can use when you want to manually trigger reconnect logic when network condition gets better.

  
## [Change Log](https://github.com/smilefam/SendBird-SDK-JavaScript/blob/master/CHANGELOG.md)    


## License
[SendBird License](https://github.com/smilefam/SendBird-SDK-JavaScript/blob/master/LICENSE.md)  


