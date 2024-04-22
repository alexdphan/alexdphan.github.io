import Link from 'next/link';
import { ProjectList } from 'components/ProjectList';

// transiton doens't work here because of ProjectList, so I'm not using it
const ProjectsPage = () => {
  return (
    <article className="max-w-xl py-8 mx-auto text-sm loading-element">
      <div className=" text-start">
        {/* <p className="text-xs ">Highlighting some cool builds:</p> */}
        <h1 className="mb-1 font-semibold ">Projects</h1>
        <p className="text-secondary">
          {/* Spending the moments I can building what I find useful */}
          Highlighting some builds
        </p>
      </div>
      <hr className="my-6" />

      <ProjectList />
    </article>
  );
};

export default ProjectsPage;
