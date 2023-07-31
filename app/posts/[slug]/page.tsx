import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { Mdx } from 'components/mdx';


export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  // console.log('All Posts', allPosts);
  // console.log('Post', post);
  return { title: post.title };
};

// const PostLayout = ({ params }: { params: { slug: string } }) => {
//   const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

//   const Content = getMDXComponent(post.body.code);
  
//   return (
//     <article className="max-w-xl py-8 mx-auto">
//       <div className="mb-8 text-center">
//         <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
//           {format(parseISO(post.date), 'LLLL d, yyyy')}
//         </time>
//         <h1>{post.title}</h1>
//       </div>
//       {/* causing errors */}
//       <Content />
//     </article>
//   );
// };

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  return (
    <article className="max-w-xl py-8 mx-auto">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1>{post.title}</h1>
      </div>
      <Mdx code={post.body.code} />
    </article>
  );
};

export default PostLayout;
