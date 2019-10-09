import Router from 'next/router';
import nextCookie from 'next-cookies';
import {AuthApi} from 'services';

export const handleAuthSSR = async ctx => {
  const {token} = nextCookie(ctx);

  try {
    const api = new AuthApi();
    api.setup();
    const response = await api.checkToken(token);
    const message = response.kind === 'ok' ? response.message : null;
    console.debug('token ping:', message);
  } catch (err) {
    // in case of error
    console.debug(err);
    console.debug('redirecting back to main page');
    // redirect to login
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: '/login',
      });
      ctx.res.end();
    } else {
      Router.push('/admin');
    }
  }
};
