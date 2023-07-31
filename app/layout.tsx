import '../styles/globals.css';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { JetBrains_Mono } from 'next/font/google';
import { Roboto_Mono } from 'next/font/google';
import ScrambleText from 'components/ScrambleEffect';

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
        <title>Alex Phan's Website</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body className="flex flex-col items-center justify-between min-h-screen">
        <div className="flex flex-col w-full max-w-xl min-h-screen">
          <Header />
          <main className="flex-grow px-6">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

