import Link from 'next/link';
import { ProjectList } from 'components/ProjectList';
import { Footer } from '../../components/Footer';

// transiton doens't work here because of ProjectList, so I'm not using it
const ProjectsPage = () => {
  return (
    <div>
      <article className="max-w-xl pt-8 mx-auto text-sm loading-element">
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
      <div className="flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default ProjectsPage;
