import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkBreaks from 'remark-breaks';
import remarkMdx from 'remark-mdx';

// apply plugins to mdx

const About = defineDocumentType(() => ({
  name: 'About',
  filePathPattern: `about/**/*.mdx`, // Matches MDX files under 'about' directory
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the about page',
      required: true,
    },
    description: {
      // Added this
      type: 'string',
      description: 'The description of the about page',
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/about/${doc._raw.flattenedPath}`,
    },
  },
}));

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`, // Matches MDX files under 'posts' directory
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    description: {
      // Added this
      type: 'string',
      description: 'The description of the post',
    },
  },
  computedFields: {
    url: {
      type: 'string',
      // resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
      // posts are in home page
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}));

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`, // Matches MDX files under 'posts' directory
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the project',
      required: true,
    },
    description: {
      // Added this
      type: 'string',
      description: 'The description of the project',
    },
    count: {
      type: 'number',
      // default: 0,
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      // resolve: (doc) => `/projects/${doc._raw.flattenedPath}`,
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, About, Project],
  mdx: {
    remarkPlugins: [remarkGfm, remarkMath, remarkBreaks, remarkMdx],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',

          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          // behavior: 'prepend', has it
          properties: {
            className: ['subheading-anchor', 'anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
      rehypeKatex,
    ],
  },
});
