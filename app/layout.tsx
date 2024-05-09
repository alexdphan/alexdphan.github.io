import '../styles/globals.css';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { Roboto_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import localFont from 'next/font/local';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alex Phan',
  description: 'Alex Phan',
  keywords: [
    'Alex',
    'Phan',
    'Alex Phan',
    'alex',
    'phan',
    'alexphan',
    'alexdphan',
    'alexdphan.com',
    'alexdphan.com/blog',
    'alexdphan.com/projects',
    'alexdphan.github.io',
  ],
  creator: 'Alex Phan',
};

// this is so latex works properly
import 'katex/dist/katex.min.css'; // put the path to your katex.min.css file here

const roboto = Roboto_Mono({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400'], // Adjust this value as needed, e.g., '100' for an even thinner appearance
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.className} flex flex-col min-h-screen`}
    >
      <head>
        {/* Title of the page */}
        <title>Alex Phan</title>
        {/* Add icon here */}
        <link rel="icon" type="image/x-icon" href="/images/AP.png" />
      </head>
      <body className="flex flex-col items-center justify-between min-h-screen text-foreground">
        <div className="flex flex-col w-full max-w-xl min-h-screen">
          <Header />
          <main className="flex-grow px-6">{children}</main>
          <Analytics />
          <Footer />
        </div>
      </body>
    </html>
  );
}
