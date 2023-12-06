import React from 'react';
import type { PageContext } from 'vike/types';
import './PageShell.css';
import { PageContextProvider } from './usePageContext';

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <div className='px-4 w-full bg-black min-h-screen text-white flex justify-center items-center'>
          {children}
        </div>
      </PageContextProvider>
    </React.StrictMode>
  );
}

export { PageShell };
