// Type definitions for SendBird 3.0.x
// Project: https://sendbird.com/

interface SendBirdFactory {
  version: number; // SendBird SDK version

  new(option: Object): SendBird_Instance;
}


/**
 * Interface for the SendBird Main
 */
interface SendBird_Instance {
  connect(userId: string, callback?: Function): void;
  connect(userId: string, apiHost: string, wsHost: string, callback?: Function): void;
  connect(userId: string, accessToken: string, callback?: Function): void;
  connect(userId: string, accessToken: string, apiHost: string, wsHost: string, callback?: Function): void;
  disconnect(callback?: Function): void;
  // You can reinitate auto-reconnect manually.
  reconnect(): boolean;

  getConnectionState(): string;
  getApplicationId(): string;

  updateCurrentUserInfo(nickname: string, profileImage: string, callback?: Function): void;
  updateCurrentUserInfo(nickname: string, profileImage: File, callback?: Function): void;

  // Push token
  registerGCMPushTokenForCurrentUser(gcmRegToken: string, callback?: Function): void;
  unregisterGCMPushTokenForCurrentUser(gcmRegToken: string, callback?: Function): void;
  unregisterGCMPushTokenAllForCurrentUser(callback?: Function): void;

  registerAPNSPushTokenForCurrentUser(apnsRegToken: string, callback?: Function): void;
  unregisterAPNSPushTokenForCurrentUser(apnsRegToken: string, callback?: Function): void;
  unregisterAPNSPushTokenAllForCurrentUser(callback: Function): void;

  unregisterPushTokenAllForCurrentUser(callback: Function): void; // This removes both All APNS/GCM tokens

  getPendingGCMToken(): string;
  getPendingAPNSToken(): string;

  setDoNotDisturb(doNotDisturbOn: boolean, startHour: number, startMin: number, endHour: number, endMin: number, timezone: string, callback?: Function): void;
  getDoNotDisturb(callback: Function): void;

  setPushTemplate(templateName: string, callback?: Function): void;
  getPushTemplate(callback?: Function): void;

  // Block / Unblock
  blockUser(userToBlock: User, callback?: Function): void;
  blockUserWithUserId(userToBlock: string, callback?: Function): void;

  unblockUser(blockedUser: User, callback?: Function): void;
  unblockUserWithUserId(blockedUserId: string, callback?: Function): void;

  // Channel Handler
  ChannelHandler: ChannelHandlerFactory;

  addChannelHandler(id: string, handler: ChannelHandler_Instance): void;
  removeChannelHandler(id: string): void;
  removeAllChannelHandlers(): void;

  // Connection Handler
  ConnectionHandler(): void;

  addConnectionHandler(id: string, handler: ConnectionHandler): void;
  removeConnectionHandler(id: string): void;
  removeAllConnectionHandlers(): void;

  createUserListQuery(): UserListQuery;
  createUserListQuery(userIds: Array<string>): UserListQuery;

  createBlockedUserListQuery(): UserListQuery;

  // Background/Foreground Appstate for push notifications in React Native / Ionic
  setBackgroundState(): void;
  setForegroundState(): void;

  // State change should be disabled when image picker is loaded in Android.
  disableStateChange(): void;
  enableStateChange(): void;

  currentUser: User;
  GroupChannel: GroupChannel;
  OpenChannel: OpenChannel;
  UserMessage: UserMessage;
}

interface ConnectionHandler {
  onReconnectStarted(): void;
  onReconnectSucceeded(): void;
  onReconnectFailed(): void;
}


/**
 * User
 */
interface User {
  nickname: string;
  profileUrl: string;
  userId: string;
  connectionStatus: string;
  lastSeenAt: string;
}

interface UserListQuery {
  hasNext: boolean;
  limit: number;
  isLoading: boolean;

  next(callback?: Function): void;
}


/**
 *  Message
 */
interface BaseMessage {
  isGroupChannel(): boolean;
  isOpenChannel(): boolean;

  isUserMessage(): boolean;
  isAdminMessage(): boolean;
  isFileMessage(): boolean;

  channelUrl: string;
  messageId: number;
  createdAt: number;
  updatedAt: number;
  channelType: string;
  messageType: string;
  customType: string;
}

interface AdminMessage extends BaseMessage {
  message: string;
  data: string;
}

interface UserMessage extends BaseMessage {
  message: string;
  data: string;
  sender: User;
}

interface FileMessage extends BaseMessage {
  message: string;
  sender: User;

  url: string;
  name: string;
  size: number;
  type: string;
  data: string;
  thumbnails : [Object];
}

interface ThumbnailSize {
  maxWidth: number;
  maxHeight: number;
}

interface MessageListQuery {
  next(messageTimestamp: number, limit: number, reverse: boolean, callback: Function): void;
  prev(messageTimestamp: number, limit: number, reverse: boolean, callback: Function): void;
  load(messageTimestamp: number, prevLimit: number, nextLimit: number, reverse: boolean, callback: Function): void;
}

interface PreviousMessageListQuery {
  hasMore: boolean;
  load(limit: number, reverse: boolean, callback: Function): void;
  load(limit: number, reverse: boolean, messageType: string, callback: Function): void;
}


/**
 *  Channel
 */
interface BaseChannel {
  isGroupChannel: boolean;
  isOpenChannel: boolean;

  url: string;
  name: string;
  coverUrl: string;
  createdAt: number;
  data: string;
  customType: string;

  createPreviousMessageListQuery() : PreviousMessageListQuery;
  createMessageListQuery(): MessageListQuery;

  /* SendMessage */
  sendFileMessage(file: any, callback: Function): FileMessage;
  sendFileMessage(file: any, progressHandler: Function, callback: Function): FileMessage;
  sendFileMessage(file: any, data: string, callback: Function): FileMessage;
  sendFileMessage(file: any, data: string, progressHandler: Function, callback: Function): FileMessage;
  sendFileMessage(file: any, data: string, customType: string, callback: Function): FileMessage;
  sendFileMessage(file: any, data: string, customType: string, progressHandler: Function, callback: Function): FileMessage;
  sendFileMessage(file: any, data: string, customType: string, thumbnailSizes: [ThumbnailSize], callback: Function): FileMessage;
  sendFileMessage(file: any, data: string, customType: string, thumbnailSizes: [ThumbnailSize], progressHandler: Function, callback: Function): FileMessage;
  sendFileMessage(file: any, name: string, type: string, size: number, data: string, callback: Function): FileMessage;
  sendFileMessage(file: any, name: string, type: string, size: number, data: string, progressHandler: Function, callback: Function): FileMessage;
  sendFileMessage(file: any, name: string, type: string, size: number, data: string, customType: string, callback: Function): FileMessage;
  sendFileMessage(file: any, name: string, type: string, size: number, data: string, customType: string, progressHandler: Function, callback: Function): FileMessage;
  sendFileMessage(file: any, name: string, type: string, size: number, data: string, customType: string, thumbnailSizes: [ThumbnailSize], callback: Function): FileMessage;
  sendFileMessage(file: any, name: string, type: string, size: number, data: string, customType: string, thumbnailSizes: [ThumbnailSize], progressHandler: Function, callback: Function): FileMessage;

  sendUserMessage(message: string, callback: Function): UserMessage;
  sendUserMessage(message: string, data: string, callback: Function): UserMessage;
  sendUserMessage(message: string, data: string, customType: string, callback: Function): UserMessage;
  sendUserMessage(message: string, data: string, customType: string, targetLanguages: [string], callback: Function): UserMessage;

  /* UpdateMessage */
  updateUserMessage(messageId: number, message: string, data: string, customType: string, callback: Function): void;
  updateFileMessage(messageId: number, data: string, customType: string, callback: Function): void;

  /* Cancel File Upload */
  cancelUploadingFileMessage(messageReqId: string, callback: Function): boolean;

  /* MetaCounter */
  createMetaCounters(metaCounterMap: Object, callback: Function): void;
  updateMetaCounters(metaCounterMap: Object, upsert: boolean, callback: Function): void;
  increaseMetaCounters(metaCounterMap: Object, callback: Function): void;
  decreaseMetaCounters(metaCounterMap: Object, callback: Function): void;
  getMetaCounters(keys: Object, callback: Function): void;
  getAllMetaCounters(callback: Function): void;
  deleteMetaCounter(key: string, callback: Function): void;
  deleteAllMetaCounters(callback: Function): void;

  /* MetaData */
  createMetaData(metaDataMap: Object, callback: Function): void;
  updateMetaData(metaDataMap: Object, upsert: boolean, callback: Function): void;
  getMetaData(keys: Object, callback: Function): void;
  getAllMetaData(callback: Function): void;
  deleteMetaData(key: string, callback: Function): void;
  deleteAllMetaData(callback: Function): void;

  deleteMessage(message: FileMessage|UserMessage, callback: Function): void;

  /* GetMessages */  
  getNextMessagesByTimestamp(ts: number, isInclusive: boolean, nextResultSize: number, shouldReverse:boolean, messageType: string, customType: string, callback: Function): void;
  getPreviousMessagesByTimestamp(ts: number, isInclusive: boolean, prevtResultSize: number, shouldReverse:boolean, messageType: string, customType: string, callback: Function): void;
  getPreviousAndNextMessagesByTimestamp(ts: number, prevtResultSize: number, nextResultSize: number, shouldReverse:boolean, messageType: string, customType: string, callback: Function): void;
  getNextMessagesByID(messageId: number, isInclusive: boolean, nextResultSize: number, shouldReverse:boolean, messageType: string, customType: string, callback: Function): void;
  getPreviousMessagesByID(messageId: number, isInclusive: boolean, prevtResultSize: number, shouldReverse:boolean, messageType: string, customType: string, callback: Function): void;
  getPreviousAndNextMessagesByID(messageId: number, prevtResultSize: number, nextResultSize: number, shouldReverse:boolean, messageType: string, customType: string, callback: Function): void;

}

interface ChannelHandlerFactory {
  new(): ChannelHandler_Instance;
}

interface ChannelHandler_Instance {
  onMessageReceived(channel: GroupChannel|OpenChannel, message: AdminMessage|UserMessage): void;
  onMessageDeleted(channel: GroupChannel, messageId: number): void;
  onReadReceiptUpdated(channel: GroupChannel): void;
  onTypingStatusUpdated(channel: GroupChannel): void;
  onTypingStatusUpdated(channel: GroupChannel): void;
  onUserJoined(channel: GroupChannel, user: User): void;
  onUserLeft(channel: GroupChannel, user: User): void;
  onUserEntered(channel: OpenChannel, user: User): void;
  onUserExited(channel: OpenChannel, user: User): void;
  onUserMuted(channel: OpenChannel, user: User): void;
  onUserUnmuted(channel: OpenChannel, user: User): void;
  onUserBanned(channel: OpenChannel, user: User): void;
  onUserUnbanned(channel: OpenChannel, user: User): void;
  onChannelFrozen(channel: OpenChannel): void;
  onChannelUnfrozen(channel: OpenChannel): void;
  onChannelChanged(channel: OpenChannel|GroupChannel): void;
  onChannelDeleted(channelUrl: string): void;
}


/**
 *  Open Channel
 */
interface OpenChannel extends BaseChannel {

  createChannel(callback: Function): void;
  createChannel(name: string, coverUrl: string, data: any, callback: Function): void;
  createChannel(name: string, coverUrl: string, data: any, operatorUserIds: any, callback: Function): void;
  createChannel(name: string, coverUrl: string, data: any, operatorUserIds: any, customType: Function, callback: Function): void;

  enter(callback: Function): void;
  exit(callback: Function): void;

  getChannel(channelUrl: string, callback: Function): void;

  refresh(): void;

  createParticipantListQuery(): UserListQuery;
  createMutedUserListQuery(): UserListQuery;
  createBannedUserListQuery(): UserListQuery;

  banUser(user: User, seconds: number, callback: Function): void;
  banUserWithUserId(userId: string, seconds: number, callback: Function): void;

  unbanUser(user: User, callback: Function): void;
  unbanUserWithUserId(userId: string, callback: Function): void;

  muteUser(user: User, callback: Function): void;
  muteUserWithUserId(userId: string, callback: Function): void;

  unmuteUser(user: User, callback: Function): void;
  unmuteUserWithUserId(userId: string, callback: Function): void;

  isOperator(user: User): boolean;
  isOperatorWithUserId(userId: string): boolean;

  createOpenChannelListQuery(): OpenChannelListQuery;
}

interface OpenChannelListQuery {
  limit: number;
  hasNext: boolean;
  next(callback: Function): void;
}

interface OpenChannelParticipantListQuery {
  limit: number;
  hasNext: boolean;
  mutedOnly: boolean;
  next(callback: Function): void;
}


/**
 *  Group Channel
 */
interface GroupChannelListQuery {
  limit: number;
  includeEmpty: boolean;
  order: string;
  hasNext: boolean;
  next(callback: Function): void;
}

interface GroupChannel extends BaseChannel {
  createChannel(users: [User], isDistinct: boolean, callback: Function): void;
  createChannel(users: [User], isDistinct: boolean, name: string, coverUrl: string, data: any, callback: Function): void;
  createChannelWithUserIds(userIds: [string], isDistinct: boolean, name: string, coverUrl: string, data: any, callback: Function): void;
  createChannelWithUserIds(userIds: [string], isDistinct: boolean, name: string, coverUrl: string, data: any, customType: string, callback: Function): void;
  createChannelWithUserIds(userIds: [string], isDistinct: boolean, name: string, coverImageFile: Object, data: any, callback: Function): void;
  createChannelWithUserIds(userIds: [string], isDistinct: boolean, name: string, coverImageFile: Object, data: any, customType: string, callback: Function): void;
  
  getChannel(channelUrl: string, callback: Function): void;
  
  markAsRead(): void;
  markAsReadAll(callback: Function): void;

  refresh(callback: Function): void;

  invite(users: [User], callback: Function): void;
  inviteWithUserIds(userIds: [string], callback: Function): void;

  hide(callback: Function): void;
  leave(callback: Function): void;

  getReadReceipt(message: UserMessage): number;
  updateReadReceipt(userId: string, timestamp: number): void;

  startTyping(): void;
  endTyping(): void;
  isTyping(): boolean;
  getTypingMembers(): [number, User];
  getTotalUnreadMessageCount(callback: Function): void;
  getTotalUnreadChannelCount(callback: Function): void;

  isDistinct: boolean;
  unreadMessageCount: number;
  members: [number, User];
  lastMessage: BaseMessage;
  memberCount: number;

  createMyGroupChannelListQuery(): GroupChannelListQuery;

  setPushPreference(pushOn: boolean, callback: Function): void;
  getPushPreference(callback: Function): void;

  getReadStatus(): Object;
}

declare var SendBird: SendBirdFactory;
