import { auth } from '@/auth';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support';

export const { getClient } = registerApolloClient(() => {
  const authLink = setContext(async (_, { headers, skipAuthentication }) => {
    const session = skipAuthentication ? undefined : await auth();
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
