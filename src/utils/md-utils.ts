import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

export interface BlogFrontmatter {
  title: string;
  slug: string;
  date: string;
  updated?: string;
  description: string;
  category: string;
  image: string;
  quickAnswer?: string;
}

export interface BlogHeading {
  id: string;
  text: string;
}

const blogDir = path.join(process.cwd(), "content/blog");

/**
 * Helper to sync-read a single post by slug and locale.
 */
function getBlogPostBySlugSync(slug: string, locale: string = "vn"): {
  frontmatter: BlogFrontmatter;
  content: string;
} | null {
  // 1. Try folder-based structure first: content/blog/[slug]/[locale].md (e.g. content/blog/testas-la-gi/en.md)
  let filePath = path.join(blogDir, slug, `${locale}.md`);
  
  // 2. If not found, try folder-based default: content/blog/[slug]/vn.md
  if (!fs.existsSync(filePath)) {
    filePath = path.join(blogDir, slug, "vn.md");
  }
  
  // 3. Fallback to folder-based index: content/blog/[slug]/index.md
  if (!fs.existsSync(filePath)) {
    filePath = path.join(blogDir, slug, "index.md");
  }

  // 4. Backward compatibility: flat files content/blog/[slug].[locale].md
  if (!fs.existsSync(filePath)) {
    filePath = path.join(blogDir, `${slug}.${locale}.md`);
  }

  // 5. Backward compatibility default: content/blog/[slug].md
  if (!fs.existsSync(filePath)) {
    filePath = path.join(blogDir, `${slug}.md`);
  }

  // 6. Check if there is any file matching the slug in the main blog folder
  if (!fs.existsSync(filePath)) {
    try {
      const files = fs.readdirSync(blogDir);
      const matched = files.find(f => f.startsWith(slug) && f.endsWith(".md"));
      if (matched) {
        filePath = path.join(blogDir, matched);
      } else {
        return null;
      }
    } catch {
      return null;
    }
  }

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as BlogFrontmatter;
  
  // Guarantee frontmatter slug matches the base slug
  frontmatter.slug = slug;

  return {
    frontmatter,
    content,
  };
}

/**
 * Get all blog posts sorted by date (newest first) for a specific locale.
 */
export function getAllBlogPosts(locale: string = "vn"): BlogFrontmatter[] {
  if (!fs.existsSync(blogDir)) return [];

  const items = fs.readdirSync(blogDir);
  
  // Extract unique base slugs from both files and subdirectories
  const uniqueSlugs: string[] = [];
  items.forEach((item) => {
    const fullPath = path.join(blogDir, item);
    try {
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        // The directory name itself is the slug
        if (!uniqueSlugs.includes(item)) {
          uniqueSlugs.push(item);
        }
      } else if (item.endsWith(".md")) {
        // Flat file
        const base = item.replace(/\.md$/, "");
        const slug = base.endsWith(".en") || base.endsWith(".vn")
          ? base.slice(0, -3)
          : base;
        if (!uniqueSlugs.includes(slug)) {
          uniqueSlugs.push(slug);
        }
      }
    } catch {
      // Skip if stat fails
    }
  });

  const posts: BlogFrontmatter[] = [];

  for (const slug of uniqueSlugs) {
    const post = getBlogPostBySlugSync(slug, locale);
    if (post) {
      posts.push(post.frontmatter);
    }
  }

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

/**
 * Get a single blog post by slug and locale.
 * Returns { frontmatter, html, headings } or null if not found.
 */
export async function getBlogPostBySlug(slug: string, locale: string = "vn"): Promise<{
  frontmatter: BlogFrontmatter;
  html: string;
  headings: BlogHeading[];
} | null> {
  const post = getBlogPostBySlugSync(slug, locale);
  if (!post) return null;

  // H1 fix: strip leading `# Title` line
  post.content = post.content.replace(/^\s*#\s+.*$/m, '');

  // M4 fix: normalize internal markdown links
  // regex looks for `[text](/vn/...` or `[text](/en/...` and ensures trailing slash
  post.content = post.content.replace(/\[([^\]]+)\]\(\/(vn|en)(\/[^)]+)?\)/g, (match, text, loc, pathPart) => {
    let urlPath = `/${loc}${pathPart || ''}`;
    // don't add trailing slash if it has anchor, query, file extension, or already has trailing slash
    if (!urlPath.endsWith('/') && !urlPath.includes('#') && !urlPath.includes('?') && !/\.[a-z0-9]+$/i.test(urlPath)) {
      urlPath += '/';
    }
    return `[${text}](${urlPath})`;
  });

  // Extract H2 headings from markdown content for table of contents
  const headingRegex = /^##\s+(.+)$/gm;
  const headings: BlogHeading[] = [];
  let match;
  while ((match = headingRegex.exec(post.content)) !== null) {
    const rawText = match[1].trim();
    const cleanText = rawText
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/[*_`]/g, "")
      .trim();
    const id = cleanText
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    if (cleanText) {
      headings.push({ id, text: cleanText });
    }
  }

  let html = (
    await remark()
      .use(remarkGfm)
      .use(remarkHtml)
      .process(post.content)
  ).toString();

  // Wrap tables in responsive overflow container with blog-table classes
  html = html.replace(/<table>([\s\S]*?)<\/table>/gi, (_match, tableInner) => {
    return `<div class="blog-table-wrapper not-prose overflow-x-auto my-6 rounded-xl border border-slate-200 shadow-sm bg-white"><table class="blog-table w-full">${tableInner}</table></div>`;
  });

  // Inject id attributes into <h2> elements so TOC anchor links work
  let headingIndex = 0;
  html = html.replace(/<h2>(.*?)<\/h2>/gi, (headingMatch, headingInner) => {
    const clean = headingInner.replace(/<[^>]+>/g, "").trim();
    const id = clean
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || `section-${++headingIndex}`;
    return `<h2 id="${id}">${headingInner}</h2>`;
  });

  return {
    frontmatter: post.frontmatter,
    html,
    headings,
  };
}
