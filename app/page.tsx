// 'use client';

// import { Body } from '../components/HomeBody';
// import { Footer } from '../components/Footer';
// import { Header } from '../components/Header';

// import ScrambleText from 'components/ScrambleEffect';

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center pt-72">
//       <Body />
//     </div>
//   );
// }

import { getAbout } from './about/utils';
import { baseUrl } from './sitemap';
import { CustomMDX } from '../components/mdx';
import { AboutPresent } from '../components/AboutPresent';
import { Footer } from '../components/Footer';

export default async function Home() {
  const aboutFetch = await getAbout();
  const about = aboutFetch.find((aboutFetch) => aboutFetch.slug === 'about');

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            headline: about?.metadata.title,
            description: about?.metadata.description,
            url: baseUrl,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <div>
        <article className="max-w-xl pt-8 mx-auto text-sm loading-element">
          <AboutPresent />
          <hr className="my-4" />
          {about && <CustomMDX source={about.content} />}
        </article>
      </div>
      <div className="flex items-center justify-center">
        <Footer />
      </div>
    </section>
  );
}