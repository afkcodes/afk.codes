import type { Config } from 'vike/types';

// https://vike.dev/config
export default {
  /* To enable Client-side Routing:
  clientRouting: true,
  // !! WARNING !! Before doing so, read https://vike.dev/clientRouting */

  // See https://vike.dev/data-fetching
  passToClient: ['pageProps', 'urlPathname'],
  meta: {
    title: {
      // Make the value of `title` available on both the server- and client-side
      env: { server: true, client: true },
    },
    description: {
      // Make the value of `description` available only on the server-side
      env: { server: true, client: true },
    },
  },
} satisfies Config;
