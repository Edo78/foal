// FoalTS
import { signToken, verifySignedToken } from '../common';
import { Config } from '../core';

/**
 * Representation of a server/database session.
 *
 * @export
 * @class Session
 */
export class Session {

  /**
   * Verify a session token and return the sessionID if the token is valid.
   *
   * @static
   * @param {string} token - The session token to verify.
   * @returns {(string|false)} False if the token is invalid. Otherwise, the returned value is the session ID.
   * @memberof Session
   */
  static verifyTokenAndGetId(token: string): string|false {
    const secret = Config.get<string|undefined>('settings.session.secret');
    if (!secret) {
      throw new Error('[CONFIG] You must provide a secret with the configuration key settings.session.secret.');
    }

    return verifySignedToken(token, secret);
  }

  private modified = false;

  constructor(readonly sessionID: string, private sessionContent: any, readonly createdAt: number) {
    if (sessionID.includes('.')) {
      throw new Error('A session ID cannot include dots.');
    }
  }

  /**
   * Return true if an element was added/replaces in the session
   *
   * @readonly
   * @type {boolean}
   * @memberof Session
   */
  get isModified(): boolean {
    return this.modified;
  }

  /**
   * Add/replace an element in the session. This operation is not saved
   * in the saved unless you call SessionStore.update(session).
   *
   * @param {string} key
   * @param {*} value
   * @memberof Session
   */
  set(key: string, value: any): void {
    this.sessionContent[key] = value;
    this.modified = true;
  }

  /**
   * The value of an element in the session content.
   *
   * @template T
   * @param {string} key - The property key
   * @returns {(T | undefined)} The property valye
   * @memberof Session
   */
  get<T>(key: string): T | undefined;
  get<T>(key: string, defaultValue: any): T;
  get(key: string, defaultValue?: any): any {
    if (!this.sessionContent.hasOwnProperty(key)) {
      return defaultValue;
    }
    return this.sessionContent[key];
  }

  /**
   * Get the session token. This token is used by `@TokenRequired` and `@TokenOptional` to retreive
   * the session and the authenticated user if she/he exists.
   *
   * @returns {string} - The session token.
   * @memberof Session
   */
  getToken(): string {
    const secret = Config.get<string|undefined>('settings.session.secret');
    if (!secret) {
      throw new Error('[CONFIG] You must provide a secret with the configuration key settings.session.secret.');
    }
    return signToken(this.sessionID, secret);
  }

  /**
   * Get a copy of the session content.
   *
   * @returns {object} - The session content copy.
   * @memberof Session
   */
  getContent(): object {
    return { ...this.sessionContent };
  }

}
