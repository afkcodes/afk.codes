export type { PageProps };

// https://vike.dev/pageContext#typescript
declare global {
  namespace Vike {
    interface PageContext {
      Page: Page;
      pageProps?: PageProps;
      urlPathname: string;
      // See https://github.com/vikejs/vike/tree/main/examples/react-full-v1
      config: {
        title?: string;
        description?: string;
      };
    }
  }
}

type Page = (pageProps: PageProps) => React.ReactElement;
type PageProps = Record<string, unknown>;
