'use client'; // Ensure this is client-side rendering
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Global, css } from '@emotion/react';

// Create Emotion cache
const cache = createCache({ key: 'next' });

// Global styles
const globalStyles = css`
  body {
    margin: 0;
    font-family: sans-serif;
    background-color: #fafafa;
  }
`;

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CacheProvider value={cache}>
          <Global styles={globalStyles} /> {/* Apply global styles */}
          {children} {/* Render children components */}
        </CacheProvider>
      </body>
    </html>
  );
}
