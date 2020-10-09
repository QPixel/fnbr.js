export = Authenticator;
/**
 * Represents the authentication manager of a client
 * @private
 */
declare class Authenticator {
    /**
     * @param {Client} client The main client
     */
    constructor(client: import("."));
    /**
     * The main client
     * @type {Client}
     */
    Client: import(".");
    /**
     * The authentification data
     * @type {AuthData}
     */
    auths: any;
    /**
     * The reauthentification data
     * @type {AuthData}
     */
    reauths: any;
    /**
     * The client's account
     * @type {AuthAccount}
     */
    account: any;
    /**
     * Starts the authentication process
     * @returns {Promise<Object>}
     */
    authenticate(): Promise<any>;
    /**
     * Checks if a token refresh is needed and reauthenticates if needed
     * @param {boolean} [forceVerify=false] Whether the access token should be verified
     */
    refreshToken(forceVerify?: boolean): Promise<any>;
    /**
     * Reauthenticates / Refreshes the access token
     * @returns {Promise<Object>}
     */
    reauthenticate(): Promise<any>;
    /**
     * Authenticates using device auth
     * @param {Object|string|function} deviceAuth The device auth credentials
     * @returns {Promise<Object>}
     */
    deviceAuthAuthenticate(deviceAuth: any | string | Function): Promise<any>;
    /**
     * Authenticates using an exchange code
     * @param {string|function} exchangeCode The exchange code
     * @param {BasicToken} [token=FORTNITE_IOS] The basic token that will be used
     * @returns {Promise<Object>}
     */
    exchangeCodeAuthenticate(exchangeCode: string | Function, token?: any): Promise<any>;
    /**
     * Authenticates using an authorization code
     * @param {string|function} authorizationCode The authorization code
     * @returns {Promise<Object>}
     */
    authorizationCodeAuthenticate(authorizationCode: string | Function): Promise<any>;
    /**
     * Authenticates using a refresh token
     * @param {string|function} refreshToken The refresh token
     * @returns {Promise<Object>}
     */
    refreshTokenAuthenticate(refreshToken: string | Function): Promise<any>;
    /**
     * Obtains an access token
     * @param {string} grant_type The grant type
     * @param {Object} valuePair The token value pair
     * @param {BasicToken} token The basic token
     * @returns {Promise<Object>}
     */
    getOauthToken(grant_type: string, valuePair: any, token: any): Promise<any>;
    /**
     * Generates a device auth
     * @param {Object} tokenResponse The response from the oauth token request
     * @returns {Promise<Object>}
     */
    generateDeviceAuth(tokenResponse: any): Promise<any>;
    /**
     * Accepts EULA if needed
     * @returns {Promise<Object>}
     */
    acceptEULA(): Promise<any>;
}
