// https://vike.dev/onRenderHtml
export { onRenderHtml };

import ReactDOMServer from 'react-dom/server';
import { dangerouslySkipEscape, escapeInject } from 'vike/server';
import type { OnRenderHtmlAsync } from 'vike/types';
import { PageShell } from './PageShell';
import favicon from './favicon.svg';

const onRenderHtml: OnRenderHtmlAsync = async (pageContext): ReturnType<OnRenderHtmlAsync> => {
  const { Page, pageProps } = pageContext;
  // This onRenderHtml() hook only supports SSR, see https://vike.dev/render-modes for how to modify
  // onRenderHtml() to support SPA
  if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined');
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  // See https://vike.dev/head

  const title = pageContext.config.title || 'Vite SSR app';
  const desc = pageContext.config.description || 'App using Vike';

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@afkashish" />
        <meta name="twitter:creator" content="@afkashish" />
        <meta property="og:title" content="${title}">
        <meta property="og:site_name" content="${title}">
        <meta property="og:url" content=https://www.afk.codes/>
        <meta property="og:description" content="${desc}">
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/17390257?v=4">
        <link rel="icon" type="image/svg+xml" href=${favicon} />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&display=swap" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-00ZDLV4JQ0"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-00ZDLV4JQ0');
        </script>
        <title>${title}</title>
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
    }
  };
};
