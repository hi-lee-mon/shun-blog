import fs from 'fs';
import path from 'path';
import dayjs from 'dayjs';
import { sync } from 'glob';
import matter from 'gray-matter';

export const getPath = (dir: string) => path.join(process.cwd(), dir).replace(/\\/g, '/'); // => C:/dev/shun-blog/posts

export const getSlugs = (targetPath: string): string[] => {
  const paths = sync(`${targetPath}/*.mdx`); // => ['C:/dev/shun-blog/posts/sample.mdx',a,b,・・・]
  const slugs = paths.map((path) => {
    const parts = path.split('/'); // => [ 'C:', 'dev', 'shun-blog', 'posts', 'sample.mdx' ]
    const filename = parts.at(-1) ?? ''; // => 'sample.mdx'
    const [slug] = filename.split('.'); // => sample
    return slug;
  });
  return slugs;
};

export type PostMeta = {
  excerpt: string;
  slug: string;
  title: string;
  tags: string[];
  date: string;
  image?: string;
  alt?: string;
};

type Post = {
  content: string;
  meta: PostMeta;
};

export const getPostFromSlug = (slug: string, targetPath: string): Post => {
  const postPath = path.join(targetPath, `${slug}.mdx`); // => C:\dev\shun-blog\posts\sample.mdx
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt ?? '',
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      date: dayjs(data.date ?? new Date()).format('YYYY-MM-DD'),
      image: data.image ?? null,
      alt: data.alt ?? 'Sorry. I forgot to mention the description.',
    },
  };
};

export const getAllPosts = (targetPath: string) => {
  const slugs = getSlugs(targetPath);
  const posts = slugs.map((slug) => getPostFromSlug(slug, targetPath));
  const sortedPosts = posts
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1;
      if (a.meta.date < b.meta.date) return -1;
      return 0;
    })
    .reverse(); // descending order

  return sortedPosts;
};
