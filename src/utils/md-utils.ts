import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

export interface BlogFrontmatter {
  title: string;
  slug: string;
  date: string;
  description: string;
  category: string;
  image: string;
}

const blogDir = path.join(process.cwd(), "content/blog");

/**
 * Get all blog posts sorted by date (newest first).
 */
export function getAllBlogPosts(): BlogFrontmatter[] {
  if (!fs.existsSync(blogDir)) return [];

  const files = fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const fullPath = path.join(blogDir, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return data as BlogFrontmatter;
    });

  return files.sort((a, b) => (a.date > b.date ? -1 : 1));
}

/**
 * Get a single blog post by slug.
 * Returns { frontmatter, html } or null if not found.
 */
export async function getBlogPostBySlug(slug: string): Promise<{
  frontmatter: BlogFrontmatter;
  html: string;
} | null> {
  const filePath = path.join(blogDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as BlogFrontmatter;

  const html = await remark().use(remarkHtml).process(content);

  return {
    frontmatter,
    html: html.toString(),
  };
}
