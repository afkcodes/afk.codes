import React from 'react';
import type { PageContext } from 'vike/types';
import Navbar from '../components/Navbar';
import './PageShell.css';
import { PageContextProvider } from './usePageContext';

function PageShell({
  children,
  pageContext
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <div className='px-12 w-full bg-darkBackground text-lightText'>
          <Navbar />
          <div className='w-full min-h-screen flex justify-center items-center'>{children}</div>
        </div>
      </PageContextProvider>
    </React.StrictMode>
  );
}

export { PageShell };
