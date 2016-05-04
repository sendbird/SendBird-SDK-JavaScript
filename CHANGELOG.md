Changelog
=========

## v2.4.7

### update
 * disconnect bug fix


## v2.4.6

### update
 * improved stability


## v2.4.5  
  
### update  
 * `channel info`: add max_length_message in channel object.  
   
### add
 * `onChannelFreezeReceived`: the function is called when a freeze message has been received.  
 * `onBanReceived`: the function is called when a ban message has been received.  
  
### delete  
 * `onKickReceived`: the function is called when a kick message has been received.  


## v2.2.2  
  
### update  
 * `debug message`: show console message when set to true to `setDebugMessage` function.  

### add
 * `onKickReceived`: the function is called when a kick message has been received.  
 

## v2.2.1  
  
### update  
 * `inviteMessaging`: call this function both using 2 or 3 parameters.  
 * `last_message`: return json message object include sent message user info.  

### add
 * `registerGCMToken`: add register token function for push notification in react-native or ionic.  
 * `registerAPNSToken`: add register token function for push notification in react-native or ionic.  
  

## v2.2.0  
  
### update  
 * `inviteMessaging`: call this function when if not joined channel.

### add
 * `last_message_ts`: add `last_message_ts` and update `last_message` to show only message string in data response of all messaging channel info.  
 

## v2.1.8  
  
### add  
 * `getConnectionState`: returns ws connection status.
 

## v2.1.7  
  
### add  
 * `typeEnd`: add typeEnd function
 

## v2.1.6  
  
### update  
 * `last_message`: events.onMessagingChannelUpdateReceived field   
  
 
## v2.1.5  
  
### add  
 * `isMessaging`: check messaging channel  
   
  
## v2.1.4  
  
### add  
 * `isMessagingChannel`: check current channel type  
 * `isGroupMessagingChannel`: check current channel type    
  
### deprecated  
 * `isGroupMessaging`: check current channel type  
  

## v2.1.3  
   
### add  

 * `deleteMessage`: delete message   
 * `version`: return current JavaScript SDK version   
   

## v2.1.2   

### add  

 * `getChannelInfo`: return current channel info   
 * `getUserInfo`: return login user info   
  
### delete  

 * `commandSeparate`: Split message type and message text    

