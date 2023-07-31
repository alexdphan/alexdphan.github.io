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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto.className} flex flex-col min-h-screen`}
    >
      <head>
        <title>Alex Phan's Website</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body className="flex flex-col items-center justify-between">
        <div className="w-full max-w-xl">
          <Header />
          {/* Setting a fixed height here for now, since the footer keeps shifting. Also set a fixed height for header and footer as well */}
          <main className="px-6" style={{ height: '500px' }}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}