import React from 'react';
import type { PageContext } from 'vike/types';
import Footer from '../components/Footer';
import Header from '../components/Header';
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
        <main className='bg-darkBackground text-mediumText'>
          <Header />
          <div className='w-full flex flex-col items-center'>
            <div className='w-full min-h-screen max-w-[900px] pt-16 pb-8 '>{children}</div>
          </div>
          <Footer />
        </main>
      </PageContextProvider>
    </React.StrictMode>
  );
}

export { PageShell };
