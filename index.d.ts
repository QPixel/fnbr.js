/// <reference types="node" />

declare module 'fnbr' {
    import List from "../src/Util/List.js";
    import {EventEmitter} from "events";

    export class Client extends EventEmitter {
        /**
         * Convert an object's keys to camel case
         * @param {Object} obj The object that will be converted
         * @returns {Object} The converted object
         * @private
        */
        private static makeCamelCase;
        /**
         * Sleep for the provided milliseconds
         * @param {number} timeout The timeout (in milliseconds)
         * @returns {Promise<void>}
         * @private
         */
        private static sleep;
        /**
         * Display a console prompt
         * @param {string} question The text that will be prompted
         * @returns {Promise<string>} The received answer
         * @private
         */
        private static consoleQuestion;
        /**
         * Merges a default object with a given one
         * @param {Object} def The default object
         * @param {Object} given The given object
         * @returns {Object} The merged objects
         * @private
         */
        private static mergeDefault;
        /**
         * @param {ClientOptions} args Client options
         */
        constructor(args: ClientOptions);
        /**
         * The config of the client
         * @type {ClientOptions}
         */
        config: ClientOptions;
        /**
         * Whether the client is ready or not
         * @type {boolean}
         */
        isReady: boolean;
        /**
         * The default party member meta of the client
         * @type {?Object}
         * @private
         */
        private lastMemberMeta;
        /**
         * The user of the client
         * @type {?ClientUser}
         */
        user: import("./src/Structures/ClientUser.js") | null;
        /**
         * The party that the client is currently in
         * @type {?Party}
         */
        party: import("./src/Structures/Party.js") | null;
        /**
         * The authentication manager of the client
         * @type {Authenticator}
         * @private
         */
        private Auth;
        /**
         * The HTTP manager of the client
         * @type {Http}
         * @private
         */
        private Http;
        /**
         * The XMPP manager of the client
         * @type {Xmpp}
         * @private
         */
        private Xmpp;
        /**
         * The friends cache of the client's user
         * @type {List}
         */
        friends: List;
        /**
         * The pending friends cache of the client's user
         * @type {List}
         */
        pendingFriends: List;
        /**
         * The blocked friends cache of the client's user
         * @type {List}
         */
        blockedFriends: List;
        /**
         * The client's party lock
         * Used for delaying all party-related xmpp events while changes to client's party are made
         * @typedef {Object} PartyLock
         * @property {boolean} active Indicates if the party lock is active
         * @property {function} wait Sleep until party lock is no longer active
         * @private
         */
        private partyLock;
        /**
         * The client's reauthentication lock
         * Used for delaying all Http requests while the client is reauthenticating
         * @typedef {Object} ReauthLock
         * @property {boolean} active Indicates if the reauthentication lock is active
         * @property {function} wait Sleep until reauthentication lock is no longer active
         * @private
         */
        private reauthLock;
        /**
         * Parses an error
         * @param {Object|string} error The error to be parsed
         * @private
         */
        private parseError;
        /**
         * Converts an object's keys to camel case
         * @param {Object} obj The object to be converted
         * @private
         */
        private makeCamelCase;
        /**
         * Initiates client's login process
         * @returns {Promise<void>}
         */
        login(): Promise<void>;
        tokenCheckInterval: NodeJS.Timeout;
        /**
         * Disconnects the client
         * @returns {Promise<void>}
         */
        logout(): Promise<void>;
        /**
         * Restarts the client
         * @returns {Promise<void>}
         */
        restart(): Promise<void>;
        /**
         * Refreshes the client's friends (including pending and blocked)
         * @returns {Promise<void>}
         * @private
         */
        private updateCache;
        /**
         * Initiates a party
         * @param {boolean} create Whether to create a new one after leaving the current one
         * @returns {Promise<void>}
         * @private
         */
        private initParty;
        /**
         * Debug a message via the debug function provided in the client's config (if provided)
         * @param {string} message The message that will be debugged
         * @returns {void}
         * @private
         */
        private debug;
        /**
         * Sleep until an event is emitted
         * @param {string|symbol} event The event will be waited for
         * @param {number} [timeout=5000] The timeout (in milliseconds)
         * @param {function} [filter] The filter for the event
         * @returns {Promise<Object>}
         */
        waitForEvent(event: string | symbol, timeout?: number, filter?: Function): Promise<any>;
        /**
         * Sleep until the client is ready
         * @param {number} [timeout=20000] The timeout (in milliseconds)
         */
        waitUntilReady(timeout?: number): Promise<any>;
        /**
         * Merges a default object with a given one
         * @param {Object} def The default object
         * @param {Object} given The given object
         * @returns {Object} The merged objects
         * @private
         */
        private mergeDefault;
        /**
         * Fetches an Epic Games account
         * @param {string|Array<string>} query The id, name or email of the account(s) you want to fetch
         * @returns {Promise<User>|Promise<Array<User>>} The fetched account(s)
         * @example
         * client.getProfile('aabbccddeeff00112233445566778899');
         */
        getProfile(query: string | Array<string>): Promise<import("./src/Structures/User.js")> | Promise<Array<import("./src/Structures/User.js")>>;
        /**
         * Changes the presence status
         * @param {string} [status] The status message; can be null/undefined if you want to reset it
         * @param {string} [to] The display name or the id of the friend; can be undefined if you want to update the presence status for all friends
         * @returns {Promise<void>}
         */
        setStatus(status?: string, to?: string): Promise<void>;
        /**
         * Sends / accepts a friend request to an Epic Games user
         * @param {string} user The id, name or email of the user
         * @returns {Promise<void>}
         */
        addFriend(user: string): Promise<void>;
        /**
         * Removes a friend or reject an user's friend request
         * @param {string} user The id, name or email of the user
         * @returns {Promise<void>}
         */
        removeFriend(user: string): Promise<void>;
        /**
         * Blocks a friend
         * @param {string} friend The id, name or email of the friend
         * @returns {Promise<void>}
         */
        blockFriend(friend: string): Promise<void>;
        /**
         * Unblocks a friend
         * @param {string} friend The id, name or email of the friend
         * @returns {Promise<void>}
         */
        unblockFriend(friend: string): Promise<void>;
        /**
         * Sends a message to a friend
         * @param {string} friend The id or name of the friend
         * @param {string} message The message
         * @returns {Promise<FriendMessage>} The sent friend message
         */
        sendFriendMessage(friend: string, message: string): Promise<import("./src/Structures/FriendMessage.js")>;
        /**
         * Sends a party invitation to a friend
         * @param {string} friend The id or name of the friend
         * @returns {Promise<SentPartyInvitation>}
         */
        invite(friend: string): Promise<import("./src/Structures/SentPartyInvitation.js")>;
        /**
         * Fetches news for a gamemode
         * @param {Gamemode} mode The gamemode
         * @param {Language} language The language
         * @returns {Promise<Array>}
         */
        getNews(mode?: any, language?: any): Promise<Array[]>;
        /**
         * Fetches v2 stats for one or multiple players
         * @param {string} user The id, name or email of the user(s)
         * @param {number} [startTime] The timestamp to start fetching stats from; can be null/undefined for lifetime
         * @param {number} [endTime] The timestamp to stop fetching stats from; can be undefined for lifetime
         * @returns {Promise<Object>}
         */
        getBRStats(user: string, startTime?: number, endTime?: number): Promise<any>;
        /**
         * Lookups for a creator code
         * @param {string} code The creator code
         * @param {boolean} showSimilar Whether an array with similar creator codes should be returned
         * @returns {Promise<CreatorCode>|Promise<Array<CreatorCode>>}
         */
        getCreatorCode(code: string, showSimilar?: boolean): Promise<import("./src/Structures/CreatorCode.js")> | Promise<Array<import("./src/Structures/CreatorCode.js")>>;
        /**
         * Fetches the current Battle Royale store
         * @param {Language} language The language
         * @returns {Promise<Object>} The Battle Royale store
         */
        getBRStore(language?: any): Promise<any>;
        /**
         * Fetch the current Battle Royale event flags
         * @param {Language} language The language
         * @returns {Promise<Object>} The Battle Royale event flags
         */
        getBREventFlags(language?: any): Promise<any>;
        /**
         * Fetch the current Fortnite server status
         * @returns {Promise<Object>} The server status
         */
        getFortniteServerStatus(): Promise<any>;
        /**
         * Fetch the current epicgames server status
         * @returns {Promise<Object>} The server status
         */
        getServerStatus(): Promise<any>;
        /**
         * Fetch the current Fortnite tournaments
         * @param {string} region The region eg. EU, ASIA, NAE
         * @param {boolean} showPastEvents Whether to return past events
         * @returns {Promise<Object>} The tournaments
         */
        getTournaments(region?: string, showPastEvents?: boolean): Promise<any>;
        /**
         * Fetch a Fortnite tournament window by id
         * @param {string} eventId The event id (eg epicgames_OnlineOpen_Week2_ASIA)
         * @param {string} windowId The window id (eg OnlineOpen_Week2_ASIA_Event2)
         * @param {boolean} showLiveSessions Whether to show live sessions
         * @param {number} page The starting page
         * @returns {Promise<Object>} The tournament window
         */
        getTournamentWindow(eventId: string, windowId: string, showLiveSessions?: boolean, page?: number): Promise<any>;
        /**
         * Download a radio stream
         * @param {string} id The stream id
         * @param {Language} language The stream language
         * @returns {Promise<Buffer>}
         * @example
         * fs.writeFile('./stream.m3u8', await client.getRadioStream('BXrDueZkosvNvxtx', Enums.Language.ENGLISH));
         * in cmd: ffmpeg -protocol_whitelist https,file,tcp,tls -i stream.m3u8 -ab 211200 radio.mp3
         * Known stream ids: BXrDueZkosvNvxtx (BeatBox, en), GEviYjIhzVVzJufW (Yonder, en)
         * Thanks to cup#9125, mix#9999 and amr#3379
         */
        getRadioStream(id: string, language?: any): Promise<Buffer>;
    }

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
    export type BasicToken = 'LAUNCHER_WINDOWS' | 'FORTNITE_WINDOWS' | 'FORTNITE_IOS';
}