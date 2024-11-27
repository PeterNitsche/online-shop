import { Session } from 'next-auth';

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support';

export const { getClient } = registerApolloClient(() => {
  const authLink = setContext(async (_, { headers }) => {
    const baseUrl = typeof window === 'undefined' ? process.env.AUTH_URL : '';

    const res = await fetch(`${baseUrl}/api/auth/session`);

    if (!res.ok) {
      throw new Error('Error getting session');
    }

    const session: Session = await res.json();
    console.log('Session', session);
    return {
      headers: {
        ...headers,
        accessToken: session?.user.accessToken || '',
        authorization: session?.user.authToken || '',
      },
    };
  });

  const httpLink = createHttpLink({
    uri: 'https://api-dev.shopi.co.ke/graphql',
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
});
