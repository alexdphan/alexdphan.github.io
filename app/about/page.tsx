import { allAbouts } from 'contentlayer/generated';
import { Mdx } from 'components/mdx';

// As there's only one about page, you can directly get the about content
const about = allAbouts[0];

const AboutPage = () => {
  return (
    <article className="max-w-xl py-8 mx-auto">
      <div className="mb-8 text-start">
        <h1>{about.title}</h1>
      </div>
      <Mdx code={about.body.code} />
    </article>
  );
};

export default AboutPage;
