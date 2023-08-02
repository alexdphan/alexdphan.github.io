'use client';

import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts, Post } from 'contentlayer/generated';
// import { getMDXComponent } from "next-contentlayer/hooks";
import { Body } from '../components/Body';

import ScrambleText from 'components/ScrambleEffect';

function PostCard(post: Post) {
  const formattedDate = format(parseISO(post.date), 'LLLL d, yyyy');

  return (
    <div className="mb-8 ">
      {/* This div will contain the title and date */}
      <div>
        <h2 className="inline-block mb-2 text-lg font-semibold">
          <Link href={post.url} className="cursor-pointer " legacyBehavior>
            <a className="link-with-animation ">
              <span className="cursor-pointer">
                <ScrambleText
                  text={post.title}
                  delay={3.0}
                  className="pb-0.5"
                />
              </span>
            </a>
          </Link>
        </h2>
        <time dateTime={post.date} className="block mb-2 text-xs text-gray-600">
          <span className="cursor-pointer">
            <ScrambleText text={formattedDate} delay={3.0} />
          </span>
        </time>
      </div>
      {/* <div className="text-sm">
        <Content /> This is the Actual content in the markdown files
      </div> */}
    </div>
  );
}

// shows the list of posts in postcards
export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="max-w-xl py-8 mx-auto">
      <Body />
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
