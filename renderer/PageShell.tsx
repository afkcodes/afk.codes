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
        <div className='bg-darkBackground text-mediumText'>
          <Navbar />
          <div className='w-full flex flex-col items-center '>
            <div className='min-h-screen max-w-[900px] pt-16'>{children}</div>
          </div>
        </div>
      </PageContextProvider>
    </React.StrictMode>
  );
}

export { PageShell };
