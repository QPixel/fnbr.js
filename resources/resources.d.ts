/**
 * The options for a client
 */
export type ClientOptions = {
  /**
   * Whether to save the party member meta
   */
  savePartyMemberMeta?: boolean;
  /**
   * The options to be used for the client's HTTP manager
   */
  http?: {
      /**
       * The timeout (in milliseconds) of the HTTP requests
       */
      timeout?: number;
      /**
       * The default headers that will be used for each HTTP request
       */
      header?: any;
      /**
       * Whether to return an HTTP request's response as an JSON object
       */
      json?: boolean;
  };
  /**
   * Used to send debug messages
   */
  debug?: Function;
  /**
   * Whether to send HTTP debug messages
   */
  httpDebug?: boolean;
  /**
   * Whether to send XMPP debug messages
   */
  xmppDebug?: boolean;
  /**
   * The presence status message of the client's user
   */
  status?: string;
  /**
   * The platform that will be used for the client's user
   */
  platform?: any;
  /**
   * The client's default member meta for joined parties
   */
  memberMeta?: any;
  /**
   * The client's XMPP connection's keep alive interval
   */
  keepAliveInterval?: number;
  /**
   * Whether friend presences should be cached. NOTE: This will break friend.isOnline, friend.isJoinable and friend.joinParty()
   */
  cachePresences?: boolean;
  /**
   * The credentials that will be used for client's authentication
   */
  auth: {
      /**
       * The device auth's credentials
       */
      deviceAuth?: any | string | Function;
      /**
       * The exchange code
       */
      exchangeCode?: string;
      /**
       * The authorization code
       */
      authorizationCode?: string;
      /**
       * The refresh token
       */
      refreshToken?: string;
      /**
       * Whether EULA should be checked and agreed or not
       */
      checkEULA?: boolean;
  };
  /**
   * The default party config
   */
  partyConfig?: {
      /**
       * The privacy of the party
       */
      privacy?: any;
      /**
       * Whether joining party needs confirmation
       */
      joinConfirmation?: boolean;
      /**
       * The joinability of the party
       */
      joinability?: string;
      /**
       * The maximum member size of the party
       */
      maxSize?: number;
      /**
       * Whether the chat of the party should be enabled
       */
      chatEnabled?: boolean;
  };
  /**
   * The default kairos config
   */
  kairos?: {
      /**
       * #random] The CID of the Kairos avatar
       */
      cid?: string;
      /**
       * #random] The color of the Kairos avatar
       */
      color?: string;
  };
};
export var ClientOptions: Readonly<{
  savePartyMemberMeta: boolean;
  /**
   * The options to be used for the client's HTTP manager
   * @typedef {Object} HttpOptions
   * @property {number} [timeout=10000] The timeout (in milliseconds) of the HTTP requests
   * @property {Object} [header={}] The default headers that will be used for each HTTP request
   * @property {boolean} [json=true] Whether to return an HTTP request's response as an JSON object
   */
  http: {
      timeout: number;
      headers: {};
      json: boolean;
  };
  debug: {
      (...data: any[]): void;
      (message?: any, ...optionalParams: any[]): void;
  };
  httpDebug: boolean;
  xmppDebug: boolean;
  status: string;
  platform: string;
  memberMeta: {};
  keepAliveInterval: number;
  cachePresences: boolean;
  /**
   * The credentials that will be used for client's authentication
   * @typedef {Object} ClientAuth
   * @property {Object|string|function} [deviceAuth] The device auth's credentials
   * @property {string} [exchangeCode] The exchange code
   * @property {string} [authorizationCode] The authorization code
   * @property {string} [refreshToken] The refresh token
   * @property {boolean} [checkEULA=true] Whether EULA should be checked and agreed or not
   */
  auth: {
      deviceAuth: any;
      exchangeCode: any;
      authorizationCode: any;
      refreshToken: any;
      checkEULA: boolean;
  };
  /**
   * The party config
   * @typedef {Object} PartyConfig
   * @property {PartyPrivacy} [privacy=PUBLIC] The privacy of the party
   * @property {boolean} [joinConfirmation=false] Whether joining party needs confirmation
   * @property {string} [joinability='OPEN'] The joinability of the party
   * @property {number} [maxSize=16] The maximum member size of the party
   * @property {boolean} [chatEnabled=true] Whether the chat of the party should be enabled
   */
  partyConfig: {
      privacy: {
          partyType: string;
          inviteRestriction: string;
          onlyLeaderFriendsCanJoin: boolean;
          presencePermission: string;
          invitePermission: string;
          acceptingMembers: boolean;
      };
      joinConfirmation: boolean;
      joinability: string;
      maxSize: number;
      chatEnabled: boolean;
  };
  /**
   * The Kairos config
   * @typedef {Object} KairosConfig
   * @property {string} [cid=DefaultSkin#random] The CID of the Kairos avatar
   * @property {string} [color=DefaultColor#random] The color of the Kairos avatar
   */
  kairos: {
      cid: string;
      color: string;
  };
}>;
/**
* Contains authorization data for Epic Games' services
*/
export type AuthData = {
  /**
   * The access token
   */
  token: string | null;
  /**
   * The access token's expiration date as ISO string
   */
  expires_at: string | null;
};
export var AuthData: Readonly<{
  token: any;
  expires_at: any;
}>;
/**
* Contains data of the authorized Epic Games account
*/
export type AuthAccount = {
  /**
   * The id of the account
   */
  id: string | null;
  /**
   * The display name of the account
   */
  displayName: string | null;
};
export var AuthAccount: Readonly<{
  id: any;
  displayName: any;
}>;
/**
* Contains data about a friend presence's Kairos avatar
*/
export type FPKairosAvatar = {
  /**
   * The avatar's asset
   */
  asset: string | null;
  /**
   * The avatar's background
   */
  background: string | null;
};
export var FPKairosAvatar: Readonly<{
  asset: any;
  background: any;
}>;
/**
* Contains data about a friend's gameplay stats
*/
export type FPGameplayStats = {
  /**
   * The kill count of the friends in the gameplay
   */
  kills: number | null;
  /**
   * Whether the friend died
   */
  fellToDeath: boolean | null;
  /**
   * The player count on the gameplay's server
   */
  serverPlayerCount: number | null;
};
export var FPGameplayStats: Readonly<{
  kills: any;
  fellToDeath: boolean;
  serverPlayerCount: any;
}>;
/**
* Contains data about a friend's party
*/
export type FPPartyData = {
  /**
   * The id of the party
   */
  id: string | null;
  /**
   * Whether the party is private or not
   */
  isPrivate: boolean | null;
  /**
   * The party's member count
   */
  memberCount: number | null;
  /**
   * The party's platform
   */
  platform: string | null;
  /**
   * The party's build id
   */
  buildId: string | null;
};
export var FPPartyData: Readonly<{
  id: any;
  isPrivate: any;
  memberCount: any;
  platform: any;
  buildId: any;
}>;
/**
* Contains a device auth's credentials
*/
export type DeviceAuthCredentials = {
  /**
   * The account id of the device auth
   */
  accountId: string;
  /**
   * The id of the device auth
   */
  deviceId: string;
  /**
   * The secret of the device auth
   */
  secret: string;
};
export var DeviceAuthCredentials: Readonly<{
  accountId: any;
  deviceId: any;
  secret: any;
}>;
export const Endpoints: {
  readonly LOGIN_REPUTATION: string;
  readonly LOGIN_CSRF: string;
  readonly LOGIN: string;
  readonly LOGIN_EXCHANGE: string;
  readonly OAUTH_TOKEN_CREATE: string;
  readonly OAUTH_TOKEN_VERIFY: string;
  readonly OAUTH_TOKEN_KILL: string;
  readonly OAUTH_TOKEN_KILL_MULTIPLE: string;
  readonly OAUTH_EXCHANGE: string;
  readonly OAUTH_DEVICE_AUTH: string;
  readonly INIT_EULA: string;
  readonly INIT_GRANTACCESS: string;
  readonly XMPP_SERVER: string;
  readonly EPIC_PROD_ENV: string;
  readonly BR_STATS_V2: string;
  readonly BR_SERVER_STATUS: string;
  readonly BR_STORE: string;
  readonly BR_NEWS: string;
  readonly BR_EVENT_FLAGS: string;
  readonly BR_SAC_SEARCH: string;
  readonly BR_PARTY: string;
  readonly BR_TOURNAMENTS: string;
  readonly BR_RADIO: string;
  readonly ACCOUNT_MULTIPLE: string;
  readonly ACCOUNT_DISPLAYNAME: string;
  readonly ACCOUNT_ID: string;
  readonly ACCOUNT_EMAIL: string;
  readonly MCP: string;
  readonly FRIENDS: string;
  readonly FRIEND_ADD: string;
  readonly FRIEND_DELETE: string;
  readonly FRIEND_BLOCK: string;
  readonly SERVER_STATUS_SUMMARY: string;
};

export const Tokens: {
  readonly LAUNCHER_WINDOWS: string;
  readonly FORTNITE_WINDOWS: string;
  readonly FORTNITE_IOS: string;
};
/**
* Represents a Fortnite basic access token:
* * `LAUNCHER_WINDOWS`
* * `FORTNITE_WINDOWS`
* * `FORTNITE_IOS`
*/
export type BasicToken = any;
