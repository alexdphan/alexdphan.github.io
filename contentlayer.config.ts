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

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
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
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}));

// Add a new document type for "About" pages
const About = defineDocumentType(() => ({
  name: 'About',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the page',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the page',
      required: false, // About pages might not have a date
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/about/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: '.', // Look in the current directory
  documentTypes: [Post, About], // Include both Post and About document types
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
          // behavior: 'prepend', has it as default
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
