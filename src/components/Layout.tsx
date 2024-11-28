import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  contentClassName?: string;
}

export function Layout({ children, contentClassName = '' }: LayoutProps) {
  return (
    <div className="min-h-screen relative flex flex-col">
      <main className={`flex-1 ${contentClassName}`}>
        {children}
      </main>
    </div>
  );
}