import {
  Class, Config, Context, Hook, HookDecorator, HttpResponseBadRequest,
  HttpResponseUnauthorized,
  ServiceManager
} from '../core';
import { removeSessionCookie } from './remove-session-cookie';
import { Session } from './session';
import { SessionStore } from './session-store';

class InvalidRequestResponse extends HttpResponseBadRequest {

  constructor(description: string) {
    super({ code: 'invalid_request', description });
  }

}

class InvalidTokenResponse extends HttpResponseUnauthorized {

  constructor(description: string) {
    super({ code: 'invalid_token', description });
    this.setHeader(
      'WWW-Authenticate',
      `error="invalid_token", error_description="${description}"`
    );
  }

}

export interface TokenOptions {
  user?: (id: string|number) => Promise<any|undefined>;
  store: Class<SessionStore>;
  cookie?: boolean;
}

export function Token(required: boolean, options: TokenOptions): HookDecorator {
  return Hook(async (ctx: Context, services: ServiceManager) => {
    const cookieName = Config.get<string>('settings.session.cookie.name', 'auth');

    /* Validate the request */

    let token: string;
    if (options.cookie) {
      const content = ctx.request.cookies[cookieName] as string|undefined;

      if (!content) {
        if (!required) {
          return;
        }
        return new InvalidRequestResponse('Auth cookie not found.');
      }

      token = content;
    } else {
      const authorizationHeader = ctx.request.get('Authorization') as string|undefined || '';

      if (!authorizationHeader) {
        if (!required) {
          return;
        }
        return new InvalidRequestResponse('Authorization header not found.');
      }

      const content = authorizationHeader.split('Bearer ')[1] as string|undefined;
      if (!content) {
        return new InvalidRequestResponse('Expected a bearer token. Scheme is Authorization: Bearer <token>.');
      }

      token = content;
    }

    /* Verify the token */

    const sessionID = Session.verifyTokenAndGetId(token);
    if (!sessionID) {
      const response = new InvalidTokenResponse('invalid token');
      if (options.cookie) {
        removeSessionCookie(response);
      }
      return response;
    }

    const store = services.get(options.store);
    const session = await store.read(sessionID);
    const userId: any = session.get('userId');

    if (!options.user) {
      ctx.user = userId;
      return;
    }

    const user = await options.user(userId);
    if (!user) {
      return new InvalidTokenResponse('The token does not match any user.');
    }
    ctx.user = user;
  });
}
