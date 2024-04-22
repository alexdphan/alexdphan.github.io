import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { highlight } from 'sugar-high';
import React from 'react';

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props) {
  let href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  // a: CustomLink,
  code: Code,
  Table,
  // space
  p: ({ children }) => <p className="mb-4">{children}</p>,
  li: ({ children }) => <li className="mb-2">{children}</li>,
  // bullet list with dot
  ul: ({ children }) => (
    <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>{children}</ul>
  ),
  // number list with number
  ol: ({ children }) => (
    <ol
      className="mb-4 list-decimal"
      style={{ listStyleType: 'decimal', marginLeft: '20px' }}
    >
      {children}
    </ol>
  ), //
  blockquote: ({ children }) => (
    <blockquote className="mb-4">{children}</blockquote>
  ),
  //
  hr: ({ children }) => <hr className="my-6" />,
  // pre is for code block
  pre: ({ children }) => <pre className="mb-4">{children}</pre>,
  // italic
  em: ({ children }) => <em className="italic">{children}</em>,
  // bold
  strong: ({ children }) => <strong className="font-bold">{children}</strong>,
  // link
  a: ({ children, href }) => (
    <a href={href} className="mb-4 text-[#FFE1AE] link-with-animation ">
      {children}
    </a>
  ),
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
