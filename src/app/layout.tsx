import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import NavBar from '@/components/NavBar';
import './material-symbols.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sai Yada',
  description: 'Personal Portfolio of Sai Yada',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className={
            'flex flex-col justify-end items-end min-h-screen h-screen w-screen absolute top-0 left-0 pointer-events-none -z-40'
          }
        >
          <img
            src={'/illustration.svg'}
            alt={'image'}
            className={'h-fit object-fill dark:hidden'}
          />
          <img
            src={'/illustration-dark.svg'}
            alt={'image'}
            className={'h-fit object-fill hidden dark:block'}
          />
        </div>

        <NavBar />
        {/*<MouseTrack />*/}
        <div className="mx-3 !z-10">{children}</div>
      </body>
    </html>
  );
}
