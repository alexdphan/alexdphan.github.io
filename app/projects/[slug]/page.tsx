// import { format, parseISO } from 'date-fns';
// import { allProjects } from 'contentlayer/generated';
// import { getMDXComponent } from 'next-contentlayer/hooks';
// import { Mdx } from 'components/mdx';

// export const generateStaticParams = async () =>
//   allProjects.map((project) => ({ slug: project._raw.flattenedPath }));

// export const generateMetadata = ({ params }) => {
//   const project = allProjects.find(
//     (project) => project._raw.flattenedPath === `projects/${params.slug}`
//   );
//   console.log('Project: ', project);

//   return { title: project.title };
// };

// const ProjectLayout = ({ params }: { params: { slug: string } }) => {
//   // changed the params.slug to `posts/${params.slug}` to match the flattenedPath

//   // console.log('Parameters: ', params);
//   // console.log('All projects: ', allProjects);

//   const project = allProjects.find(
//     (project) => project._raw.flattenedPath === `projects/${params.slug}`
//   );

//   return (
//     <article className="max-w-xl py-8 mx-auto">
//       <div className="mb-8 text-start">
//         <h1 className="mt-2 mb-1 text-xl font-semibold">{project.title}</h1>
//         <span className="">{project.description}</span>
//       </div>
//       <hr />

//       <Mdx code={project.body.code} />
//     </article>
//   );
// };

// export default ProjectLayout;

import { format, parseISO } from 'date-fns';
import { allProjects } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { Mdx } from 'components/mdx';

export const generateStaticParams = async () => {
  console.log('All projects in generateStaticParams:', allProjects);
  return allProjects.map((project) => {
    console.log(
      'Project _raw.flattenedPath in generateStaticParams:',
      project._raw.flattenedPath
    );
    return { slug: project._raw.flattenedPath };
  });
};

export const generateMetadata = ({ params }) => {
  console.log('Params in generateMetadata:', params);
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === `projects/${params.slug}`
  );
  console.log('Project in generateMetadata:', project);

  return { title: project.title };
};

const ProjectLayout = ({ params }: { params: { slug: string } }) => {
  console.log('Params in ProjectLayout:', params);
  const project = allProjects.find((project) => {
    console.log(
      'Checking project in ProjectLayout:',
      project._raw.flattenedPath
    );
    return project._raw.flattenedPath === `projects/${params.slug}`;
  });
  console.log('Selected project in ProjectLayout:', project);

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
