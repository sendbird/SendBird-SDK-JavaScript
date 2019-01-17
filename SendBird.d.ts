/**
 * Type Definitions for SendBird SDK v3.0.93
 * homepage: https://sendbird.com/
 * git: https://github.com/smilefam/SendBird-SDK-JavaScript
 */

export = SendBird;
export as namespace SendBird;

declare const SendBird: SendBirdStatic;

interface SendBirdStatic {
  version: number;
  new ({ appId }: { appId: string }): SendBird.SendBirdInstance;
  getInstance(): SendBird.SendBirdInstance;
}

declare namespace SendBird {
  interface SendBirdError {
    code: number;
    message: string;
  }

  type userCallback = (user: User, error: SendBirdError) => void;
  type pushSettingCallback = (response: string, error: SendBirdError) => void;

  type getFriendChangeLogs = {
    updatedUsers: Array<User>;
    deletedUserIds: Array<string>;
    hasMore: boolean;
    token: string;
  };
  type getFriendChangeLogsByTokenHandler = (data: getFriendChangeLogs, error: SendBirdError) => void;

  type groupChannelChangeLogs = {
    updatedChannels: Array<GroupChannel>;
    deletedChannelUrls: Array<string>;
    hasMore: boolean;
    token: string;
  };
  type getGroupChannelChangeLogsHandler = (data: groupChannelChangeLogs, error: SendBirdError) => void;

  interface DiscoveryObject {
    friendDiscoveryKey: string;
    friendName?: string;
  }
  interface SendBirdInstance {
    currentUser: User;
    User: UserStatic;
    Member: MemberStatic;
    OpenChannel: OpenChannelStatic;
    GroupChannel: GroupChannelStatic;
    UserMessage: UserMessageStatic;
    FileMessage: FileMessageStatic;
    AdminMessage: AdminMessageStatic;

    UserEventHandler: UserEventHandlerStatic;
    ChannelHandler: ChannelHandlerStatic;
    ConnectionHandler: ConnectionHandlerStatic;

    GroupChannelParams: GroupChannelParams;
    UserMessageParams: UserMessageParams;
    FileMessageParams: FileMessageParams;
    GroupChannelTotalUnreadMessageCountParams: GroupChannelTotalUnreadMessageCountParams;
    ScheduledUserMessageParams: ScheduledUserMessageParams;

    Options: Options;

    setErrorFirstCallback(errorFirstCallback: boolean): void;

    connect(userId: string, callback?: userCallback): void;
    connect(userId: string, apiHost: string, wsHost: string, callback?: userCallback): void;
    connect(userId: string, accessToken: string, callback?: userCallback): void;
    connect(userId: string, accessToken: string, apiHost: string, wsHost: string, callback?: userCallback): void;
    disconnect(callback?: commonCallback): void;
    reconnect(): boolean; // You can reinitate auto-reconnect manually.

    updateCurrentUserInfo(nickname: string, profileUrl: string, callback?: userCallback): void;
    updateCurrentUserInfoWithProfileImage(nickname: string, profileImageFile: File, callback?: userCallback): void;

    getCurrentUserId(): string; // DEPRECATED
    getApplicationId(): string;
    getConnectionState(): string;
    getLastConnectedAt(): number;

    addChannelHandler(id: string, handler: ChannelHandler): void;
    removeChannelHandler(id: string): void;
    removeAllChannelHandlers(): void;

    addConnectionHandler(id: string, handler: ConnectionHandler): void;
    removeConnectionHandler(id: string): void;
    removeAllConnectionHandlers(): void;

    addUserEventHandler(id: string, handler: UserEventHandler): void;
    removeUserEventHandler(id: string): void;
    removeAllUserEventHandler(): void;

    createUserListQuery(): UserListQuery; // DEPRECATED
    createUserListQuery(userIds: Array<string>): UserListQuery; // DEPRECATED
    createApplicationUserListQuery(): ApplicationUserListQuery;

    createBlockedUserListQuery(): BlockedUserListQuery;

    blockUser(userToBlock: User, callback?: userCallback): void;
    blockUserWithUserId(userToBlock: string, callback?: userCallback): void;

    unblockUser(blockedUser: User, callback?: commonCallback): void;
    unblockUserWithUserId(blockedUserId: string, callback?: commonCallback): void;

    setChannelInvitationPreference(isAutoAccept: boolean, callback: commonCallback): void;
    getChannelInvitationPreference(callback: commonCallback): void;

    getPendingGCMToken(): string;
    getPendingAPNSToken(): string;

    registerGCMPushTokenForCurrentUser(gcmRegToken: string, callback?: pushSettingCallback): void;
    unregisterGCMPushTokenForCurrentUser(gcmRegToken: string, callback?: commonCallback): void;
    unregisterGCMPushTokenAllForCurrentUser(callback?: commonCallback): void;

    registerAPNSPushTokenForCurrentUser(apnsRegToken: string, callback?: pushSettingCallback): void;
    unregisterAPNSPushTokenForCurrentUser(apnsRegToken: string, callback?: commonCallback): void;
    unregisterAPNSPushTokenAllForCurrentUser(callback?: commonCallback): void;

    unregisterPushTokenAllForCurrentUser(callback?: commonCallback): void; // This removes both All APNS/GCM tokens

    setPushTemplate(templateName: string, callback?: pushSettingCallback): void;
    getPushTemplate(callback?: pushSettingCallback): void;

    setPushTriggerOption(pushTriggerOption: 'all' | 'mention_only' | 'off', callback: commonCallback): void;
    getPushTriggerOption(callback: getPushTriggerOptionCallback): void;

    setDoNotDisturb(
      doNotDisturbOn: boolean,
      startHour: number,
      startMin: number,
      endHour: number,
      endMin: number,
      timezone: string,
      callback?: commonCallback
    ): void;
    getDoNotDisturb(callback: commonCallback): void;

    setSnoozePeriod(
      snoozeOn: boolean,
      startTs: number,
      endTs: number,
      callback?: commonCallback
    ): void;
    getSnoozePeriod(callback: commonCallback): void;

    // Background/Foreground Appstate for push notifications in React Native / Ionic
    setBackgroundState(): void;
    setForegroundState(): void;

    // State change should be disabled when image picker is loaded in Android.
    disableStateChange(): void;
    enableStateChange(): void;

    uploadFriendDiscoveries(discoveries: Array<DiscoveryObject>, callback: commonCallback): void;
    deleteFriendDiscovery(discoveryKey: string, callback: commonCallback): void;
    deleteFriendDiscoveries(discoveryKeys: Array<string>, callback: commonCallback): void;

    getFriendChangeLogsByToken(callback: getFriendChangeLogsByTokenHandler): void;
    getFriendChangeLogsByToken(token: string, callback: getFriendChangeLogsByTokenHandler): void;

    addFriends(userIds: Array<string>, callback: userListQueryCallback): void;
    deleteFriend(userId: string, callback: commonCallback): void;
    deleteFriends(userIds: Array<string>, callback: commonCallback): void;

    createFriendListQuery(): FriendListQuery;

    markAsReadAll(callback: commonCallback): void;
    markAsReadWithChannelUrls(channelUrls: Array<string>, callback: commonCallback): void;

    getGroupChannelCount(memberStateFilter: string, callback: commonCallback): void;

    getUnreadItemCount(keys: Array<string>, callback: commonCallback): void;
    getTotalUnreadMessageCount(groupChannelTotalUnreadMessageCountParams: GroupChannelTotalUnreadMessageCountParams,
                               callback: groupChannelCountCallback): void;
    getTotalUnreadMessageCount(callback: groupChannelCountCallback): void;
    getTotalUnreadMessageCount(channelCustomTypes: Array<string>, callback: groupChannelCountCallback): void;
    getTotalUnreadChannelCount(callback: groupChannelCountCallback): void;

    getSubscribedTotalUnreadMessageCount(): number;
    getSubscribedCustomTypeTotalUnreadMessageCount(): number;
    getSubscribedCustomTypeUnreadMessageCount(customType: string): number;

    getMyGroupChannelChangeLogsByToken(token: string, customTypes: Array<string>, callback:getGroupChannelChangeLogsHandler): void;
    getMyGroupChannelChangeLogsByTimestamp(ts: number, customTypes: Array<string>, callback:getGroupChannelChangeLogsHandler): void;
  }

  interface Options {
    useMemberAsMessageSender: boolean,
    typingIndicatorThrottle: number
  }

  interface FriendListQuery {
    hasMore: boolean;
    isLoading: boolean;
    limit: number;
    next(callback: userListQueryCallback): void;
  }

  interface UserEventHandlerStatic {
    new (): UserEventHandler;
  }
  interface UserEventHandler {
    onFriendsDiscovered(users: Array<User>): void;
  }

  interface ChannelHandlerStatic {
    new (): ChannelHandler;
  }
  interface ChannelHandler {
    onMessageReceived(channel: OpenChannel | GroupChannel, message: AdminMessage | UserMessage | FileMessage): void;
    onMessageUpdated(channel: OpenChannel | GroupChannel, message: AdminMessage | UserMessage | FileMessage): void;
    onMessageDeleted(channel: OpenChannel | GroupChannel, messageId: string): void;
    onReadReceiptUpdated(channel: GroupChannel): void;
    onTypingStatusUpdated(channel: GroupChannel): void;
    onUserJoined(channel: GroupChannel, user: User): void;
    onUserLeft(channel: GroupChannel, user: User): void;
    onUserEntered(channel: OpenChannel, user: User): void;
    onUserExited(channel: OpenChannel, user: User): void;
    onUserMuted(channel: OpenChannel | GroupChannel, user: User): void;
    onUserUnmuted(channel: OpenChannel | GroupChannel, user: User): void;
    onUserBanned(channel: OpenChannel | GroupChannel, user: User): void;
    onUserUnbanned(channel: OpenChannel | GroupChannel, user: User): void;
    onChannelFrozen(channel: OpenChannel | GroupChannel): void;
    onChannelUnfrozen(channel: OpenChannel | GroupChannel): void;
    onChannelChanged(channel: OpenChannel | GroupChannel): void;
    onChannelDeleted(channelUrl: string): void;
    onUserReceivedInvitation(channel: GroupChannel, inviter: User, invitees: Array<User>): void;
    onUserDeclinedInvitation(channel: GroupChannel, inviter: User, invitee: Member): void;
    onMetaDataCreated(channel: OpenChannel | GroupChannel, metaData: Object): void;
    onMetaDataUpdated(channel: OpenChannel | GroupChannel, metaData: Object): void;
    onMetaDataDeleted(channel: OpenChannel | GroupChannel, metaDataKeys: Array<string>): void;
    onMetaCountersCreated(channel: OpenChannel | GroupChannel, metaCounter: Object): void;
    onMetaCountersUpdated(channel: OpenChannel | GroupChannel, metaCounter: Object): void;
    onMetaCountersDeleted(channel: OpenChannel | GroupChannel, metaCounterKeys: Array<string>): void;
    onChannelHidden(channel: GroupChannel): void;
    onMentionReceived(channel: OpenChannel | GroupChannel, message: AdminMessage | UserMessage | FileMessage): void;
  }

  interface ConnectionHandlerStatic {
    new (): ConnectionHandler;
  }
  interface ConnectionHandler {
    onReconnectStarted(): void;
    onReconnectSucceeded(): void;
    onReconnectFailed(): void;
  }

  /**
   * Message
   */
  interface BaseMessageInstance {
    channelUrl: string;
    channelType: string;
    messageId: number;
    messageType: string;
    data: string;
    customType: string;
    metaArray: Object;
    mentionType: string;
    mentionedUsers: Array<User>;
    createdAt: number;
    updatedAt: number;

    isEqual(target: BaseMessageInstance): boolean;
    isIdentical(target: BaseMessageInstance): boolean;
    isOpenChannel(): boolean;
    isGroupChannel(): boolean;
    isUserMessage(): boolean;
    isFileMessage(): boolean;
    isAdminMessage(): boolean;
    serialize(): Object;
    getMetaArrayByKeys(keys: Array<string>): Object;
  }

  interface AdminMessage extends BaseMessageInstance {
    message: string;
    translations: Object;
  }
  interface AdminMessageStatic {
    buildFromSerializedData(serializedObject: Object): AdminMessage;
  }

  interface GroupChannelTotalUnreadMessageCountParams {
    new(): GroupChannelTotalUnreadMessageCountParams;
    channelCustomTypesFilter: Array<string>;
    superChannelFilter: 'all' | 'super' | 'nonsuper';
  }

  interface UserMessageParams {
    new(): UserMessageParams;
    message: string;
    data: string;
    customType: string;
    targetLanguages: Array<string>; // DEPRECATED
    translationTargetLanguages: Array<string>;
    mentionType: 'users' | 'channel';
    mentionedUserIds: Array<string>;
    mentionedUsers: Array<User>;
    metaArrayKeys: Array<string>;
    pushNotificationDeliveryOption: 'default' | 'suppress';
  }
  interface UserMessage extends BaseMessageInstance {
    message: string;
    sender: Sender;
    reqId: string;
    translations: Object;
  }
  interface UserMessageStatic {
    buildFromSerializedData(serializedObject: Object): UserMessage;
  }

  interface FileMessageParams {
    new(): FileMessageParams;
    file: File;
    fileUrl: string;
    fileName: string;
    fileSize: number;
    mimeType: string;
    data: string;
    customType: string;
    thumbnailSizes: Array<ThumbnailSize>;
    mentionType: 'users' | 'channel';
    mentionedUserIds: Array<string>;
    mentionedUsers: Array<User>;
    metaArrayKeys: Array<string>;
    pushNotificationDeliveryOption: 'default' | 'suppress';
  }
  interface FileMessage extends BaseMessageInstance {
    sender: Sender;
    reqId: string;
    url: string;
    name: string;
    size: number;
    type: string;
    thumbnails: Array<ThumbnailObject>;
  }
  interface FileMessageStatic {
    buildFromSerializedData(serializedObject: Object): FileMessage;
  }

  interface ThumbnailObject {
    url: string;
    height: number;
    width: number;
    real_height: number;
    real_width: number;
  }
  interface ThumbnailSize {
    maxWidth: number;
    maxHeight: number;
  }

  /**
   * User
   */
  interface User {
    userId: string;
    nickname: string;
    profileUrl: string;
    metaData: Object;
    connectionStatus: string;
    lastSeenAt: string;
    isActive: boolean;
    friendDiscoveryKey: string | null;
    friendName: string | null;

    getOriginalProfileUrl(): string;
    createMetaData(metaDataMap: Object, callback: commonCallback): void;
    updateMetaData(metaDataMap: Object, callback: commonCallback): void;
    updateMetaData(metaDataMap: Object, upsert: boolean, callback: commonCallback): void;
    deleteMetaData(metaDataKey: string, callback: commonCallback): void;
    deleteAllMetaData(callback: commonCallback): void;

    serialize(): Object;
  }
  interface UserStatic {
    buildFromSerializedData(serializedObject: Object): User;
  }

  interface Sender extends User {
    isBlockedByMe: boolean;
  }
  interface SenderStatic {
    buildFromSerializedData(serializedObject: Object): Sender;
  }

  interface Member extends User {
    state: 'invited' | 'joined';
    isBlockedByMe: boolean;
    isBlockingMe: boolean;
  }
  interface MemberStatic {
    buildFromSerializedData(serializedObject: Object): Member;
  }

  /**
   * Channel
   */
  type fileMessagesCallbackObject = {
    progress: (event: ProgressEvent, messageRequestId: string) => void;
    sent: (message: FileMessage, error: SendBirdError) => void;
    complete: (error: SendBirdError) => void;
  };
  type messageCallback = (message: UserMessage | FileMessage, error: SendBirdError) => void;
  type cancelUploadingFileMessageCallback = (isSuccess: boolean, error: SendBirdError) => void;
  type fileUploadprogressHandler = (event: ProgressEvent) => void;
  type messageChangeLogs = {
    updatedMessages: Array<UserMessage | FileMessage | AdminMessage>;
    deletedMessageIds: Array<string>;
    hasMore: boolean;
    token: string;
  };
  type getMessageChangeLogsHandler = (data: messageChangeLogs, error: SendBirdError) => void;
  type mutedInfo = {
    isMuted: boolean;
    startAt: number;
    endAt: number;
    remainingDuration: number;
    description: string;
  };
  type getMyMutedInfoHandler = (info: mutedInfo, error: SendBirdError) => void;
  interface BaseChannel {
    url: string;
    name: string;
    coverUrl: string;
    data: string;
    customType: string;
    isFrozen: boolean;
    isEphemeral: boolean;
    createdAt: number;

    isGroupChannel(): boolean;
    isOpenChannel(): boolean;
    serialize(): Object;

    getMessageChangeLogsByToken(callback: getMessageChangeLogsHandler): void;
    getMessageChangeLogsByToken(token: string, callback: getMessageChangeLogsHandler): void;
    getMessageChangeLogsByToken(token: string, includeMetaArray: boolean, callback: getMessageChangeLogsHandler): void;

    getMessageChangeLogsByTimestamp(ts: number, callback: getMessageChangeLogsHandler): void;
    getMessageChangeLogsByTimestamp(ts: number, includeMetaArray: boolean, callback: getMessageChangeLogsHandler): void;

    getMyMutedInfo(callback: getMyMutedInfoHandler): void;
    createOperatorListQuery(): OperatorListQuery;

    /** Message  */
    createMessageListQuery(): MessageListQuery /* DEPRECATED */;
    createPreviousMessageListQuery(): PreviousMessageListQuery;
    getNextMessagesByTimestamp(
      ts: number,
      isInclusive: boolean,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      callback: messageListCallback
    ): void;
    getNextMessagesByTimestamp(
      ts: number,
      isInclusive: boolean,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      callback: messageListCallback
    ): void;
    getNextMessagesByTimestamp(
      ts: number,
      isInclusive: boolean,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      includeMetaArray: boolean,
      callback: messageListCallback
    ): void;
    getPreviousMessagesByTimestamp(
      ts: number,
      isInclusive: boolean,
      prevResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      callback: messageListCallback
    ): void;
    getPreviousMessagesByTimestamp(
      ts: number,
      isInclusive: boolean,
      prevResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      callback: messageListCallback
    ): void;
    getPreviousMessagesByTimestamp(
      ts: number,
      isInclusive: boolean,
      prevResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      includeMetaArray: boolean,
      callback: messageListCallback
    ): void;
    getPreviousAndNextMessagesByTimestamp(
      ts: number,
      prevResultSize: number,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      callback: messageListCallback
    ): void;
    getPreviousAndNextMessagesByTimestamp(
      ts: number,
      prevResultSize: number,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      callback: messageListCallback
    ): void;
    getPreviousAndNextMessagesByTimestamp(
      ts: number,
      prevResultSize: number,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      includeMetaArray: boolean,
      callback: messageListCallback
    ): void;
    getNextMessagesByID(
      messageId: number,
      isInclusive: boolean,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      callback: messageListCallback
    ): void;
    getNextMessagesByID(
      messageId: number,
      isInclusive: boolean,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      callback: messageListCallback
    ): void;
    getNextMessagesByID(
      messageId: number,
      isInclusive: boolean,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      includeMetaArray: boolean,
      callback: messageListCallback
    ): void;
    getPreviousMessagesByID(
      messageId: number,
      isInclusive: boolean,
      prevResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      callback: messageListCallback
    ): void;
    getPreviousMessagesByID(
      messageId: number,
      isInclusive: boolean,
      prevResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      callback: messageListCallback
    ): void;
    getPreviousMessagesByID(
      messageId: number,
      isInclusive: boolean,
      prevResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      includeMetaArray: boolean,
      callback: messageListCallback
    ): void;
    getPreviousAndNextMessagesByID(
      messageId: number,
      prevResultSize: number,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      callback: messageListCallback
    ): void;
    getPreviousAndNextMessagesByID(
      messageId: number,
      prevResultSize: number,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      callback: messageListCallback
    ): void;
    getPreviousAndNextMessagesByID(
      messageId: number,
      prevResultSize: number,
      nextResultSize: number,
      shouldReverse: boolean,
      messageType: string,
      customType: string,
      senderUserIds: Array<string>,
      includeMetaArray: boolean,
      callback: messageListCallback
    ): void;

    /** FileMessage  */
    sendFileMessage(fileMessageParams: FileMessageParams, callback: messageCallback): FileMessage;
    sendFileMessage(file: File, callback: messageCallback): FileMessage;
    sendFileMessage(file: File, data: string, callback: messageCallback): FileMessage; // DEPRECATED
    sendFileMessage(file: File, data: string, customType: string, callback: messageCallback): FileMessage; // DEPRECATED
    sendFileMessage(
      file: File,
      data: string,
      customType: string,
      thumbnailSizes: Array<ThumbnailSize>,
      callback: messageCallback
    ): FileMessage; // DEPRECATED
    sendFileMessage(
      file: File,
      name: string,
      type: string,
      size: number,
      data: string,
      callback: messageCallback
    ): FileMessage; // DEPRECATED
    sendFileMessage(
      file: File,
      name: string,
      type: string,
      size: number,
      data: string,
      customType: string,
      callback: messageCallback
    ): FileMessage; // DEPRECATED
    sendFileMessage(
      file: File,
      name: string,
      type: string,
      size: number,
      data: string,
      customType: string,
      thumbnailSizes: Array<ThumbnailSize>,
      callback: messageCallback
    ): FileMessage;

    sendFileMessage(
      fileMessageParams: FileMessageParams,
      progressHandler: fileUploadprogressHandler,
      callback: messageCallback
    ): FileMessage;
    sendFileMessage(file: File, progressHandler: fileUploadprogressHandler, callback: messageCallback): FileMessage;
    sendFileMessage(
      file: File,
      data: string,
      progressHandler: fileUploadprogressHandler,
      callback: messageCallback
    ): FileMessage; // DEPRECATED
    sendFileMessage(
      file: File,
      data: string,
      customType: string,
      progressHandler: fileUploadprogressHandler,
      callback: messageCallback
    ): FileMessage; // DEPRECATED
    sendFileMessage(
      file: File,
      data: string,
      customType: string,
      thumbnailSizes: Array<ThumbnailSize>,
      progressHandler: fileUploadprogressHandler,
      callback: messageCallback
    ): FileMessage; // DEPRECATED
    sendFileMessage(
      file: File,
      name: string,
      type: string,
      size: number,
      data: string,
      progressHandler: fileUploadprogressHandler,
      callback: messageCallback
    ): FileMessage; // DEPRECATED
    sendFileMessage(
      file: File,
      name: string,
      type: string,
      size: number,
      data: string,
      customType: string,
      progressHandler: fileUploadprogressHandler,
      callback: messageCallback
    ): FileMessage; // DEPRECATED
    sendFileMessage(
      file: File,
      name: string,
      type: string,
      size: number,
      data: string,
      customType: string,
      thumbnailSizes: Array<ThumbnailSize>,
      progressHandler: fileUploadprogressHandler,
      callback: messageCallback
    ): FileMessage;

    sendFileMessage(file: string, callback: messageCallback): FileMessage;
    sendFileMessage(file: string, data: string, callback: messageCallback): FileMessage; // DEPRECATED
    sendFileMessage(file: string, data: string, customType: string, callback: messageCallback): FileMessage; // DEPRECATED
    sendFileMessage(
      file: string,
      name: string,
      type: string,
      size: number,
      data: string,
      callback: messageCallback
    ): FileMessage; // DEPRECATED
    sendFileMessage(
      file: string,
      name: string,
      type: string,
      size: number,
      data: string,
      customType: string,
      callback: messageCallback
    ): FileMessage;

    sendFileMessage(file: string, progressHandler: fileUploadprogressHandler, callback: messageCallback): FileMessage; // DEPRECATED
    sendFileMessage(
      file: string,
      data: string,
      progressHandler: fileUploadprogressHandler,
      callback: messageCallback
    ): FileMessage; // DEPRECATED
    sendFileMessage(
      file: string,
      data: string,
      customType: string,
      progressHandler: fileUploadprogressHandler,
      callback: messageCallback
    ): FileMessage; // DEPRECATED
    sendFileMessage(
      file: string,
      name: string,
      type: string,
      size: number,
      data: string,
      progressHandler: fileUploadprogressHandler,
      callback: messageCallback
    ): FileMessage; // DEPRECATED
    sendFileMessage(
      file: string,
      name: string,
      type: string,
      size: number,
      data: string,
      customType: string,
      progressHandler: fileUploadprogressHandler,
      callback: messageCallback
    ): FileMessage; // DEPRECATED

    sendFileMessages(fileMessageParamsList: Array<FileMessageParams>, callbackObject: fileMessagesCallbackObject): Array<FileMessage>;

    /** UserMessage  */
    sendUserMessage(userMessageParams: UserMessageParams, callback: messageCallback): UserMessage;
    sendUserMessage(message: string, callback: messageCallback): UserMessage;
    sendUserMessage(message: string, data: string, callback: messageCallback): UserMessage; // DEPRECATED
    sendUserMessage(message: string, data: string, customType: string, callback: messageCallback): UserMessage; // DEPRECATED
    sendUserMessage(
      message: string,
      data: string,
      customType: string,
      translationTargetLanguages: Array<string>,
      callback: messageCallback
    ): UserMessage;

    /** Edit Message  */
    updateFileMessage(messageId: number, data: string, customType: string, callback: messageCallback): void;
    updateFileMessage(messageId: number, fileMessageParams: FileMessageParams, callback:messageCallback): void;
    updateUserMessage(
      messageId: number,
      message: string,
      data: string,
      customType: string,
      callback: messageCallback
    ): void;
    updateUserMessage(messageId: number, userMessageParams: UserMessageParams, callback:messageCallback): void;
    deleteMessage(message: FileMessage | UserMessage, callback: commonCallback): void;
    cancelUploadingFileMessage(messageReqId: string, callback: cancelUploadingFileMessageCallback): boolean;

    /** MetaData */
    createMetaData(metaDataMap: Object, callback: commonCallback): void;
    updateMetaData(metaDataMap: Object, callback: commonCallback): void;
    updateMetaData(metaDataMap: Object, upsert: boolean, callback: commonCallback): void;
    getMetaData(keys: Array<string>, callback: commonCallback): void;
    getAllMetaData(callback: commonCallback): void;
    deleteMetaData(key: string, callback: commonCallback): void;
    deleteAllMetaData(callback: commonCallback): void;

    /** MetaCounter */
    createMetaCounters(metaCounterMap: Object, callback: commonCallback): void;
    updateMetaCounters(metaCounterMap: Object, callback: commonCallback): void;
    updateMetaCounters(metaCounterMap: Object, upsert: boolean, callback: commonCallback): void;
    increaseMetaCounters(metaCounterMap: Object, callback: commonCallback): void;
    decreaseMetaCounters(metaCounterMap: Object, callback: commonCallback): void;
    getMetaCounters(keys: Array<string>, callback: commonCallback): void;
    getAllMetaCounters(callback: commonCallback): void;
    deleteMetaCounter(key: string, callback: commonCallback): void;
    deleteAllMetaCounters(callback: commonCallback): void;

    /** MessageMetaArray */
    createMessageMetaArrayKeys(message: UserMessage | FileMessage | AdminMessage, keys: Array<string>, callback:commonCallback): void;
    deleteMessageMetaArrayKeys(message: UserMessage | FileMessage | AdminMessage, keys: Array<string>, callback:commonCallback): void;
    addMessageMetaArrayValues(message: UserMessage | FileMessage | AdminMessage, map: Object, callback:commonCallback): void;
    removeMessageMetaArrayValues(message: UserMessage | FileMessage | AdminMessage, map: Object, callback:commonCallback): void;
  }

  type messageListCallback = (
    messageList: Array<UserMessage | FileMessage | AdminMessage>,
    error: SendBirdError
  ) => void;
  interface MessageListQuery { // DEPRECATED
    next(messageTimestamp: number, limit: number, reverse: boolean, callback: messageListCallback): void;
    prev(messageTimestamp: number, limit: number, reverse: boolean, callback: messageListCallback): void;
    load(
      messageTimestamp: number,
      prevLimit: number,
      nextLimit: number,
      reverse: boolean,
      callback: messageListCallback
    ): void;
  }

  interface PreviousMessageListQuery {
    hasMore: boolean;
    isLoading: boolean;
    limit: number;
    reverse: boolean;
    messageTypeFilter: 0 | 1 | 2 | 3; // 0: ALL, 1: USER, 2: FILE, 3: ADMIN
    customTypeFilter: string;
    senderUserIdsFilter: Array<string>;
    includeMetaArray: boolean;

    load(limit: number, reverse: boolean, callback: messageListCallback): void;
    load(limit: number, reverse: boolean, messageType: number, callback: messageListCallback): void;
    load(callback: messageListCallback): void;
  }

  /**
   * OpenChannel
   */
  type commonCallback = (response: Object, error: SendBirdError) => void;
  type openChannelCallback = (openChannel: OpenChannel, error: SendBirdError) => void;
  interface OpenChannel extends BaseChannel {
    participantCount: number;
    operators: Array<User>;

    refresh(callback: openChannelCallback): void;
    delete(callback: openChannelCallback): void;
    enter(callback: openChannelCallback): void;
    exit(callback: openChannelCallback): void;

    createParticipantListQuery(): ParticipantListQuery;
    createMutedUserListQuery(): MutedUserListQuery;
    createBannedUserListQuery(): BannedUserListQuery;

    updateChannel(name: string, coverUrl: string, data: string, callback: openChannelCallback): void;
    updateChannel(
      name: string,
      coverUrl: string,
      data: string,
      operatorUserIds: Array<string> | string,
      callback: openChannelCallback
    ): void; // DEPRECATED
    updateChannel(
      name: string,
      coverUrl: string,
      data: string,
      operatorUserIds: Array<string> | string,
      customType: string,
      callback: openChannelCallback
    ): void;

    updateChannelWithOperatorUserIds(
      name: string,
      coverUrl: string,
      data: string,
      operatorUserIds: Array<string> | string,
      callback: openChannelCallback
    ): void;
    updateChannelWithOperatorUserIds(
      name: string,
      coverUrl: string,
      data: string,
      operatorUserIds: Array<string> | string,
      customType: string,
      callback: openChannelCallback
    ): void;

    banUser(user: User, callback: commonCallback): void;
    banUser(user: User, seconds: number, callback: commonCallback): void;
    banUserWithUserId(userId: string, callback: commonCallback): void;
    banUserWithUserId(userId: string, seconds: number, callback: commonCallback): void;
    unbanUser(user: User, callback: commonCallback): void;
    unbanUserWithUserId(userId: string, callback: commonCallback): void;

    muteUser(user: User, callback: commonCallback): void;
    muteUser(user: User, seconds: number, description: string, callback: commonCallback): void;
    muteUserWithUserId(userId: string, callback: commonCallback): void;
    muteUserWithUserId(userId: string, seconds: number, description: string, callback: commonCallback): void;
    unmuteUser(user: User, callback: commonCallback): void;
    unmuteUserWithUserId(userId: string, callback: commonCallback): void;

    isOperator(user: User): boolean;
    isOperatorWithUserId(userId: string): boolean;
  }

  type userListQueryCallback = (userList: Array<User>, error: SendBirdError) => void;
  interface UserListQuery {  // DEPRECATED
    limit: number;
    hasNext: boolean;
    isLoading: boolean;
    metaDataKey: string;
    metaDataValues: Array<string>;

    next(callback: userListQueryCallback): void;
  }

  interface ApplicationUserListQuery {
    limit: number;
    hasNext: boolean;
    isLoading: boolean;
    userIdsFilter: Array<string>;
    metaDataKeyFilter: string;
    metaDataValuesFilter: Array<string>;

    next(callback: userListQueryCallback): void;
  }

  interface BlockedUserListQuery {
    limit: number;
    hasNext: boolean;
    isLoading: boolean;
    userIdsFilter: Array<string>;

    next(callback: userListQueryCallback): void;
  }

  interface ParticipantListQuery {
    limit: number;
    hasNext: boolean;
    isLoading: boolean;

    next(callback: userListQueryCallback): void;
  }

  interface MutedUserListQuery {
    limit: number;
    hasNext: boolean;
    isLoading: boolean;

    next(callback: userListQueryCallback): void;
  }

  interface BannedUserListQuery {
    limit: number;
    hasNext: boolean;
    isLoading: boolean;

    next(callback: userListQueryCallback): void;
  }

  interface OperatorListQuery {
    limit: number;
    hasNext: boolean;
    isLoading: boolean;
    next(callback: userListQueryCallback): void;
  }

  interface OpenChannelStatic {
    buildFromSerializedData(serializedObject: Object): OpenChannel;

    getChannel(channelUrl: string, callback: openChannelCallback): void;
    getChannelWithoutCache(channelUrl: string, callback: openChannelCallback): void;

    createChannel(callback: openChannelCallback): void;
    createChannel(name: string, coverUrlOrImageFile: string | File, data: string, callback: openChannelCallback): void; // DEPRECATED
    createChannel(
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      operatorUserIds: Array<string> | string,
      callback: openChannelCallback
    ): void; // DEPRECATED
    createChannel(
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      operatorUserIds: Array<string> | string,
      customType: string,
      callback: openChannelCallback
    ): void;

    createChannelWithOperatorUserIds(
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      operatorUserIds: Array<string> | string,
      callback: openChannelCallback
    ): void;
    createChannelWithOperatorUserIds(
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      operatorUserIds: Array<string> | string,
      customType: string,
      callback: openChannelCallback
    ): void;

    createOpenChannelListQuery(): OpenChannelListQuery;
  }

  type openChannelListQueryCallback = (openChannelList: Array<OpenChannel>, error: SendBirdError) => void;
  interface OpenChannelListQuery {
    limit: number;
    hasNext: boolean;
    nameKeyword: string;
    urlKeyword: string;
    customType: string;

    next(callback: openChannelListQueryCallback): void;
  }

  /**
   * ScheduledUserMessage
   */
  interface ScheduledUserMessage {
    scheduledId: number;
    scheduledDateTimeString: string;
    scheduledTimezone: string;
    status: 'scheduled' | 'sent' | 'canceled' | 'failed';
    createdAt: number;
    updatedAt: number;
    channelUrl: string;
    sender: User;
    message: string;
    customType: string;
    data: string;
    metaArray: Object;
    mentionType: 'users' | 'channel';
    mentionedUsers: Array<User>;
    pushNotificationDeliveryOption: 'default' | 'suppress';
    translationTargetLanguages: Array<string>;
    errorMessage: string;
    errorCode: number;

    isGroupChannel(): boolean;
    isOpenChannel(): boolean;

  }

  type scheduledUserMessageCallback = (scheduledUserMessage: ScheduledUserMessage, error: SendBirdError) => void;

  /**
   * GroupChannel
   */
  interface GroupChannelParams {
    new(): GroupChannelParams;
    isDistinct: boolean;
    isSuper: boolean;
    isPublic: boolean;
    isEphemeral: boolean;
    channelUrl: string;
    name: string;
    data: string;
    customType: string;
    coverUrl: string;
    coverImage: File;
    operators: Array<User>;
    operatorUserIds: Array<string>;
    accessCode: string;

    addUser(user: User): void;
    addUsers(user: Array<User>): void;
    addUserId(userId: string): void;
    addUserIds(userId: Array<string>): void;
  }

  interface ScheduledUserMessageParams {
    new(): ScheduledUserMessageParams;
    message: string;
    data: string;
    customType: string;
    translationTargetLanguages: Array<string>;
    metaArrayKeys: Array<string>;
    mentionType: 'users' | 'channel';
    mentionedUserIds: Array<string>;
    mentionedUsers: Array<User>;
    pushNotificationDeliveryOption: 'default' | 'suppress';
    year: number;
    month: number;
    day: number;
    hour: number;
    min: number;
    timezone: string;
    scheduledDateTimeString: string;

    setSchedule(year: number, month: number, day: number, hour: number, min: number, timezone: string): void;

  }
  interface DistinctGroupChannelResponse {
    channel: GroupChannel;
    isCreated: boolean;
  }

  type groupChannelCallback = (groupChannel: GroupChannel, error: SendBirdError) => void;
  type distinctGroupChannelCallback = (response: DistinctGroupChannelResponse, error: SendBirdError) => void;
  type getPushPreferenceCallback = (isPushOn: boolean, error: SendBirdError) => void;
  type getPushTriggerOptionCallback = (pushTriggerOption: 'all' | 'mention_only' | 'off' | 'default', error: SendBirdError) => void;
  interface GroupChannel extends BaseChannel {
    isHidden: boolean;
    isDistinct: boolean;
    isSuper: boolean;
    isPublic: boolean;
    isPushEnabled: boolean; // DEPRECASED
    myPushTriggerOption: 'default' | 'all' | 'mention_only' | 'off';
    myCountPreference: string;
    lastMessage: UserMessage | FileMessage | AdminMessage;
    unreadMessageCount: number;
    unreadMentionCount: number;
    members: Array<Member>;
    memberCount: number;
    joinedMemberCount: number;
    myMemberState: 'none' | 'joined' | 'invited';
    myRole: 'operator' | 'none';
    myMutedState: 'muted' | 'unmuted';
    inviter: User;
    invitedAt: number;
    isAccessCodeRequired: boolean;
    hiddenState: 'unhidden' | 'hidden_allow_auto_unhide' | 'hidden_prevent_auto_unhide';

    isEqual(target: GroupChannel): boolean;
    isIdentical(target: GroupChannel): boolean;
    refresh(callback: groupChannelCallback): void;

    updateChannel(groupChannelParams: GroupChannelParams, callback: groupChannelCallback): void;
    updateChannel(name: string, coverUrlOrImageFile: string | File, data: string, callback: groupChannelCallback): void;
    updateChannel(
      isDistinct: boolean,
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      callback: groupChannelCallback
    ): void; // DEPRECATED
    updateChannel(
      isDistinct: boolean,
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      customType: string,
      callback: groupChannelCallback
    ): void;

    resetMyHistory(callback?: commonCallback): void;

    invite(users: Array<User>, callback: groupChannelCallback): void;
    inviteWithUserIds(userIds: Array<string>, callback: groupChannelCallback): void;
    acceptInvitation(callback: groupChannelCallback): void;
    acceptInvitation(accessCode: string, callback: groupChannelCallback): void;
    declineInvitation(callback: commonCallback): void;

    join(callback: groupChannelCallback): void;
    join(accessCode: string, callback: groupChannelCallback): void;
    leave(callback: commonCallback): void;

    hide(callback: commonCallback): void;
    hide(hidePreviousMessages: boolean, callback: commonCallback): void;
    hide(hidePreviousMessages: boolean, allowAutoUnhide: boolean, callback: commonCallback): void;
    unhide(callback: commonCallback): void;

    markAsRead(): void;
    getReadReceipt(message: UserMessage | FileMessage | AdminMessage): number;
    getReadStatus(includeAllMembers?: boolean): Object;
    getUnreadMembers(message: UserMessage | FileMessage, includeAllMembers?: boolean): Array<Member>;
    getReadMembers(message: UserMessage | FileMessage, includeAllMembers?: boolean): Array<Member>;

    startTyping(): void;
    endTyping(): void;
    isTyping(): boolean;
    getTypingMembers(): Array<Member>;

    setPushPreference(pushOn: boolean, callback: commonCallback): void; // DEPRECATED
    getPushPreference(callback: getPushPreferenceCallback): void; // DEPRECATED
    setMyPushTriggerOption(pushTriggerOption: 'all' | 'mention_only' | 'off' | 'default', callback: getPushTriggerOptionCallback): void;
    getMyPushTriggerOption(callback: getPushTriggerOptionCallback): void;
    setMyCountPreference(preference: 'all' | 'unread_message_count_only' | 'unread_mention_count_only' | 'off', callback: commonCallback): void;

    createMemberListQuery(): GroupChannelMemberListQuery;
    createBannedUserListQuery(): BannedUserListQuery;

    banUser(user: User, seconds: number, description: string, callback: commonCallback): void;
    banUserWithUserId(userId: string, seconds: number, description: string, callback: commonCallback): void;
    unbanUser(User: User, callback: commonCallback): void;
    unbanUserWithUserId(userId: string, callback: commonCallback): void;

    muteUser(user: User, callback: commonCallback): void;
    muteUser(user: User, seconds: number, description: string, callback: commonCallback): void;
    muteUserWithUserId(userId: string, callback: commonCallback): void;
    muteUserWithUserId(userId: string, seconds: number, description: string, callback: commonCallback): void;
    unmuteUser(user: User, callback: commonCallback): void;
    unmuteUserWithUserId(userId: string, callback: commonCallback): void;

    freeze(callback: commonCallback): void;
    unfreeze(callback: commonCallback): void;

    registerScheduledUserMessage(scheduledUserMessageParams: ScheduledUserMessageParams, callback: scheduledUserMessageCallback) : void;
  }

  type groupChannelCountCallback = (count: number, error: SendBirdError) => void;
  interface GroupChannelStatic {
    buildFromSerializedData(serializedObject: Object): GroupChannel;

    createMyGroupChannelListQuery(): GroupChannelListQuery;
    createPublicGroupChannelListQuery(): PublicGroupChannelListQuery;

    getUnreadItemCount(keys: Array<string>, callback: commonCallback): void; // DEPRECATED
    getTotalUnreadMessageCount(groupChannelTotalUnreadMessageCountParams: GroupChannelTotalUnreadMessageCountParams,
                               callback: groupChannelCountCallback): void; // DEPRECATED
    getTotalUnreadMessageCount(callback: groupChannelCountCallback): void; // DEPRECATED
    getTotalUnreadMessageCount(channelCustomTypes: Array<string>, callback: groupChannelCountCallback): void; // DEPRECATED
    getTotalUnreadChannelCount(callback: groupChannelCountCallback): void; // DEPRECATED

    createChannel(groupChannelParams: GroupChannelParams, callback: groupChannelCallback): void;
    createChannel(users: Array<User>, callback: groupChannelCallback): void;
    createChannel(users: Array<User>, isDistinct: boolean, callback: groupChannelCallback): void; // DEPRECATED
    createChannel(users: Array<User>, isDistinct: boolean, customType: string, callback: groupChannelCallback): void; // DEPRECATED
    createChannel(
      users: Array<User>,
      isDistinct: boolean,
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      callback: groupChannelCallback
    ): void; // DEPRECATED
    createChannel(
      users: Array<User>,
      isDistinct: boolean,
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      customType: string,
      callback: groupChannelCallback
    ): void;
    createDistinctChannelIfNotExist(groupChannelParams: GroupChannelParams, callback: distinctGroupChannelCallback): void;

    createChannelWithUserIds(userIds: Array<string>, callback: groupChannelCallback): void;
    createChannelWithUserIds(userIds: Array<string>, isDistinct: boolean, callback: groupChannelCallback): void; // DEPRECATED
    createChannelWithUserIds(
      userIds: Array<string>,
      isDistinct: boolean,
      customType: string,
      callback: groupChannelCallback
    ): void; // DEPRECATED
    createChannelWithUserIds(
      userIds: Array<string>,
      isDistinct: boolean,
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      callback: groupChannelCallback
    ): void; // DEPRECATED
    createChannelWithUserIds(
      userIds: Array<string>,
      isDistinct: boolean,
      name: string,
      coverUrlOrImageFile: string | File,
      data: string,
      customType: string,
      callback: groupChannelCallback
    ): void;

    getChannel(channelUrl: string, callback: groupChannelCallback): void;
    getChannelWithoutCache(channelUrl: string, callback: groupChannelCallback): void;

    markAsReadAll(callback: commonCallback): void; // DEPRECATED
  }

  type groupChannelMemberListQueryCallback = (groupChannelList: Array<Member>, error: SendBirdError) => void;
  interface GroupChannelMemberListQuery {
    limit: number;
    hasNext: boolean;
    isLoading: boolean;
    mutedMemberFilter: 'all' | 'muted' | 'unmuted';
    operatorFilter: 'all' | 'operator' | 'nonoperator'; // DEPRECATED
    memberStateFilter: 'all' | 'joined_only' | 'invited_only' | 'invited_by_friend' | 'invited_by_non_friend';
    nicknameStartsWithFilter: string;

    next(callback: groupChannelMemberListQueryCallback): void;
  }

  type groupChannelListQueryCallback = (groupChannelList: Array<GroupChannel>, error: SendBirdError) => void;
  interface GroupChannelListQuery {
    limit: number;
    hasNext: boolean;
    isLoading: boolean;
    includeEmpty: boolean;
    order: 'latest_last_message' | 'chronological' | 'channel_name_alphabetical' | 'metadata_value_alphabetical';
    userIdsFilter: Array<string>; // DEPRECATED
    userIdsFilterExactMatch: boolean; // DEPRECATED
    queryType: 'AND' | 'OR'; // DEPRECATED
    userIdsExactFilter: Array<string>;
    userIdsIncludeFilter: Array<string>;
    userIdsIncludeFilterQueryType: 'AND' | 'OR';
    nicknameContainsFilter: string;
    channelNameContainsFilter: string;
    customTypeFilter: string; // DEPRECATED
    customTypesFilter: Array<string>;
    customTypeStartsWithFilter: string;
    channelUrlsFilter: Array<string>;
    superChannelFilter: 'all' | 'super' | 'nonsuper';
    publicChannelFilter: 'all' | 'public' | 'private';
    metadataOrderKeyFilter: string;
    hiddenChannelFilter: 'unhidden_only' | 'hidden_only' | 'hidden_allow_auto_unhide' | 'hidden_prevent_auto_unhide'

    next(callback: groupChannelListQueryCallback): void;
  }

  interface PublicGroupChannelListQuery {
    limit: number;
    hasNext: boolean;
    isLoading: boolean;
    includeEmpty: boolean;
    order: 'chronological' | 'channel_name_alphabetical' | 'metadata_value_alphabetical';
    channelNameContainsFilter: string;
    channelUrlsFilter: Array<string>;
    customTypesFilter: Array<string>;
    customTypeStartsWithFilter: string;
    superChannelFilter: 'all' | 'super' | 'nonsuper';
    membershipFilter: 'all' | 'joined';
    metadataOrderKeyFilter: string;
    next(callback: groupChannelListQueryCallback): void;
  }
}
