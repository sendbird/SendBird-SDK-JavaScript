/**
 * Type Definitions for SendBird SDK v3.0.42
 * homepage: https://sendbird.com/
 * git: https://github.com/smilefam/SendBird-SDK-JavaScript
 */

declare const SendBird: SendBirdStatic;
declare module 'SendBird' {
  export = SendBird;
}

type userCallback = (user: User, error: Object) => void;
type pushSettingCallback = (response: string, error: Object) => void;

interface SendBirdStatic {
  version: number;
  new({'appId': string}): SendBirdInstance;
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

  ChannelHandler: ChannelHandlerStatic;
  ConnectionHandler: ConnectionHandlerStatic;

  connect(userId: string, callback?: userCallback): void;
  connect(userId: string, apiHost: string, wsHost: string, callback?: userCallback): void;
  connect(userId: string, accessToken: string, callback?: userCallback): void;
  connect(userId: string, accessToken: string, apiHost: string, wsHost: string, callback?: userCallback): void;
  disconnect(callback?: commonCallback): void;
  reconnect(): boolean; // You can reinitate auto-reconnect manually.

  updateCurrentUserInfo(nickname: string, profileUrl: string, callback?: userCallback): void;
  updateCurrentUserInfoWithProfileImage(nickname: string, profileImageFile: File, callback?: userCallback): void;

  getCurrentUserId(): string;
  getApplicationId(): string;
  getConnectionState(): string;

  addChannelHandler(id: string, handler: ChannelHandler): void;
  removeChannelHandler(id: string): void;
  removeAllChannelHandlers(): void;

  addConnectionHandler(id: string, handler: ConnectionHandler): void;
  removeConnectionHandler(id: string): void;
  removeAllConnectionHandlers(): void;

  createUserListQuery(): UserListQuery;
  createUserListQuery(userIds: Array<string>): UserListQuery;
  createBlockedUserListQuery(): UserListQuery;

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

  setDoNotDisturb(doNotDisturbOn: boolean, startHour: number, startMin: number, endHour: number, endMin: number, timezone: string, callback?: commonCallback): void;
  getDoNotDisturb(callback: commonCallback): void;

  // Background/Foreground Appstate for push notifications in React Native / Ionic
  setBackgroundState(): void;
  setForegroundState(): void;

  // State change should be disabled when image picker is loaded in Android.
  disableStateChange(): void;
  enableStateChange(): void;
}

interface ChannelHandlerStatic {
  new(): ChannelHandler;
}
interface ChannelHandler {
  onMessageReceived(channel: GroupChannel|OpenChannel, message: AdminMessage|UserMessage): void;
  onMessageDeleted(channel: GroupChannel|OpenChannel, messageId: number): void;
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
  onUserReceivedInvitation(channel: GroupChannel, inviter: User, invitees: Array<Member>): void;
  onUserDeclinedInvitation(channel: GroupChannel, inviter: User, invitee: Array<Member>): void;
  onMetaDataCreated(channel: GroupChannel|OpenChannel, metaData: Object): void;
  onMetaDataUpdated(channel: GroupChannel|OpenChannel, metaData: Object): void;
  onMetaDataDeleted(channel: GroupChannel|OpenChannel, metaData: Array<string>): void;
  onMetaCountersCreated(channel: GroupChannel|OpenChannel, metaCounter: Object): void;
  onMetaCountersUpdated(channel: GroupChannel|OpenChannel, metaCounter: Object): void;
  onMetaCountersDeleted(channel: GroupChannel|OpenChannel, metaCounter: Array<string>): void;
  onChannelHidden(channel: GroupChannel): void;
}

interface ConnectionHandlerStatic {
  new(): ConnectionHandler;
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
  message: string;
  messageType: string;
  data: string;
  customType: string;
  createdAt: number;
  updatedAt: number;

  isOpenChannel(): boolean;
  isGroupChannel(): boolean;
  isUserMessage(): boolean;
  isFileMessage(): boolean;
  isAdminMessage(): boolean;
  serialize(): Object;
}

interface AdminMessage extends BaseMessageInstance {
  translations: Object;
}
interface AdminMessageStatic {
  buildFromSerializedData(serializedObject: Object): AdminMessage;
}

interface UserMessage extends BaseMessageInstance {
  sender: User;
  reqId: string;
  translations: Object;
}
interface UserMessageStatic {
  buildFromSerializedData(serializedObject: Object): UserMessage;
}

interface FileMessage extends BaseMessageInstance {
  sender: User;
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
type messageCallback = (message: UserMessage | FileMessage, error: Object) => void;
type cancelUploadingFileMessageCallback = (isSuccess: boolean, error: Object) => void;
type fileUploadprogressHandler = (event: Object) => void;
type messageChangeLogs = {
  updatedMessages: Array<UserMessage|FileMessage|AdminMessage>,
  deletedMessageIds: Array<string>,
  hasMore: boolean,
  token: string
}
type getMessageChangeLogsByTokenHandler = (data: messageChangeLogs, error: Object) => void;
interface BaseChannel {
  url: string;
  name: string;
  coverUrl: string;
  data: string;
  customType: string;
  createdAt: string;

  isGroupChannel(): boolean;
  isOpenChannel(): boolean;
  serialize(): Object;

  getMessageChangeLogsByToken(callback: getMessageChangeLogsByTokenHandler): void;
  getMessageChangeLogsByToken(token: string, callback: getMessageChangeLogsByTokenHandler): void;

  /** Message  */
  createMessageListQuery(): MessageListQuery; /* Deprecated */
  createPreviousMessageListQuery(): PreviousMessageListQuery;
  getNextMessagesByTimestamp(ts: number, isInclusive: boolean, nextResultSize: number, shouldReverse:boolean, messageType: string, customType: string, callback: messageListCallback): void;
  getPreviousMessagesByTimestamp(ts: number, isInclusive: boolean, prevtResultSize: number, shouldReverse:boolean, messageType: string, customType: string, callback: messageListCallback): void;
  getPreviousAndNextMessagesByTimestamp(ts: number, prevtResultSize: number, nextResultSize: number, shouldReverse:boolean, messageType: string, customType: string, callback: messageListCallback): void;
  getNextMessagesByID(messageId: number, isInclusive: boolean, nextResultSize: number, shouldReverse:boolean, messageType: string, customType: string, callback: messageListCallback): void;
  getPreviousMessagesByID(messageId: number, isInclusive: boolean, prevtResultSize: number, shouldReverse:boolean, messageType: string, customType: string, callback: messageListCallback): void;
  getPreviousAndNextMessagesByID(messageId: number, prevtResultSize: number, nextResultSize: number, shouldReverse:boolean, messageType: string, customType: string, callback: messageListCallback): void;

  /** FileMessage  */
  sendFileMessage(file: File, callback: messageCallback): FileMessage;
  sendFileMessage(file: File, data: string, callback: messageCallback): FileMessage;
  sendFileMessage(file: File, data: string, customType: string, callback: messageCallback): FileMessage;
  sendFileMessage(file: File, data: string, customType: string, thumbnailSizes: Array<ThumbnailSize>, callback: messageCallback): FileMessage;
  sendFileMessage(file: File, name: string, type: string, size: number, data: string, callback: messageCallback): FileMessage;
  sendFileMessage(file: File, name: string, type: string, size: number, data: string, customType: string, callback: messageCallback): FileMessage;
  sendFileMessage(file: File, name: string, type: string, size: number, data: string, customType: string, thumbnailSizes: Array<ThumbnailSize>, callback: messageCallback): FileMessage;

  sendFileMessage(file: File, progressHandler: fileUploadprogressHandler, callback: messageCallback): FileMessage;
  sendFileMessage(file: File, data: string, progressHandler: fileUploadprogressHandler, callback: messageCallback): FileMessage;
  sendFileMessage(file: File, data: string, customType: string, progressHandler: fileUploadprogressHandler, callback: messageCallback): FileMessage;
  sendFileMessage(file: File, data: string, customType: string, thumbnailSizes: Array<ThumbnailSize>, progressHandler: fileUploadprogressHandler, callback: messageCallback): FileMessage;
  sendFileMessage(file: File, name: string, type: string, size: number, data: string, progressHandler: fileUploadprogressHandler, callback: messageCallback): FileMessage;
  sendFileMessage(file: File, name: string, type: string, size: number, data: string, customType: string, progressHandler: fileUploadprogressHandler, callback: messageCallback): FileMessage;
  sendFileMessage(file: File, name: string, type: string, size: number, data: string, customType: string, thumbnailSizes: Array<ThumbnailSize>, progressHandler: fileUploadprogressHandler, callback: messageCallback): FileMessage;

  sendFileMessage(file: string, callback: messageCallback): FileMessage;
  sendFileMessage(file: string, data: string, callback: messageCallback): FileMessage;
  sendFileMessage(file: string, data: string, customType: string, callback: messageCallback): FileMessage;
  sendFileMessage(file: string, name: string, type: string, size: number, data: string, callback: messageCallback): FileMessage;
  sendFileMessage(file: string, name: string, type: string, size: number, data: string, customType: string, callback: messageCallback): FileMessage;

  sendFileMessage(file: string, progressHandler: fileUploadprogressHandler, callback: messageCallback): FileMessage;
  sendFileMessage(file: string, data: string, progressHandler: fileUploadprogressHandler, callback: messageCallback): FileMessage;
  sendFileMessage(file: string, data: string, customType: string, progressHandler: fileUploadprogressHandler, callback: messageCallback): FileMessage;
  sendFileMessage(file: string, name: string, type: string, size: number, data: string, progressHandler: fileUploadprogressHandler, callback: messageCallback): FileMessage;
  sendFileMessage(file: string, name: string, type: string, size: number, data: string, customType: string, progressHandler: fileUploadprogressHandler, callback: messageCallback): FileMessage;

  /** UserMessage  */
  sendUserMessage(message: string, callback: messageCallback): UserMessage;
  sendUserMessage(message: string, data: string, callback: messageCallback): UserMessage;
  sendUserMessage(message: string, data: string, customType: string, callback: messageCallback): UserMessage;
  sendUserMessage(message: string, data: string, customType: string, targetLanguages: Array<string>, callback: messageCallback): UserMessage;

  /** Edit Message  */
  updateFileMessage(messageId: number, data: string, customType: string, callback: messageCallback): void;
  updateUserMessage(messageId: number, message: string, data: string, customType: string, callback: messageCallback): void;
  deleteMessage(message: FileMessage|UserMessage, callback: commonCallback): void;
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
}

type messageListCallback = (messageList: Array<UserMessage | FileMessage | AdminMessage>, error: Object) => void;
interface MessageListQuery { /* Deprecated */
  next(messageTimestamp: number, limit: number, reverse: boolean, callback: messageListCallback): void;
  prev(messageTimestamp: number, limit: number, reverse: boolean, callback: messageListCallback): void;
  load(messageTimestamp: number, prevLimit: number, nextLimit: number, reverse: boolean, callback: messageListCallback): void;
}

interface PreviousMessageListQuery {
  hasMore: boolean;
  isLoading: boolean;
  load(limit: number, reverse: boolean, callback: messageListCallback): void;
  load(limit: number, reverse: boolean, messageType: string, callback: messageListCallback): void;
}

/**
 * OpenChannel
 */
type commonCallback = (response: Object, error: Object) => void;
type openChannelCallback = (openChannel: OpenChannel, error: Object) => void;
interface OpenChannel extends BaseChannel {
  isFrozen: boolean;
  participantCount: number;
  operators: Array<User>;

  refresh(callback: openChannelCallback): void;
  delete(callback: openChannelCallback): void;
  enter(callback: openChannelCallback): void;
  exit(callback: openChannelCallback): void;

  createParticipantListQuery(): UserListQuery;
  createMutedUserListQuery(): UserListQuery;
  createBannedUserListQuery(): UserListQuery;

  updateChannel(name: string, coverUrl: string, data: string, callback: openChannelCallback): void;
  updateChannel(name: string, coverUrl: string, data: string, operatorUserIds: Array<string>|string, callback: openChannelCallback): void;
  updateChannel(name: string, coverUrl: string, data: string, operatorUserIds: Array<string>|string, customType: string, callback: openChannelCallback): void;

  updateChannelWithOperatorUserIds(name: string, coverUrl: string, data: string, operatorUserIds: Array<string>|string, callback: openChannelCallback): void;
  updateChannelWithOperatorUserIds(name: string, coverUrl: string, data: string, operatorUserIds: Array<string>|string, customType: string, callback: openChannelCallback): void;

  banUser(user: User, callback: commonCallback): void;
  banUser(user: User, seconds: number, callback: commonCallback): void;
  banUserWithUserId(userId: string, callback: commonCallback): void;
  banUserWithUserId(userId: string, seconds: number, callback: commonCallback): void;
  unbanUser(user: User, callback: commonCallback): void;
  unbanUserWithUserId(userId: string, callback: commonCallback): void;

  muteUser(user: User, callback: commonCallback): void;
  muteUserWithUserId(userId: string, callback: commonCallback): void;
  unmuteUser(user: User, callback: commonCallback): void;
  unmuteUserWithUserId(userId: string, callback: commonCallback): void;

  isOperator(user: User): boolean;
  isOperatorWithUserId(userId: string): boolean;
}

type userListQueryCallback = (userList: Array<User>, error: Object) => void;
interface UserListQuery {
  limit: number;
  hasNext: boolean;
  isLoading: boolean;
  metaDataKey: string;
  metaDataValues: Array<string>;

  next(callback: userListQueryCallback): void;
}

interface OpenChannelStatic {
  buildFromSerializedData(serializedObject: Object): OpenChannel;

  getChannel(channelUrl: string, callback: openChannelCallback): void;
  getChannelWithoutCache(channelUrl: string, callback: openChannelCallback): void;

  createChannel(callback: openChannelCallback): void;
  createChannel(name: string, coverUrlOrImageFile: string|File, data: string, callback: openChannelCallback): void;
  createChannel(name: string, coverUrlOrImageFile: string|File, data: string, operatorUserIds: Array<string>|string, callback: openChannelCallback): void;
  createChannel(name: string, coverUrlOrImageFile: string|File, data: string, operatorUserIds: Array<string>|string, customType: string, callback: openChannelCallback): void;

  createChannelWithOperatorUserIds(name: string, coverUrlOrImageFile: string|File, data: string, operatorUserIds: Array<string>|string, callback: openChannelCallback): void;
  createChannelWithOperatorUserIds(name: string, coverUrlOrImageFile: string|File, data: string, operatorUserIds: Array<string>|string, customType: string, callback: openChannelCallback): void;

  createOpenChannelListQuery(): OpenChannelListQuery;
}

type openChannelListQueryCallback = (openChannelList: Array<OpenChannel>, error: Object) => void;
interface OpenChannelListQuery {
  limit: number;
  hasNext: boolean;
  nameKeyword: string;
  urlKeyword: string;
  customType: string;

  next(callback: openChannelListQueryCallback): void;
}

/**
 * GroupChannel
 */
type groupChannelCallback = (groupChannel: GroupChannel, error: Object) => void;
type getPushPreferenceCallback = (isPushOn: boolean, error: Object) => void;
interface GroupChannel extends BaseChannel {
  isHidden: boolean;
  isDistinct: boolean;
  isPushEnabled: boolean;
  lastMessage: UserMessage | FileMessage | AdminMessage;
  unreadMessageCount: number;
  members: Array<Member>;
  memberCount: number;
  inviter: User;

  refresh(callback: groupChannelCallback): void;

  updateChannel(name: string, coverUrlOrImageFile: string|File, data: string, callback: groupChannelCallback): void;
  updateChannel(isDistinct: boolean, name: string, coverUrlOrImageFile: string|File, data: string, callback: groupChannelCallback): void;
  updateChannel(isDistinct: boolean, name: string, coverUrlOrImageFile: string|File, data: string, customType: string, callback: groupChannelCallback): void;

  resetMyHistory(callback?: commonCallback): void;

  invite(users: Array<User>, callback: groupChannelCallback): void;
  inviteWithUserIds(userIds: Array<string>, callback: groupChannelCallback): void;
  acceptInvitation(callback: groupChannelCallback): void;
  declineInvitation(callback: commonCallback): void;

  leave(callback: commonCallback): void;

  hide(callback: commonCallback): void;
  hide(hidePreviousMessages: boolean, callback: commonCallback): void;

  markAsRead(): void;
  getReadReceipt(message: UserMessage | FileMessage | AdminMessage): number;
  getReadStatus(): Object;

  startTyping(): void;
  endTyping(): void;
  isTyping(): boolean;
  getTypingMembers(): Array<Member>;

  setPushPreference(pushOn: boolean, callback: commonCallback): void;
  getPushPreference(callback: getPushPreferenceCallback): void;

}

type groupChannelCountCallback = (count: number, error: Object) => void;
interface GroupChannelStatic {
  buildFromSerializedData(serializedObject: Object): GroupChannel;

  createMyGroupChannelListQuery(): GroupChannelListQuery;

  getTotalUnreadMessageCount(callback: groupChannelCountCallback): void;
  getTotalUnreadChannelCount(callback: groupChannelCountCallback): void;

  createChannel(users: Array<User>, callback: groupChannelCallback): void;
  createChannel(users: Array<User>, isDistinct: boolean, callback: groupChannelCallback): void;
  createChannel(users: Array<User>, isDistinct: boolean, customType: string, callback: groupChannelCallback): void;
  createChannel(users: Array<User>, isDistinct: boolean, name: string, coverUrlOrImageFile: string|File, data: string, callback: groupChannelCallback): void;
  createChannel(users: Array<User>, isDistinct: boolean, name: string, coverUrlOrImageFile: string|File, data: string, customType: string, callback: groupChannelCallback): void;

  createChannelWithUserIds(userIds: Array<string>, callback: groupChannelCallback): void;
  createChannelWithUserIds(userIds: Array<string>, isDistinct: boolean, callback: groupChannelCallback): void;
  createChannelWithUserIds(userIds: Array<string>, isDistinct: boolean, customType: string, callback: groupChannelCallback): void;
  createChannelWithUserIds(userIds: Array<string>, isDistinct: boolean, name: string, coverUrlOrImageFile: string|File, data: string, callback: groupChannelCallback): void;
  createChannelWithUserIds(userIds: Array<string>, isDistinct: boolean, name: string, coverUrlOrImageFile: string|File, data: string, customType: string, callback: groupChannelCallback): void;

  getChannel(channelUrl: string, callback: groupChannelCallback): void;
  getChannelWithoutCache(channelUrl: string, callback: groupChannelCallback): void;

  markAsReadAll(callback: commonCallback): void;
}

type groupChannelListQueryCallback = (groupChannelList: Array<GroupChannel>, error: Object) => void;
interface GroupChannelListQuery {
  limit: number;
  hasNext: boolean;
  isLoading: boolean;
  includeEmpty: boolean;
  order: string;
  userIdsFilter: Array<string>;
  userIdsFilterExactMatch: boolean;
  queryType: 'AND'|'OR';
  nicknameContainsFilter: string;
  channelNameContainsFilter: string;
  customTypeFilter: string;
  next(callback: groupChannelListQueryCallback): void;
}

export default SendBird;
