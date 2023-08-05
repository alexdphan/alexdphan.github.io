import '../styles/globals.css';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { Roboto_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

// this is so latex works properly
import 'katex/dist/katex.min.css'; // put the path to your katex.min.css file here

const roboto = Roboto_Mono({
  display: 'swap',
  subsets: ['latin'],
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
        <div className="container">
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-NG9MP9KV8W" />
          <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-NG9MP9KV8W');
        `}
          </Script>
        </div>
      </head>
      <body className="flex flex-col items-center justify-between min-h-screen">
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
