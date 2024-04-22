import fs from 'fs';
import path from 'path';
import { baseUrl } from '../sitemap';

type Metadata = {
  title: string;
  description: string;
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, '').trim();

  let frontMatterLines = frontMatterBlock.trim().split('\n');
  let metadata: { [key: string]: string | number } = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(':');
    let value = valueArr.join(':').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes

    if (key.trim() === 'count') {
      metadata[key.trim()] = parseInt(value, 10);
    } else {
      metadata[key.trim()] = value;
    }
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getAbout() {
  return getMDXData(path.join(process.cwd(), 'app', 'about', 'posts'));
}
