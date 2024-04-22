import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
// Import or define Alert, Terminal, AlertTitle, and AlertDescription components
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { Terminal } from 'lucide-react';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  // Define the AlertDemo component
  const AlertDemo = () => (
    <Alert>
      <Terminal className="w-4 h-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );

  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 style={{ color: 'red', fontSize: '48px' }}>{children}</h1>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),
    // Add the AlertDemo component to the components object
    AlertDemo,
    ...components,
  };
}
