import { listenerCount } from "../Client";

/**
 * Represents the HTTP manager of a client
 * @private
 */
export declare class Http {
  /**
   * @param {Client} client The main client
   */
  constructor(client: any);
  /**
   * The main client
   * @type {Client}
   */
  Client: any;
  /**
   * The cookie jar
   * @type {CookieJar}
   */
  jar: any;
  /**
   * The default requests options
   * @type {HttpOptions}
   */
  options: any;
  /**
   * The request method
   * @type {RequestAPI}
   */
  request: any;
  /**
   * Sends a HTTP request
   * @param {boolean} checkToken Whether the access token should be checked if it's valid
   * @param {string} method The HTTP method
   * @param {string} url The uri
   * @param {string} auth The authorization header
   * @param {Object} headers The headers
   * @param {Object} data The body
   * @param {Object} form The form
   * @returns {Promise<Object>}
   */
  send(checkToken: boolean, method: string, url: string, auth: string, headers: any, data: any, form: any): Promise<any>;
}
/**
 * A Map used mainly for cached values throughout fnbr.js but with some extra functions.
 * Inspired by the simplicity of discord.js's collections.
 * @extends {Map}
 */
export declare class List extends Map<any, any> {
  /**
   * @param {Iterable} iterable The iterable that will be used to fill the List
   */
  constructor(iterable: Iterable<any>);
  /**
   * Returns a list of all key-value-pairs
   */
  toArray(): {}[];
  /**
   * Finds a value with a function
   * @param {Function} fn function
   */
  find(fn: Function): any;
  /**
   * Filter this list
   * @param {Function} fn function
   * @returns {List}
   */
  filter(fn: Function): List;
  /**
   * Checks if list has a value using a function
   * @param {Function} fn function
   */
  some(fn: Function): boolean;
  /**
   * Maps this list (like Array.map)
   * @param {Function} fn function
   */
  map(fn: Function): any[];
}

/**
 * Represents a meta structure used for parties
 * @private
 */
export declare class Meta {
  schema: {};
  /**
   * Sets a value
   * @param {string} prop The property
   * @param {*} val The value
   * @param {boolean} isRaw Whether the value is raw or not
   * @param {boolean} isObject Whether the value is an object or not
   * @returns {*} The setted value
   */
  set(prop: string, val: any, isRaw: boolean, isObject: boolean): any;
  /**
   * Gets a value by its property
   * @param {string} prop The property
   * @param {boolean} isRaw Whether the value should be returned raw
   * @returns {*} The value of the provided property
   */
  get(prop: string, isRaw: boolean): any;
  /**
   * Updates the schema
   * @param {Object} schema The new schema
   * @param {boolean} isRaw Whether the values are raw or not
   * @returns {void}
   */
  update(schema: any, isRaw: boolean): void;
  /**
   * Removes provided schema properties
   * @param {Array} schema The properties to delete
   * @returns {void}
   */
  remove(schema: any[]): void;
}
