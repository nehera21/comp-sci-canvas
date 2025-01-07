import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Provider from './Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alexander Neher | Portfolio',
  description: 'Computer Science and Machine Learning Portfolio',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} font-mono`}
        style={{ overflowY: 'scroll', overflowX: 'hidden' }}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
