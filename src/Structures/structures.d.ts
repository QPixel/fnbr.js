/* eslint-disable */

export const ClientPartyMember_base: typeof import("./PartyMember");
/**
 * Represents the party member of a client
 * @extends {PartyMember}
 */
export class ClientPartyMember extends ClientPartyMember_base {
    /**
     * @param {Object} party The member's party
     * @param {Object} data The party member's data
     */
    constructor(party: any, data: any);
    /**
     * Whether the client's party member is currently sending a patch
     * @type {boolean}
     */
    currentlyPatching: boolean;
    /**
     * Queue to push patches into while currentlyPatching is true
     * @type {Array}
     */
    patchQueue: any[];
    /**
     * Sets the readiness of the client's party member
     * @param {boolean} ready Whether the party member should be ready or not
     * @returns {Promise<void>}
     */
    setReadiness(ready: boolean): Promise<void>;
    /**
     * Sets the sitting out state of the client's party member
     * @param {boolean} sittingOut Whether the party member should be sitting out or not
     * @returns {Promise<void>}
     */
    setSittingOut(sittingOut: boolean): Promise<void>;
    /**
     * Sets the level of the client's party member
     * @param {number} level The level that will be set
     * @returns {Promise<void>}
     */
    setLevel(level: number): Promise<void>;
    /**
     * Sets the Battle Pass info of the party member
     * @param {boolean} isPurchased Whether the Battle Pass was purchased or not
     * @param {number} level The Battle Pass level
     * @param {number} selfBoost The self boost percent
     * @param {number} friendBoost The friend boost percent
     * @returns {Promise<void>}
     */
    setBattlepass(isPurchased: boolean, level: number, selfBoost: number, friendBoost: number): Promise<void>;
    /**
     * Sets party member's banner
     * @param {string} banner The banner's id
     * @param {string} color The banner color
     * @type {Promise<void>}
     */
    setBanner(banner: string, color: string): Promise<void>;
    /**
     * Sets the party member's outfit
     * @param {string} cid The skin's id
     * @param {Array} [variants=[]] The skin's variants
     * @param {Array} [enlightment=[]] The skin's enlightment
     * @returns {Promise<void>}
     * @example
     * client.party.me.setOutfit('CID_028_Athena_Commando_F');
     * // with variants:
     * client.party.me.setOutfit('CID_029_Athena_Commando_F_Halloween', [{ channel: 'Material', variant: 'Mat3' }]);
     * // with enlightment:
     * client.party.me.setOutfit('CID_701_Athena_Commando_M_BananaAgent', [{ channel: 'Progressive', variant: 'Stage4' }], [2, 350]);
     */
    setOutfit(cid: string, variants?: any[], enlightment?: any[]): Promise<void>;
    /**
     * Sets the party member's backpack
     * @param {string} bid The backpack's id
     * @param {Array} [variants=[]] The backpack's variants
     * @returns {Promise<void>}
     * @example
     * client.party.me.setBackpack('BID_001_BlueSquire');
     * // with variants
     * client.party.me.setBackpack('BID_105_GhostPortal', [{ channel: 'Particle', variant: 'Particle1' }]);
     */
    setBackpack(bid: string, variants?: any[]): Promise<void>;
    /**
     * Sets the party member's pickaxe
     * @param {string} pickaxe The pickaxe's id
     * @param {Array} [variants=[]] The pickaxe's variants
     * @returns {Promise<void>}
     * @example
     * client.party.me.setPickaxe('Pickaxe_ID_011_Medieval');
     * // with variants
     * client.party.me.setPickaxe('Pickaxe_ID_109_SkullTrooper', [{ channel: 'Material', variant: 'Mat2' }]);
     */
    setPickaxe(pickaxe: string, variants?: any[]): Promise<void>;
    /**
     * Sets the party member's emote
     * @param {string} eid The emote's id
     * @returns {Promise<void>}
     */
    setEmote(eid: string): Promise<void>;
    /**
     * Sets the party member's emoji
     * @param {string} emoji The emoji's id
     * @returns {Promise<void>}
     */
    setEmoji(emoji: string): Promise<void>;
    /**
     * Clears the party member's emote
     * @returns {Promise<void>}
     */
    clearEmote(): Promise<void>;
    /**
     * Clears the party member's backpack
     * @returns {Promise<void>}
     */
    clearBackpack(): Promise<void>;
    /**
     * Show the client as "in a match" in party
     * Visually, doesn't actually join a match
     * @param {?boolean} isPlaying Whether the client is playing or not
     * @param {?number} playerCount Match player count (must be between 0 and 255)
     * @param {string} startedAt When the match started (ISO date string)
     */
    setPlaying(isPlaying?: boolean | null, playerCount?: number | null, startedAt?: string): Promise<void>;
    /**
     * Sends a patch with the latest meta
     * @param {Object} updated The updated data
     * @param {Boolean} isForced Whether the patch should ignore current patches
     * @returns {Promise<void>}
     * @private
     */
    private sendPatch;
}

export const ClientUser_base: typeof import("./User");
/**
 * Represents the user of a client
 * @extends {User}
 */
export class ClientUser extends ClientUser_base {
    /**
     * @param {Client} client The main client
     * @param {Object} data The user's data
     */
    constructor(client: any, data: any);
    /**
     * The first name of the client's Epic Games account
     * @type {string}
     */
    name: string;
    /**
     * The last name of the client's Epic Games account
     * @type {string}
     */
    lastName: string;
    /**
     * The email of the client's Epic Games account
     * @type {string}
     */
    email: string;
    /**
     * The number of failed login attempts of the client's Epic Games account
     * @type {number}
     */
    failedLoginAttempts: number;
    /**
     * The last time somebody logged in on the client's Epic Games account
     * @type {Date}
     */
    lastLogin: Date;
    /**
     * The number of display name changes of the client's Epic Games account
     * @type {number}
     */
    numberOfDisplayNameChanges: number;
    /**
     * The age group of the client's Epic Games account
     * @type {string}
     */
    ageGroup: string;
    /**
     * Whether the account has no display name due to no epicgames account being linked
     * @type {boolean}
     */
    headless: boolean;
    /**
     * The country of the client's Epic Games account
     * @type {boolean}
     */
    country: boolean;
    /**
     * The preferred language of the client's Epic Games account
     * @type {string}
     */
    preferredLanguage: string;
    /**
     * Whether the client's Epic Games account can update its display name
     * @type {boolean}
     */
    canUpdateDisplayName: boolean;
    /**
     * Whether a Two-Factor-Authentification method is enabled
     * @type {boolean}
     */
    tfaEnabled: boolean;
    /**
     * Whether the email is verified (now required when creating accounts)
     * @type {boolean}
     */
    emailVerified: boolean;
    /**
     * Whether the account has been verified to be run by a minor
     * @type {boolean}
     */
    minorVerified: boolean;
    /**
     * Whether the account is expected to be run by a minor
     * @type {boolean}
     */
    minorExpected: boolean;
    /**
     * The minor status of the client's Epic Games account
     * @type {string}
     */
    minorStatus: string;
}

/**
 * Represents a Support-A-Creator code
 */
export class CreatorCode {
  /**
   * @param {Object} client The main client
   * @param {Object} data The creator code data
   */
  constructor(client: any, data: any);
  /**
   * The Support-A-Creator code
   * @type {string}
   */
  code: string;
  /**
   * The owner of the Support-A-Creator code
   * @type {User}
   */
  owner: any;
  /**
   * The status of a Support-A-Creator code
   * @type {CreatorCodeStatus}
   */
  status: any;
  /**
   * Whether the Support-A-Creator code is verified
   * @type {boolean}
   */
  verified: boolean;
}


export const Friend_base: typeof import("./User");
/**
 * Represents an Epic Games friend of a client
 * @extends {User}
 */
export class Friend extends Friend_base {
    /**
     * @param {Client} client The main client
     * @param {Object} data The friend data
     */
    constructor(client: any, data: any);
    /**
     * The connections of the friend
     * @type {Array}
     */
    connections: any[];
    /**
     * The count of mutual friends
     * @type {number}
     */
    mutualFriends: number;
    /**
     * Whether this friend is a favourite one or not
     * @type {boolean}
     */
    favorite: boolean;
    /**
     * The date when the friendship was created
     * @type {Date}
     */
    createdAt: Date;
    /**
     * The note for this friend
     * @type {string}
     */
    note: string;
    /**
     * The alias of this friend
     * @type {string}
     */
    alias: string;
    /**
     * The last recieved presence of this friend
     * @type {FriendPresence}
     */
    presence: any;
    /**
     * Whether this friend is blocked or not
     * @type {boolean}
     */
    isBlocked: boolean;
    /**
     * Whether a user is online or not
     * Can be inaccurate as it uses the receive date of the last presence
     * @type {boolean}
     * @readonly
     */
    get isOnline(): boolean;
    /**
     * Whether the client can join this friend's party or not
     * May be slighly inaccurate as it uses the last received presence
     * @type {boolean}
     * @readonly
     */
    get isJoinable(): boolean;
    /**
     * Removes this friend
     * @returns {Promise<void>}
     */
    remove(): Promise<void>;
    /**
     * Sends a message to this friend
     * @param {String} message The message that will be sent
     * @returns {Promise<FriendMessage>}
     */
    sendMessage(message: string): Promise<any>;
    /**
     * Sends a party invitation to this friend
     * @returns {Promise<SentPartyInvitation>}
     */
    invite(): Promise<import("./SentPartyInvitation")>;
    /**
     * Blocks this friend
     * @returns {Promise<void>}
     */
    block(): Promise<void>;
    /**
     * Unblocks this friend
     * @returns {Promise<void>}
     */
    unblock(): Promise<void>;
    /**
     * Joins this friend's party
     * @returns {Promise<void>}
     */
    joinParty(): Promise<void>;
}

/**
 * Represents a friend message
 */
export class FriendMessage {
  constructor(client: any, data: any);
  /**
   * The content of the friend message
   * @type {string}
   */
  content: string;
  /**
   * The friend who sent the message
   * @type {Friend}
   */
  author: any;
  /**
   * Replies to the friend message
   * @param {string} message The message that will be sent
   * @returns {Promise<FriendMessage>}
   */
  reply(message: string): Promise<FriendMessage>;
}


/**
 * Represents the presence of a friend
 */
export class FriendPresence {
  /**
   * @param {Object} client The main client
   * @param {Object} data The presence's data
   * @param {string} fromId The id of friend this presence belongs to
   */
  constructor(client: any, data: any, fromId: string);
  /**
   * The friend this presence belongs to
   * @type {string}
   */
  friend: string;
  /**
   * The status of this friend presence
   * @type {string}
   * @example
   * console.log(friendPresence.status); // Battle Royale Lobby - 1 / 16
   */
  status: string;
  /**
   * The date when this presence was recieved
   * @type {Date}
   */
  recievedAt: Date;
  /**
   * Whether the friend is in Kairos (Party Hub) or not
   * @type {boolean}
   */
  isInKairos: boolean;
  /**
   * Whether the friend is playing or not
   * @type {boolean}
   */
  isPlaying: boolean;
  /**
   * Whether the friend's party is joinable or not
   * @type {boolean}
   */
  isJoinable: boolean;
  /**
   * Whether the friend has voice support or not
   * @type {boolean}
   */
  hasVoiceSupport: boolean;
  /**
   * The id of the game session the friend is currently in
   * @type {?string}
   */
  sessionId: string | null;
  /**
   * The Kairos avatar of this friend presence
   * @type {FPKairosAvatar}
   */
  avatar: any;
  /**
   * The rating of the friend's SaveTheWorld homebase
   * @type {?string}
   */
  homebaseRating: string | null;
  /**
   * The subgame the friend is in
   * @type {?string}
   */
  subGame: string | null;
  /**
   * Whether the friend is in an unjoinable match or not
   * @type {?boolean}
   */
  isInUnjoinableMatch: boolean | null;
  /**
   * The friend's current selected playlist
   * @type {?string}
   */
  playlist: string | null;
  /**
   * The member count of the friend's party
   * @type {?number}
   */
  partySize: number | null;
  /**
   * The max members of the friend's party
   * @type {?number}
   */
  partyMaxSize: number | null;
  /**
   * The join key of the game session the friend is currently in (if the game session is joinable)
   * @type {?string}
   */
  gameSessionJoinKey: string | null;
  /**
   * The stats of the game the friend is currently in
   * @type {FPGameplayStats}
   */
  gameplayStats: any;
  /**
   * The data of the party this friend is currently in
   * @type {FPPartyData}
   */
  partyData: any;
}

/**
 * Represents a party
 */
export class Party {
  /**
   * Lookups for the client user's party
   * @param {Client} client The main client
   * @returns {Promise<Party>}
   */
  static LookupSelf(client: any): Promise<Party>;
  /**
   * Lookups for a public party
   * @param {Client} client The main client
   * @param {string} id The id of the party
   * @returns {Promise<Party>}
   */
  static Lookup(client: any, id: string): Promise<Party>;
  /**
   * Creates a party
   * @param {Client} client The main client
   * @returns {Promise<Party>}
   */
  static Create(client: any, config: any): Promise<Party>;
  /**
   * @param {Client} client The main client
   * @param {Object} data The party's data
   */
  constructor(client: any, data: any);
  /**
   * The id of this party
   * @type {string}
   */
  id: string;
  /**
   * The date when this party was created
   * @type {Date}
   */
  createdAt: Date;
  /**
   * The config of this party
   * @type {ClientOptions.partyConfig}
   */
  config: any;
  /**
   * The members of this party
   * @type {List}
   */
  members: import("../Util/List");
  /**
   * Whether the party is currently sending a patch
   * @type {boolean}
   */
  currentlyPatching: boolean;
  /**
   * The patches queue
   * @type {Array}
   */
  patchQueue: any[];
  /**
   * The meta of this party
   * @type {PartyMeta}
   */
  meta: import("./PartyMeta");
  /**
   * The chat room of this party
   * @type {PartyChat}
   */
  chat: import("./PartyChat");
  /**
   * The revision of this party
   * @type {number}
   */
  revision: number;
  /**
   * If squad assignments should be auto patched
   * @type {boolean}
   */
  patchAssignmentsLocked: boolean;
  /**
   * The client's party member
   * @type {ClientPartyMember}
   * @readonly
   */
  get me(): import("./ClientPartyMember");
  /**
   * The leader of this party
   * @type {PartyMember}
   * @readonly
   */
  get leader(): import("./PartyMember");
  /**
   * Whether this party is private or not
   * @type {boolean}
   * @readonly
   */
  get isPrivate(): boolean;
  /**
   * Joins this party
   * @returns {Promise<void>}
   */
  join(): Promise<void>;
  /**
   * Sends an updated presence
   * @returns {Promise<void>}
   * @private
   */
  private patchPresence;
  /**
   * Sends a message to the chat of this party
   * @param {string} message The message that will be sent
   * @returns {Promise<PartyMessage>}
   */
  sendMessage(message: string): Promise<any>;
  /**
   * Sends a party invitation to a friend
   * @param {string} friend The friend's id or display name
   * @returns {Promise<SentPartyInvitation>}
   */
  invite(friend: string): Promise<import("./SentPartyInvitation")>;
  /**
   * Leaves this party
   * @param {boolean} createNew Whether a new party should be created or not
   * @returns {Promise<void>}
   */
  leave(createNew?: boolean): Promise<void>;
  /**
   * Sends a patch with the latest meta
   * @param {Object} updated The updated data
   * @param {Array} deleted The deleted data
   * @param {boolean} isForced Whether this patch should ignore this.currentlyPatching
   * @returns {Promise<void>}
   * @private
   */
  private sendPatch;
  /**
   * Updates the party's meta
   * @param {Object} data The updated data
   * @returns {void}
   * @private
   */
  private update;
  /**
   * Sets this party's privacy
   * @param {PartyPrivacy} privacy The new privacy
   * @param {?boolean} patch Whether to also patch the party or not (Should always be true)
   * @returns {Promise<Object>} The updated and deleted meta keys and values
   */
  setPrivacy(privacy: any, patch?: boolean | null): Promise<any>;
  /**
   * Sets this party's custom matchmaking key
   * @param {string} key The custom matchmaking key
   * @returns {Promise<void>}
   */
  setCustomMatchmakingKey(key: string): Promise<void>;
  /**
   * Promotes a party member
   * @param {string} member The id or display name of the member that will be promoted
   * @returns {Promise<void>}
   */
  promote(member: string): Promise<void>;
  /**
   * Kicks a party member
   * @param {string} member The member that will be kicked
   * @returns {Promise<void>}
   */
  kick(member: string): Promise<void>;
  /**
   * Refreshes the party members' positions
   * @returns {Promise<void>}
   * @private
   */
  private refreshSquadAssignments;
  /**
   * Hides all party members except for the client
   * @param {boolean} hide whether to hide or unhide
   */
  hideMembers(hide?: boolean): Promise<void>;
  /**
   * Set the parties playlist
   * @param {Playlist} playlist the playlist
   */
  setPlaylist(playlist?: any): Promise<void>;
}

/**
 * Represents the chat room of a party
 */
export class PartyChat {
  /**
   * @param {Object} party The chatroom's party
   */
  constructor(party: any);
  /**
   * Whether the client is connected to the chat room or not
   * @type {boolean}
   */
  connected: boolean;
  /**
   * The jid of this chat room
   * @type {string}
   */
  jid: string;
  /**
   * The nick of the client's user in this chat room
   * @type {string}
   */
  nick: string;
  /**
   * Sends a message to this chat room
   * @param {string} message The message to be sent
   * @returns {Promise<PartyMessage>}
   */
  send(message: string): Promise<import("./PartyMessage")>;
  /**
   * Joins this chat room
   * @returns {Promise<void>}
   */
  join(): Promise<void>;
  /**
   * Leaves this chat room
   * @returns {Promise<void>}
   */
  leave(): Promise<void>;
  /**
   * Waits until the client is connected to this chatroom
   * @returns {Promise<boolean>}
   */
  waitForConnected(): Promise<boolean>;
}

/**
 * Represents party invitation
 */
export class PartyInvitation {
  /**
   * Creates an invite data object
   * @param {Client} client The main client
   * @param {string} pingerId The pinger's account id
   * @param {Object} data The invite data
   * @returns {Object}
   * @private
   */
  private static createInvite;
  /**
   * @param {Client} client The main client
   * @param {Party} party The invitation's party
   * @param {Object} data The invitation's data
   */
  constructor(client: any, party: any, data: any);
  Client: any;
  /**
   * The party of this invitation
   * @type {Party}
   */
  party: any;
  /**
   * The friend that sent this invitation
   * @type {Friend}
   */
  sender: any;
  /**
   * The Date when the party invitation was created
   * @type {Date}
   */
  createdAt: Date;
  /**
   * The Date when the party invitation will expire
   * @type {Date}
   */
  expiresAt: Date;
  /**
   * Whether this party invitation is expired or not
   * @type {boolean}
   */
  expired: boolean;
  /**
   * Accepts this party invitation
   * @returns {Promise<void>}
   */
  accept(): Promise<void>;
  /**
   * Declines this party invitation
   * @returns {Promise<void>}
   */
  decline(): Promise<void>;
}

/**
 * Represents a party member
 */
declare class PartyMember {
  /**
   * @param party The member's party
   * @param data The member's data
   */
  constructor(party: any, data: any);
  /**
   * The id of the party member
   * @type {string}
   */
  id: string;
  /**
   * The display name of the party member
   * @type {string}
   */
  displayName: string;
  /**
   * The role of the party member
   * @type {string}
   */
  role: string;
  /**
   * The Date when this member joined the party
   * @type {Date}
   */
  joinedAt: Date;
  /**
   * The meta of this party member
   * @type {PartyMemberMeta}
   */
  meta: import("./PartyMemberMeta");
  /**
   * The id of this party member's pickaxe
   * @type {string}
   * @readonly
   */
  get pickaxe(): string;
  /**
   * The id of this party member's outfit
   * @type {string}
   * @readonly
   */
  get outfit(): string;
  /**
   * The id of this party member's emote
   * @type {string}
   * @readonly
   */
  get emote(): string;
  /**
   * The id of this party member's backpack
   * @type {string}
   * @readonly
   */
  get backpack(): string;
  /**
   * Whether this party member is ready or not
   * @type {boolean}
   * @readonly
   */
  get isReady(): boolean;
  /**
   * Whether this member is the leader of the party
   * @type {boolean}
   * @readonly
   */
  get isLeader(): boolean;
  /**
   * Kicks this member from the party
   * @returns {Promise<void>}
   */
  kick(): Promise<void>;
  /**
   * Promotes this member to the party leader
   * @returns {Promise<void>}
   */
  promote(): Promise<void>;
  /**
   * Fetch or update this members display name
   */
  fetch(): Promise<void>;
  /**
   * Updates the party member's meta
   * @param {Object} data The updated meta
   * @returns {void}
   * @private
   */
  private update;
  revision: any;
}

/**
 * Represents a party message
 */
export class PartyMessage {
  constructor(client: any, data: any);
  /**
   * The content of the party message
   * @type {string}
   */
  content: string;
  /**
   * The author of the party message
   * @type {PartyMember}
   */
  author: any;
  /**
   * Replies to this party message
   * @param {string} message The message
   * @returns {Promise<PartyMessage>}
   */
  reply(message: string): Promise<PartyMessage>;
}

export const PartyMeta_base: typeof import("../Util/Meta");
/**
 * Represents the meta of a party
 * @extends {Meta}
 * @private
 */
export class PartyMeta extends PartyMeta_base {
    /**
     * @param {Party} party The party
     * @param {Object} meta The meta
     */
    constructor(party: any, meta: any);
    /**
     * Updates the party members' positions
     * @returns {Object}
     */
    updateSquadAssignments(): any;
}
export const PendingFriend_base: typeof import("./User");
/**
 * Represents a pending friend / friend request
 * @extends {User}
 */
export class PendingFriend extends PendingFriend_base {
    /**
     * @param {Client} client The main client
     * @param {Object} data The pending friend data
     */
    constructor(client: any, data: any);
    /**
     * The direction of the friend request
     * @type {PendingFriendDirection}
     */
    direction: any;
    /**
     * The Date when the friend request was created
     * @type {?Date}
     */
    createdAt: Date | null;
    /**
     * Accepts the friend request
     * @returns {Promise<Friend>}
     */
    accept(): Promise<any>;
    /**
     * Rejects this friend request
     * @returns {Promise<void>}
     */
    reject(): Promise<void>;
    /**
     * Aborts this friend request
     * @returns {Promise<void>}
     */
    abort(): Promise<void>;
    /**
     * Blocks this request's friend
     * @returns {Promise<void>}
     */
    block(): Promise<void>;
}
/**
 * Represents a party invitation sent by the client's user
 */
export class SentPartyInvitation {
  /**
   * @param {Client} client The main client
   * @param {Party} party The invitation's party
   * @param {Friend} receiver The invitation's receiver
   * @param {Object} data The invitation's data
   */
  constructor(client: any, party: any, receiver: any, data: any);
  Client: any;
  /**
   * The party of this invitation
   * @type {Party}
   */
  party: any;
  /**
   * The friend who received this party invitation
   * @type {Friend}
   */
  receiver: any;
  /**
   * The Date when this party invitation was created
   * @type {Date}
   */
  createdAt: Date;
  /**
   * Whether this party invitation is expired or not
   * @type {boolean}
   */
  expired: boolean;
  /**
   * Cancels the party invitation
   * @returns {Promise<void>}
   */
  cancel(): Promise<void>;
  /**
   * Resends the party invitation
   * @returns {Promise<void>}
   */
  resend(): Promise<void>;
}
/**
 * Represents a user
 */
export class User {
  /**
   * @param {Client} client The main client
   * @param {Object} data The user's data
   */
  constructor(client: any, data: any);
  /**
   * The user's name
   * @type {string}
   */
  displayName: string;
  /**
   * The user's id
   * @type {string}
   */
  id: string;
  /**
   * The user's external auths
   * @type {Object}
   */
  externalAuths: any;
  /**
   * The user's linked accounts
   * @type {Object}
   */
  links: any;
  /**
   * Adds this user as a friend or accepts its friend request
   * @returns {Promise<void>}
   */
  addFriend(): Promise<void>;
  /**
   * Updates this user's display name, external auths and links
   * @returns {Promise<User>} This user
   */
  fetch(): Promise<User>;
  /**
   * Fetches the v2 stats for this user
   * @param {?number} startTime The timestamp to start fetching stats from; can be null/undefined for lifetime
   * @param {?number} endTime The timestamp to stop fetching stats from; can be undefined for lifetime
   * @returns {Promise<Object>} The user's stats
   */
  fetchStats(startTime: number | null, endTime: number | null): Promise<any>;
}
