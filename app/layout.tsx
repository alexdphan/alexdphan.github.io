import '../styles/globals.css';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { JetBrains_Mono } from 'next/font/google';
import { Roboto_Mono } from 'next/font/google';

// const jetbrains = JetBrains_Mono({
//   subsets: ['latin'],
//   display: 'swap',
// });

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
    <html lang="en" className={roboto.className}>
      <head>
        <title>Alex Phan's Website</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body>
        <Header />
        <div className="px-6">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
