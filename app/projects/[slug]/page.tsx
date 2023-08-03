import { format, parseISO } from 'date-fns';
import { allProjects } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { Mdx } from 'components/mdx';

export const generateStaticParams = async () =>
  allProjects.map((project) => ({ slug: project._raw.flattenedPath }));

export const generateMetadata = ({ params }) => {
  // Decode the slug before using it
  const decodedSlug = decodeURIComponent(params.slug);

  const project = allProjects.find(
    (project) => project._raw.flattenedPath === `projects/${decodedSlug}`
  );

  return { title: project.title };
};
const ProjectLayout = ({ params }: { params: { slug: string } }) => {
  // Decode the slug before using it to find a project
  const decodedSlug = decodeURIComponent(params.slug);

  const project = allProjects.find(
    (project) => project._raw.flattenedPath === `projects/${decodedSlug}`
  );

  return (
    <article className="max-w-xl py-8 mx-auto">
      <div className="mb-8 text-start">
        <h1 className="mt-2 mb-1 text-xl font-semibold">{project.title}</h1>
        <span className="">{project.description}</span>
      </div>
      <hr />

      <Mdx code={project.body.code} />
    </article>
  );
};

export default ProjectLayout;

// problem here is that I need to get the project data from the flattenedPath
// I need to encode and decode the flattenedPath
