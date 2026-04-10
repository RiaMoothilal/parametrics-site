import fs from "fs";
import path from "path";
import matter from "gray-matter";

const STORIES_DIR = path.join(process.cwd(), "content/stories");

export interface StoryMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  type: string;
}

export function getAllStories(): StoryMeta[] {
  const files = fs.readdirSync(STORIES_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(STORIES_DIR, filename), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        type: data.type as string,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getStory(slug: string): { meta: StoryMeta; content: string } {
  const raw = fs.readFileSync(
    path.join(STORIES_DIR, `${slug}.mdx`),
    "utf-8"
  );
  const { data, content } = matter(raw);
  return {
    meta: {
      slug,
      title: data.title as string,
      description: data.description as string,
      date: data.date as string,
      type: data.type as string,
    },
    content,
  };
}
