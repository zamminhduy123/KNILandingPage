# KNI Education — Blog Writing & Publishing Guide

Welcome to the KNI Education blog publishing workflow. This guide explains how to write, structure, and localize articles to maintain the site's premium design and search engine optimization (SEO) standards.

---

## 1. Folder Structure (Folder Bundles)

Every blog post on the website must be placed in its own folder under `content/blog/`. The folder name must match the URL slug of the post.

```text
content/
  blog/
    testas-la-gi/             <-- Slug name (URL path)
      vn.md                   <-- Vietnamese article body
      en.md                   <-- English article body
      images/                 <-- Post-specific images
        featured.jpg
        structure-diagram.png
```

### Why folders?
By grouping articles into folders, you keep the translation files together and can store images directly next to the text, making the content self-contained and easy to manage.

---

## 2. Article Metadata (Frontmatter)

Each Markdown file must start with a metadata block (known as "frontmatter") enclosed in `---` lines. The parameters must match exactly between the English and Vietnamese versions:

```yaml
---
title: "What is TestAS? Exam Structure, Fees, and Registration Guide 2026"
slug: "testas-la-gi"
date: "2026-06-18"
description: "What is TestAS? Find out about the exam structure, fees, registration process, and the role of TestAS in German university admissions. Detailed guide for students."
category: "Pillar"
image: "/images/blog/testas-la-gi.jpg"
---
```

### Metadata Fields Explained:
* **`title`**: The heading displayed on the blog index and SEO titles (keep under 60 characters).
* **`slug`**: Must match the folder name exactly. Used for building the URL path.
* **`date`**: Use the `YYYY-MM-DD` format.
* **`description`**: A concise summary (120–150 characters) displayed in search results and cards.
* **`category`**: Broad classification (e.g. `Pillar`, `Guides`, `Admissions`).
* **`image`**: Path to the main cover image, typically referencing `/images/blog/...` or public directory.

---

## 3. Adding Images (Highly Encouraged! 📸)

Including high-quality images and diagrams is **strongly recommended** for every blog post. Do not rely solely on walls of text.

### Why Images are Critical for KNI Education:
1. **Visualizing Complex Concepts:** TestAS structure, scoring equations, and university application timelines are complex. Flowcharts, exam module tables, and infographics make this information much easier for students and parents to digest.
2. **SEO Boost (Google Images):** Properly named images with descriptive alt text help KNI rank on Google Image search, driving extra organic traffic from students searching for "cấu trúc đề TestAS" or "lịch thi TestAS".
3. **Credibility & Trust:** Screenshots of official pages, student worksheets, classroom environments, and university campus pictures reassure readers of KNI's professionalism.

### How to Add Images in Markdown:
First, place your image files in the `images/` subfolder inside the post's directory (or in `/public/images/blog/`). 

In your Markdown text, reference the image like this:
```markdown
![Detailed breakdown of the Core Test and Subject Modules](images/structure-diagram.png)
```

> [!TIP]
> Always provide a descriptive label inside the brackets `[...]`. This text serves as the image's `alt` text, which search engines read to understand what is inside the graphic and screen-readers use for accessibility.

---

## 4. Multi-Language Support

We serve both Vietnamese (`vn`) and English (`en`) visitors. Every post must have both translations present.

* **Vietnamese version (`vn.md`):** This is the default version.
* **English version (`en.md`):** This must be a clean, natural translation of the Vietnamese content. Avoid machine-translation artifacts (e.g., leaving Vietnamese terms or placeholders behind).

---

## 5. Markdown Formatting Quick Sheet

Keep formatting clean and professional. Avoid overusing bold text or using too many nested headers.

```markdown
# Level 1 Heading (Main Title - handled automatically, avoid in body)

## Level 2 Heading (Major Section)

### Level 3 Heading (Subsection)

To make text **bold**, wrap it in double asterisks.
To make text *italic*, wrap it in single asterisks.

Create bullet lists:
- First item
- Second item

Create numbered lists:
1. Step one
2. Step two

Create external links:
[Read official TestAS guidelines](https://www.testas.de)
```

---

## 6. Pre-Publishing Checklist

Before pushing your changes, verify the following:

- [ ] Folder name matches the `slug` value in frontmatter.
- [ ] Both `vn.md` and `en.md` are present inside the folder.
- [ ] Cover image path is defined in `image` frontmatter and the file exists.
- [ ] All body images have descriptive `alt` tags in brackets `![alt-text](path)`.
- [ ] No placeholder text (e.g. "Lorem Ipsum") is left behind.
- [ ] Run `npm run build` locally to verify Next.js prerenders both pages without errors.
