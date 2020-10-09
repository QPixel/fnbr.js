export = XMPP;
/**
 * Represents the XMPP manager of a client
 * @private
 */
declare class XMPP {
    /**
     * @param {Object} client The main client
     */
    constructor(client: any);
    /**
     * The main client
     * @type {Client}
     */
    Client: any;
    /**
     * The XMPP connection stream
     * @type {?Agent}
     */
    stream: any;
    /**
     * Whether the XMPP client is connected or not
     * @type {boolean}
     */
    connected: boolean;
    /**
     * Whether the XMPP client is reconnecting or not
     * @type {boolean}
     */
    isReconnecting: boolean;
    /**
     * The XMPP client's UUID
     * @type {string}
     */
    uuid: string;
    /**
     * The XMPP client's resource
     * @type {?string}
     */
    resource: string | null;
    /**
     * This stores the parties which the client got kicked from
     * You can't accept an invite of a party you got kicked from
     * @type {Array}
     */
    kickedPartyIds: any[];
    /**
     * Setups the XMPP stream and events
     * @returns {void}
     */
    setup(): void;
    /**
     * Connects the XMPP client to Epic Games' services
     * @param {boolean} isReconnect Whether this is a reconnection or not
     * @returns {Promise<Object>}
     */
    connect(isReconnect?: boolean): Promise<any>;
    /**
     * Disconnects the XMPP client
     * @returns {Promise<Object>}
     */
    disconnect(): Promise<any>;
    /**
     * Reconnects the XMPP client
     * @returns {Promise<Object>}
     */
    reconnect(): Promise<any>;
    /**
     * Setups the XMPP events
     * @returns {void}
     */
    setupEvents(): void;
    /**
     * Sends a presence status
     * @param {string} [status] The status message; can be null/undefined if you want to reset it
     * @param {string} [to] The XMPP address of the friend; can be undefined if you want to update the presence status for all friends
     * @returns {void}
     */
    sendStatus(status?: string, to?: string): void;
}
