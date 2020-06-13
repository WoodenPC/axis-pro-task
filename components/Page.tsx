import React, { memo } from 'react';

const Page = memo(({ children }) => {
  return (
    <div className='Page'>
      {children}

    <style jsx>{`
      .Page {
        display: flex;
        flex-direction: column;
      }
    `}</style>
    </div>
  )
});

const PageContent = memo(({ children }) => {
  return (
    <main className='Page-Content'>
      { children }

    <style jsx>{`
      .Page-Content {
        flex: 1 0 auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
      }
    `}</style>
    </main>
  )
});

export { Page, PageContent };