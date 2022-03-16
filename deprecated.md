# Deprecated classes, methods, properties


## v3.1.9

### Classes

| Old class | New Class |
| --------- | --------- |
| ConnectionManager | N/A |


## v3.0.159

### Methods

| Old class | Old property | New class | New property |
| --------- | ------------ | --------- | ------------ |
| MessageRetrievalParams | includeParentMessageText: boolean | MessageRetrievalParams | includeParentMessageInfo: boolean |
| PreviousMessageListQuery | includeParentMessageText: boolean | PreviousMessageListQuery | includeParentMessageInfo: boolean |
| PreviousMessageListQuery | includeReplies: boolean | PreviousMessageListQuery | replyType: ReplyType |
| MessageListParams | includeParentMessageText: boolean | MessageListParams | includeParentMessageInfo: boolean |
| MessageListParams | includeReplies: boolean | MessageListParams | replyType: ReplyType |
| ThreadedMessageListParams | includeParentMessageText: boolean | ThreadedMessageListParams | includeParentMessageInfo: boolean |
| MessageChangeLogsParams | includeParentMessageText: boolean | MessageChangeLogsParams | includeParentMessageInfo: boolean |
| MessageChangeLogsParams | includeReplies: boolean | MessageChangeLogsParams | replyType: ReplyType |


## v3.0.156

### Methods

| Old class | Old method | New class | New method |
| --------- | ---------- | --------- | ---------- |
| GroupChannel | markAsRead(): void | GroupChannel | markAsRead(callback: VoidCallback): Promise&lt;void&gt; |


## v3.0.143

### Methods

| Old class | Old method | New class | New method |
| --------- | ---------- | --------- | ---------- |
| GroupChannel | markAsDelivered(): void | SendBird | markAsDelivered(channelUrl: String): void |


## v3.0.142

### Properties

| Old class | Old property | New class | New property |
| --------- | ------------ | --------- | ------------ |
| UserMessage | sendingStatus: string | BaseMessage | sendingStatus: string |
| FileMessage | sendingStatus: string | BaseMessage | sendingStatus: string |
| AdminMessage | N/A | BaseMessage | sendingStatus: string |
| PreviousMessageListQuery | customTypeFilter: string | PreviousMessageListQuery | customTypesFilter: string[] |
| MessageListParams | customType: string | MessageListParams | customTypes: string[] |
| ThreadedMessageListParams | customType: string | ThreadedMessageListParams | customTypes: string[] |


## v3.0.134

### Methods

| Old class | Old method | New class | New method |
| --------- | ---------- | --------- | ---------- |
| GroupChannel | getTypingMembers(): Member[] | GroupChannel | getTypingUsers(): Member[] |


## v3.0.129

### Properties

| Old class | Old property | New class | New property |
| --------- | ------------ | --------- | ------------ |
| PreviousMessageListQuery | includeReaction: boolean | PreviousMessageListQuery | includeReactions: boolean |
| MessageChangeLogsParams | includeReaction: boolean | MessageChangeLogsParams | includeReactions: boolean |
| MessageListParams | includeReaction: boolean | MessageListParams | includeReactions: boolean |
| ThreadedMessageListParams | includeReaction: boolean | ThreadedMessageListParams | includeReactions: boolean |


## v3.0.127

### Methods

| Old class | Old method | New class | New method |
| --------- | ---------- | --------- | ---------- |
| GroupChannel | getReadReceipt(message: UserMessage &#124; FileMessage): number | GroupChannel | getUnreadMemberCount(message: UserMessage &#124; FileMessage): number |
| GroupChannel | getDeliveryReceipt(message: UserMessage &#124; FileMessage): number | GroupChannel | getUndeliveredMemberCount(message: UserMessage &#124; FileMessage): number |


## v3.0.125

### Methods

| Old class | Old method | New class | New method |
| --------- | ---------- | --------- | ---------- |
| SendBird | getMyGroupChannelChangeLogsByToken(token: string, customTypes: string[]): object | SendBird | getMyGroupChannelChangeLogsByToken(token: string, params: GroupChannelChangeLogsParams): object |
| SendBird | getMyGroupChannelChangeLogsByToken(token: string, customTypes: string[], includeEmpty: boolean): object | SendBird | getMyGroupChannelChangeLogsByToken(token: string, params: GroupChannelChangeLogsParams): object |
| SendBird | getMyGroupChannelChangeLogsByTimestamp(timestamp: number, customTypes: string[]): object | SendBird | getMyGroupChannelChangeLogsByTimestamp(timestmap: number, params: GroupChannelChangeLogsParams): object |
| SendBird | getMyGroupChannelChangeLogsByTimestamp(timestamp: number, customTypes: string[], includeEmpty: boolean): object | SendBird | getMyGroupChannelChangeLogsByTimestamp(timestmap: number, params: GroupChannelChangeLogsParams): object |


## v3.0.123

### Methods

| Old class | Old method | New class | New method |
| --------- | ---------- | --------- | ---------- |
| BaseChannel | getMessageChangeLogsByTimestamp(timestamp: number): object | BaseChannel | getMessageChangeLogsSinceTimestamp(timestamp: number, params: MessageChangeLogsParams): object |
| BaseChannel | getMessageChangeLogsByTimestamp(timestamp: number, includeMetaArray: boolean): object | BaseChannel | getMessageChangeLogsSinceTimestamp(timestamp: number, params: MessageChangeLogsParams): object |
| BaseChannel | getMessageChangeLogsByTimestamp(timestamp: number, includeMetaArray: boolean, includeReactions: boolean): object | BaseChannel | getMessageChangeLogsSinceTimestamp(timestamp: number, params: MessageChangeLogsParams): object |
| BaseChannel | getMessageChangeLogsByToken(): object | BaseChannel | getMessageChangeLogsSinceToken(token: string, params: MessageChangeLogsParams): object |
| BaseChannel | getMessageChangeLogsByToken(token: string): object | BaseChannel | getMessageChangeLogsSinceToken(token: string, params: MessageChangeLogsParams): object |
| BaseChannel | getMessageChangeLogsByToken(token: string, includeMetaArray: boolean): object | BaseChannel | getMessageChangeLogsSinceToken(token: string, params: MessageChangeLogsParams): object |
| BaseChannel | getMessageChangeLogsByToken(token: string, includeMetaArray: boolean, includeReactions: boolean): object | BaseChannel | getMessageChangeLogsSinceToken(token: string, params: MessageChangeLogsParams): object |
| BaseChannel | getPreviousMessagesByTimestamp(timestamp: number, isInclusive: boolean, prevResultSize: number, shouldReverse: boolean, messageType: string, customType: string): BaseMessage[] | BaseChannel | getMessagesByTimestamp(timestamp: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getPreviousMessagesByTimestamp(timestamp: number, isInclusive: boolean, prevResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[]): BaseMessage[] | BaseChannel | getMessagesByTimestamp(timestamp: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getPreviousMessagesByTimestamp(timestamp: number, isInclusive: boolean, prevResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[], includeMetaArray: boolean): BaseMessage[] | BaseChannel | getMessagesByTimestamp(timestamp: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getPreviousMessagesByTimestamp(timestamp: number, isInclusive: boolean, prevResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[], includeMetaArray: boolean, includeReactions: boolean): BaseMessage[] | BaseChannel | getMessagesByTimestamp(timestamp: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getNextMessagesByTimestamp(timestamp: number, isInclusive: boolean, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string): BaseMessage[] | BaseChannel | getMessagesByTimestamp(timestamp: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getNextMessagesByTimestamp(timestamp: number, isInclusive: boolean, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[]): BaseMessage[] | BaseChannel | getMessagesByTimestamp(timestamp: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getNextMessagesByTimestamp(timestamp: number, isInclusive: boolean, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[], includeMetaArray: boolean): BaseMessage[] | BaseChannel | getMessagesByTimestamp(timestamp: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getNextMessagesByTimestamp(timestamp: number, isInclusive: boolean, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[], includeMetaArray: boolean, includeReactions: boolean): BaseMessage[] | BaseChannel | getMessagesByTimestamp(timestamp: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getPreviousAndNextMessagesByTimestamp(timestamp: number, isInclusive: boolean, prevResultSize: number, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string): BaseMessage[] | BaseChannel | getMessagesByTimestamp(timestamp: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getPreviousAndNextMessagesByTimestamp(timestamp: number, isInclusive: boolean, prevResultSize: number, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[]): BaseMessage[] | BaseChannel | getMessagesByTimestamp(timestamp: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getPreviousAndNextMessagesByTimestamp(timestamp: number, isInclusive: boolean, prevResultSize: number, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[], includeMetaArray: boolean): BaseMessage[] | BaseChannel | getMessagesByTimestamp(timestamp: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getPreviousAndNextMessagesByTimestamp(timestamp: number, isInclusive: boolean, prevResultSize: number, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[], includeMetaArray: boolean, includeReactions: boolean): BaseMessage[] | BaseChannel | getMessagesByTimestamp(timestamp: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getPreviousMessagesByID(messageId: number, isInclusive: boolean, prevResultSize: number, shouldReverse: boolean, messageType: string, customType: string): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getPreviousMessagesByID(messageId: number, isInclusive: boolean, prevResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[]): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getPreviousMessagesByID(messageId: number, isInclusive: boolean, prevResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[], includeMetaArray: boolean): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getPreviousMessagesByID(messageId: number, isInclusive: boolean, prevResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[], includeMetaArray: boolean, includeReactions: boolean): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getNextMessagesByID(messageId: number, isInclusive: boolean, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getNextMessagesByID(messageId: number, isInclusive: boolean, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[]): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getNextMessagesByID(messageId: number, isInclusive: boolean, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[], includeMetaArray: boolean): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getNextMessagesByID(messageId: number, isInclusive: boolean, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[], includeMetaArray: boolean, includeReactions: boolean): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getPreviousAndNextMessagesByID(messageId: number, isInclusive: boolean, prevResultSize: number, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getPreviousAndNextMessagesByID(messageId: number, isInclusive: boolean, prevResultSize: number, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[]): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getPreviousAndNextMessagesByID(messageId: number, isInclusive: boolean, prevResultSize: number, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[], includeMetaArray: boolean): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getPreviousAndNextMessagesByID(messageId: number, isInclusive: boolean, prevResultSize: number, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[], includeMetaArray: boolean, includeReactions: boolean): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getPreviousMessagesByID(messageId: number, isInclusive: boolean, prevResultSize: number, shouldReverse: boolean, messageType: string, customType: string): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getPreviousMessagesByID(messageId: number, isInclusive: boolean, prevResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[]): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getPreviousMessagesByID(messageId: number, isInclusive: boolean, prevResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[], includeMetaArray: boolean): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getPreviousMessagesByID(messageId: number, isInclusive: boolean, prevResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[], includeMetaArray: boolean, includeReactions: boolean): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getNextMessagesByID(messageId: number, isInclusive: boolean, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getNextMessagesByID(messageId: number, isInclusive: boolean, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[]): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getNextMessagesByID(messageId: number, isInclusive: boolean, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[], includeMetaArray: boolean): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getNextMessagesByID(messageId: number, isInclusive: boolean, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[], includeMetaArray: boolean, includeReactions: boolean): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getPreviousAndNextMessagesByID(messageId: number, isInclusive: boolean, prevResultSize: number, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getPreviousAndNextMessagesByID(messageId: number, isInclusive: boolean, prevResultSize: number, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[]): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getPreviousAndNextMessagesByID(messageId: number, isInclusive: boolean, prevResultSize: number, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[], includeMetaArray: boolean): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |
| BaseChannel | getPreviousAndNextMessagesByID(messageId: number, isInclusive: boolean, prevResultSize: number, nextResultSize: number, shouldReverse: boolean, messageType: string, customType: string, senderUserIds: string[], includeMetaArray: boolean, includeReactions: boolean): BaseMessage[] | BaseChannel | getMessagesByMessageId(messageId: number, params: MessageListParams): BaseMessage[] |


## v3.0.122

### Properties

| Old class | Old property | New class | New property |
| --------- | ------------ | --------- | ------------ |
| BaseMessageParams | metaArrayKeys: string[] | BaseMessageParams | metaArrays: MessageMetaArray[] |


## v3.0.119

### Properties

| Old class | Old property | New class | New property |
| --------- | ------------ | --------- | ------------ |
| UserMessage | requestState: string | UserMessage | sendingStatus: string |
| FileMessage | requestState: string | FileMessage | sendingStatus: string |


### Classes

| Old class | New class |
| --------- | --------- |
| MessageRequestState | MessageSendingStatus |


## v3.0.109

### Methods

| Old class | Old method | New class | New method/property |
| --------- | ---------- | --------- | ------------------- |
| SendBird | getCurrentUserId(): string | SendBird | currentUser: User |


## v3.0.105

### Methods

| Old class | Old method | New class | New method |
| --------- | ---------- | --------- | ---------- |
| BaseChannel | addMessageMetaArrayValues(message: BaseMessage, metaArrays: object<string, string[]>): BaseMessage | BaseChannel | addMessageMetaArrayValues(message: BaseMessage, metaArrays: MessageMetaArray[]): BaseMessage |
| BaseChannel | removeMessageMetaArrayValues(message: BaseMessage, metaArrays: object<string, string[]>): BaseMessage | BaseChannel | removeMessageMetaArrayValues(message: BaseMessage, metaArrays: MessageMetaArray[]): BaseMessage |


## v3.0.93

### Methods

| Old class | Old method | New class | New method |
| --------- | ---------- | --------- | ---------- |
| GroupChannel | getPushPreference(): boolean | GroupChannel | getMyPushTriggerOption(): boolean |
| GroupChannel | setPushPreference(enable: boolean): object | GroupChannel | setMyPushTriggerOption(pushTriggerOption: boolean): boolean |

### Properties

| Old class | Old property | New class | New property |
| --------- | ------------ | --------- | ------------ |
| GroupChannel | isPushEnabled: boolean | GroupChannel | myPushTriggerOption: string |


## v3.0.86

### Classes

| Old class | New class |
| --------- | --------- |
| UserListQuery | ApplicationUserListQuery |

### Methods

| Old class | Old method | New class | New method |
| --------- | ---------- | --------- | ---------- |
| SendBird | createUserListQuery(): UserListQuery | SendBird | createApplicationUserListQuery(): ApplicationUserListQuery |
| SendBird | createUserListQuery(userIds: string[]): UserListQuery | SendBird | createApplicationUserListQuery(): ApplicationUserListQuery |


## v3.0.84

### Properties

| Old class | Old property | New class | New property |
| --------- | ------------ | --------- | ------------ |
| UserMessageParams | targetLanguages: string[] | UserMessageParams | translationTargetLanguages: string[] |


## v3.0.80

### Methods

| Old class | Old method | New class | New method |
| --------- | ---------- | --------- | ---------- |
| GroupChannel | getChannelCount(memberStateFilter: string): number | SendBird | getGroupChannelCount(memberStateFilter: string): number |
| GroupChannel | getUnreadItemCount(keys: string[]): number | SendBird | getUnreadItemCount(keys: string[]): number |
| GroupChannel | getTotalUnreadMessageCount(): number | SendBird | getTotalUnreadMessageCount(): number |
| GroupChannel | getTotalUnreadMessageCount(channelCustomTypes: string[]): number | SendBird | getTotalUnreadMessageCount(channelCustomTypesFilter: string[]): number |
| GroupChannel | getTotalUnreadMessageCount(params: GroupChannelTotalUnreadMessageCountParams): number | SendBird | getTotalUnreadMessageCount(params: GroupChannelTotalUnreadMessageCountParams): number |
| GroupChannel | getTotalUnreadChannelCount(): number | SendBird | getTotalUnreadChannelCount(): number |


## v3.0.50

### Methods

| Old class | Old method | New class | New method |
| --------- | ---------- | --------- | ---------- |
| GroupChannel | markAsReadAll(): void | SendBird | markAsReadAll(): void |


## v3.0.49

### Properties

| Old class | Old property | New class | New property |
| --------- | ------------ | --------- | ------------ |
| GroupChannelListQuery | customTypeFilter: string | GroupChannelListQuery | customTypesFilter: string[] |


## v3.0.36

### Classes

| Old class | New class |
| --------- | --------- |
| MessageListQuery | PreviousMessageListQuery |


## v3.0.27

### Methods

| Old class | Old method | New class | New method |
| --------- | ---------- | --------- | ---------- |
| N/A | N/A | SendBird | setErrorFirstCallback(errorFirstInCallback: boolean) |
