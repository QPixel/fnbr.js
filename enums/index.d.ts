/**
 * Represents the privacy of a party:
 * * `PUBLIC` - anyone can join the party
 * * `FRIENDS_ALLOW_FRIENDS_OF_FRIENDS` - the client's friends and their friends can join the party
 * * `FRIENDS` - the client's friends can join the party
 * * `PRIVATE_ALLOW_FRIENDS_OF_FRIENDS` - the client's friends and their friends can join the party only with an invite
 * * `PRIVATE` - party is not joinable without an invite from the leader
 */
export type PartyPrivacy = string;
export var PartyPrivacy: Readonly<{
    PUBLIC: {
        partyType: string;
        inviteRestriction: string;
        onlyLeaderFriendsCanJoin: boolean;
        presencePermission: string;
        invitePermission: string;
        acceptingMembers: boolean;
    };
    FRIENDS_ALLOW_FRIENDS_OF_FRIENDS: {
        partyType: string;
        inviteRestriction: string;
        onlyLeaderFriendsCanJoin: boolean;
        presencePermission: string;
        invitePermission: string;
        acceptingMembers: boolean;
    };
    FRIENDS: {
        partyType: string;
        inviteRestriction: string;
        onlyLeaderFriendsCanJoin: boolean;
        presencePermission: string;
        invitePermission: string;
        acceptingMembers: boolean;
    };
    PRIVATE_ALLOW_FRIENDS_OF_FRIENDS: {
        partyType: string;
        inviteRestriction: string;
        onlyLeaderFriendsCanJoin: boolean;
        presencePermission: string;
        invitePermission: string;
        acceptingMembers: boolean;
    };
    PRIVATE: {
        partyType: string;
        inviteRestriction: string;
        onlyLeaderFriendsCanJoin: boolean;
        presencePermission: string;
        invitePermission: string;
        acceptingMembers: boolean;
    };
}>;
/**
 * Represents the platform of an online Fortnite player:
 * * `WINDOWS`
 * * `MAC`
 * * `PLAYSTATION`
 * * `XBOX`
 * * `SWITCH`
 * * `IOS`
 * * `ANDROID`
 */
export type Platform = string;
export var Platform: Readonly<{
    WINDOWS: string;
    MAC: string;
    PLAYSTATION: string;
    XBOX: string;
    SWITCH: string;
    IOS: string;
    ANDROID: string;
}>;
/**
 * Represents a playlist:
 * * `SOLO`
 * * `DUO`
 * * `SQUAD`
 * * `CREATIVE` - creative don't fill
 * * `CREATIVE_PLAY` - creative fill
 */
export type Playlist = string;
export var Playlist: Readonly<{
    SOLO: {
        playlistName: string;
        tournamentId: string;
        eventWindowId: string;
    };
    DUO: {
        playlistName: string;
        tournamentId: string;
        eventWindowId: string;
    };
    SQUAD: {
        playlistName: string;
        tournamentId: string;
        eventWindowId: string;
    };
    CREATIVE: {
        playlistName: string;
        tournamentId: string;
        eventWindowId: string;
    };
    CREATIVE_PLAY: {
        playlistName: string;
        tournamentId: string;
        eventWindowId: string;
    };
}>;
/**
 * Represents a language (only the ones that are supported by Fortnite):
 * * `ARABIC`
 * * `GERMAN`
 * * `ENGLISH`
 * * `SPANISH`
 * * `FRENCH`
 * * `ITALIAN`
 * * `JAPANESE`
 * * `POLISH`
 * * `RUSSIAN`
 * * `TURKISH`
 */
export type Language = string;
export var Language: Readonly<{
    ARABIC: string;
    GERMAN: string;
    ENGLISH: string;
    SPANISH: string;
    FRENCH: string;
    ITALIAN: string;
    JAPANESE: string;
    POLISH: string;
    RUSSIAN: string;
    TURKISH: string;
}>;
/**
 * Represents a Fortnite gamemode:
 * * `BATTLE_ROYALE`
 * * `CREATIVE`
 * * `SAVE_THE_WORLD`
 */
export type Gamemode = string;
export var Gamemode: Readonly<{
    BATTLE_ROYALE: string;
    CREATIVE: string;
    SAVE_THE_WORLD: string;
}>;
/**
 * Represents a Kairos (Party Hub) profile color:
 * * `TEAL`
 * * `SWEET_RED`
 * * `LIGHT_ORANGE`
 * * `GREEN`
 * * `LIGHT_BLUE`
 * * `DARK_BLUE`
 * * `PINK`
 * * `RED`
 * * `GRAY`
 * * `ORANGE`
 * * `DARK_PURPLE`
 * * `LIME`
 * * `INDIGO`
 */
export type KairosColor = string;
export var KairosColor: Readonly<{
    TEAL: string;
    SWEET_RED: string;
    LIGHT_ORANGE: string;
    GREEN: string;
    LIGHT_BLUE: string;
    DARK_BLUE: string;
    PINK: string;
    RED: string;
    GRAY: string;
    ORANGE: string;
    DARK_PURPLE: string;
    LIME: string;
    INDIGO: string;
}>;
/**
 * Represents a default skin:
 * * `FEMALE_1`
 * * `FEMALE_2`
 * * `FEMALE_3`
 * * `FEMALE_4`
 * * `MALE_1`
 * * `MALE_2`
 * * `MALE_3`
 * * `MALE_4`
 */
export type DefaultSkin = string;
export var DefaultSkin: Readonly<{
    FEMALE_1: string;
    FEMALE_2: string;
    FEMALE_3: string;
    FEMALE_4: string;
    MALE_1: string;
    MALE_2: string;
    MALE_3: string;
    MALE_4: string;
}>;
/**
 * Represents a season's start time:
 * * `CH1_S1`
 * * `CH1_S2`
 * * `CH1_S3`
 * * `CH1_S4`
 * * `CH1_S5`
 * * `CH1_S6`
 * * `CH1_S7`
 * * `CH1_S8`
 * * `CH1_S9`
 * * `CH1_S10`
 * * `CH2_S1`
 * * `CH2_S2`
 * * `CH2_S3`
 * * `CH2_S4`
 */
export type SeasonStart = string;
export var SeasonStart: Readonly<{
    CH1_S1: number;
    CH1_S2: number;
    CH1_S3: number;
    CH1_S4: number;
    CH1_S5: number;
    CH1_S6: number;
    CH1_S7: number;
    CH1_S8: number;
    CH1_S9: number;
    CH1_S10: number;
    CH2_S1: number;
    CH2_S2: number;
    CH2_S3: number;
    CH2_S4: number;
}>;
/**
 * Represents a season's end time:
 * * `CH1_S1`
 * * `CH1_S2`
 * * `CH1_S3`
 * * `CH1_S4`
 * * `CH1_S5`
 * * `CH1_S6`
 * * `CH1_S7`
 * * `CH1_S8`
 * * `CH1_S9`
 * * `CH1_S10`
 * * `CH2_S1`
 * * `CH2_S2`
 * * `CH2_S3`
 * * `CH2_S4`
 */
export type SeasonEnd = string;
export var SeasonEnd: Readonly<{
    CH1_S1: number;
    CH1_S2: number;
    CH1_S3: number;
    CH1_S4: number;
    CH1_S5: number;
    CH1_S6: number;
    CH1_S7: number;
    CH1_S8: number;
    CH1_S9: number;
    CH1_S10: number;
    CH2_S1: number;
    CH2_S2: number;
    CH2_S3: number;
}>;
/**
 * Represents a creator code status:
 * * `ACTIVE`
 * * `INACTIVE`
 */
export type CreatorCodeStatus = string;
export var CreatorCodeStatus: readonly string[];
/**
 * Represents a pending friend's direction:
 * * `INCOMING`
 * * `OUTGOING`
 */
export type PendingFriendDirection = string;
export var PendingFriendDirection: readonly string[];
