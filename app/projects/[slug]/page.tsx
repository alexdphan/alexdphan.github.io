import { notFound } from 'next/navigation';
import { CustomMDX } from '../../../components/mdx';
// import { formatDate, getProjects } from '../utils';
import { getProjects } from '../utils';
import { baseUrl } from '../../sitemap';

export async function generateStaticParams() {
  let projects = getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }) {
  let project = getProjects().find((project) => project.slug === params.slug);
  if (!project) {
    return;
  }

  let {
    title,
    description,
    // publishedAt: publishedTime,
    // summary: description,
    // image,
  } = project.metadata;
  // let ogImage = image
  //   ? image
  //   : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      // publishedTime,
      url: `${baseUrl}/projects/${project.slug}`,
      // images: [
      //   {
      //     url: ogImage,
      //   },
      // ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      // images: [ogImage],
    },
  };
}

export default function Blog({ params }) {
  let project = getProjects().find((project) => project.slug === params.slug);

  if (!project) {
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
            headline: project.metadata.title,
            description: project.metadata.description,
            // datePublished: project.metadata.publishedAt,
            // dateModified: project.metadata.publishedAt,
            // description: project.metadata.summary,
            // image: project.metadata.image
            //   ? `${baseUrl}${project.metadata.image}`
            //   : `/og?title=${encodeURIComponent(project.metadata.title)}`,
            url: `${baseUrl}/projects/${project.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <div className="text-sm loading-element">
        <article className="max-w-xl pt-3 pb-4 prose ">
          <div className="mb-8 ">
            <h1 className="mb-1 font-semibold">{project.metadata.title}</h1>
            <div className="flex items-center justify-between mt-2">
              <p className="text-secondary">{project.metadata.description}</p>
            </div>
            <hr className="my-6" />
            <CustomMDX source={project.content} />
          </div>
        </article>
      </div>
    </section>
  );
}
