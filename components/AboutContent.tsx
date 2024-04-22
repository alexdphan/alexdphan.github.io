// components/AboutContent.tsx
'use client';

import React from 'react';
import { getAbout } from '../app/about/utils';
import { CustomMDX } from './mdx';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const AboutContent = async () => {
  const aboutFetch = await getAbout();
  console.log('about', aboutFetch);
  const about = aboutFetch.find((aboutFetch) => aboutFetch.slug === 'about');

  return (
    <article className="max-w-xl py-8 mx-auto loading-element">
      <hr className="my-6" />
      <div className="prose">
        <Link key={about.slug} href={`/about/${about.slug}`}>
          {about.slug}
        </Link>
      </div>
    </article>
  );
};

export default AboutContent;
