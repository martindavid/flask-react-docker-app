import React from 'react';
import {NextPageContext, NextComponentType} from 'next';
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';
import Router from 'next/router';
import {getDisplayName} from 'utils';

export function login(token: string) {
  cookie.set('token', token, {expires: 1});
  Router.push('/profile');
}

export function logout() {
  cookie.remove('token');
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now().toString());
  Router.push('/login');
}

export function auth(ctx: NextPageContext) {
  const {token} = nextCookie(ctx);

  if (ctx.req && !token) {
    ctx.res.writeHead(302, {Location: '/login'});
    ctx.res.end();
  }

  if (!token) {
    Router.push('/login');
  }

  return token;
}

export const withAuthSync = <P extends object>(
  Component: NextComponentType<P>,
) => {
  return class WithAuthSync extends React.Component<P> {
    static displayName = `withAuthSync(${getDisplayName(Component)})`;

    static async getInitialProps(ctx) {
      const token = auth(ctx);

      const componentProps =
        Component.getInitialProps && (await Component.getInitialProps(ctx));

      return {...componentProps, token};
    }

    componentDidMount() {
      window.addEventListener('storage', this.syncLogout);
    }

    componentWillUnmount() {
      window.removeEventListener('storage', this.syncLogout);
      window.localStorage.removeItem('logout');
    }

    syncLogout = event => {
      if (event.key === 'logout') {
        Router.push('/login');
      }
    };

    render() {
      return <Component {...(this.props as P)} />;
    }
  };
};
