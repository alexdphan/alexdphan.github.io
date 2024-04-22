// app/about/page.tsx
import { getAbout } from './utils';
import { baseUrl } from '../sitemap';
import { notFound } from 'next/navigation';
import AboutContent from '../../components/AboutContent';
import { CustomMDX } from '../../components/mdx';
import { AboutPresent } from '../../components/AboutPresent';

export async function generateStaticParams() {
  const aboutFetch = await getAbout();

  return aboutFetch.map((about) => ({
    slug: about.slug,
  }));
}

export async function generateMetadata({ params }) {
  const aboutFetch = await getAbout();
  let about = aboutFetch.find((aboutFetch) => aboutFetch.slug === params.slug);

  if (!about) {
    return;
  }

  let { title, description } = about.metadata;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${baseUrl}/about/${about.slug}`,
    },
  };
}

export default async function About({ params }) {
  const aboutFetch = await getAbout();
  const about = aboutFetch.find((aboutFetch) => aboutFetch.slug === 'about');

  if (!about) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: about.metadata.title,
            description: about.metadata.description,
            // datePublished: project.metadata.publishedAt,
            // dateModified: project.metadata.publishedAt,
            // description: project.metadata.summary,
            // image: project.metadata.image
            // ? `${baseUrl}${project.metadata.image}`
            // : `/og?title=${encodeURIComponent(project.metadata.title)}`,
            url: `${baseUrl}/about/${about.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <div className="">
        <article className="max-w-xl pt-8 mx-auto text-sm loading-element ">
          <AboutPresent />
          <hr className="my-4" />
          <CustomMDX source={about.content} />
        </article>
      </div>
    </section>
  );
}
