import { format, parseISO } from 'date-fns';
import { allProjects } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { Mdx } from 'components/mdx';

export const generateStaticParams = async () =>
  allProjects.map((project) => ({ slug: project._raw.flattenedPath }));

export const generateMetadata = ({ params }) => {
  console.log('Searching for slug:', params.slug);

  // const project = allProjects.find((project) => {
  //   console.log('Comparing slugs:', params.slug, project._raw.flattenedPath);
  //   return project._raw.flattenedPath === params.slug;
  // });

  const project = allProjects.find(
    (project) => `projects/${params.slug}` === project._raw.flattenedPath
  );

  if (!project) {
    throw new Error(`No project found with slug: ${params.slug}`);
  }

  return { title: project.title };
};

const ProjectLayout = ({ params }) => {
  allProjects.forEach((project) => console.log(project._raw.flattenedPath));

  // const project = allProjects.find(
  //   (project) => project._raw.flattenedPath === params.slug
  // );
  const project = allProjects.find(
    (project) => `projects/${params.slug}` === project._raw.flattenedPath
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
