import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { Mdx } from 'components/mdx';

// extracting the actual slug from the `flattenedPath`
export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath.split('/').pop() }));

export const generateMetadata = ({ params }) => {
  // decoding the slug from the URL params
  const decodedSlug = decodeURIComponent(params.slug);
  const post = allPosts.find(
    (post) => post._raw.flattenedPath.split('/').pop() === decodedSlug
  );

  if (!post) {
    throw new Error(`No post found for slug: ${params.slug}`);
  }

  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  // decoding the slug from the URL params
  const decodedSlug = decodeURIComponent(params.slug);
  const post = allPosts.find(
    (post) => post._raw.flattenedPath.split('/').pop() === decodedSlug
  );

  if (!post) {
    throw new Error(`No post found for slug: ${params.slug}`);
  }

  return (
    <article className="max-w-xl py-8 mx-auto">
      <div className="mb-8 text-start">
        <time dateTime={post.date} className="text-xs text-gray-600 ">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1 className="mt-2 mb-1 text-xl font-semibold">{post.title}</h1>
        {/* <div className="mb-4 text-sm"> */}
        <span className="">{post.description}</span>
        {/* </div> */}
      </div>
      <hr />

      <Mdx code={post.body.code} />
    </article>
  );
};

export default PostLayout;
