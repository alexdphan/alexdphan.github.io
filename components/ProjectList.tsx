// components/Projects.tsx
import Link from 'next/link';
import { getProjects } from 'app/projects/utils';

export async function ProjectList() {
  const allProjects = await getProjects();
  // console.log(allProjects);

  return (
    <div className="loading-element">
      {allProjects
        .sort((a, b) => {
          if (a.metadata.count > b.metadata.count) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <div className="mb-8" key={post.slug}>
            <p className=" w-[100px] tabular-nums"></p>
            <h2 className="inline-block mb-1 font-semibold">
              <Link
                key={post.slug}
                className="cursor-pointer"
                href={`/projects/${post.slug}`}
                legacyBehavior
              >
                <a className="link-with-animation">{post.metadata.title}</a>
              </Link>
            </h2>
            <p className="tracking-tight text-secondary">
              {post.metadata.description}
            </p>
            {/* <p className="tracking-tight text-neutral-900 dark:text-neutral-100">
              {post.metadata.count}
            </p> */}
          </div>
        ))}
    </div>
  );
}
