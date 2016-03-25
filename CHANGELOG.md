Changelog
=========


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

