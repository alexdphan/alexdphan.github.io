import { format, parseISO } from 'date-fns';
import { allProjects } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { Mdx } from 'components/mdx';

export const generateStaticParams = async () =>
  // The flattenedPath.split('/').pop() line of code splits the flattenedPath into an array of strings using the slash ('/') as a delimiter. 
  // It then uses the pop() method to extract the last string in the array, which should be the actual slug for the post or project.
  allProjects.map((project) => ({
    slug: project._raw.flattenedPath.split('/').pop(),
  }));

export const generateMetadata = ({ params }) => {
  const decodedSlug = decodeURIComponent(params.slug);
  // finding the post by the decoded slug, which is the actual slug
  // we are finding the post by the flattenedPath and then splitting it by the slash and then popping the last item in the array
  // for example, if the flattenedPath is /projects/nextjs-blog, then the decodedSlug is nextjs-blog, nextjs-blog is the last item in the array
  const project = allProjects.find(
    (project) => project._raw.flattenedPath.split('/').pop() === decodedSlug
  );
  return { title: project.title };
};

const ProjectLayout = ({ params }: { params: { slug: string } }) => {
  const decodedSlug = decodeURIComponent(params.slug);
  const project = allProjects.find(
    (project) => project._raw.flattenedPath.split('/').pop() === decodedSlug
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
