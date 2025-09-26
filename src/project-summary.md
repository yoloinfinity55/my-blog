---
title: Project Summary
description: "A detailed explanation of the blog project, its technologies, and structure."
date: 2025-09-26
tags:
  - posts
layout: post.njk
---
This project is a static blog generator built using Eleventy, a simpler static site generator, and styled with Tailwind CSS.

Here's a breakdown of its key components and how it works:

1.  **Eleventy (11ty):**
    *   It's a static site generator that takes various template files (like Nunjucks, Markdown) and processes them into static HTML files.
    *   The `eleventy.config.js` file configures Eleventy, specifying input/output directories (`src` and `_site` respectively), and handling asset copying.
    *   It uses `luxon` for date formatting, as seen in the `postDate` filter.

2.  **Templating (Nunjucks and Markdown):**
    *   `src/_includes/base.njk`: This is the base layout for all pages, including the HTML structure, head, header, main content area, and footer. It pulls in the `title` variable and the main `content`.
    *   `src/index.njk`: This is the homepage template. It extends `base.njk` and iterates through a collection of posts (`collections.posts`) to display them.
    *   `src/_includes/post.njk`: This is likely the layout for individual blog posts (inferred from `my-first-post.md`'s `layout: post.njk`).
    *   Markdown files like `src/my-first-post.md` are used for blog post content. They include front matter (YAML at the top) for metadata like `title`, `description`, `date`, `tags`, and `layout`.

3.  **Styling (Tailwind CSS and PostCSS):**
    *   The project uses Tailwind CSS for utility-first styling.
    *   `src/assets/css/index.css` is the main CSS file where Tailwind directives are likely imported.
    *   `eleventy.config.js` includes a build step that uses PostCSS with `tailwindcss` and `cssnano` (for CSS minification) to process the CSS. This ensures that only the necessary Tailwind CSS is included in the final build, optimizing file size.

4.  **Project Structure:**
    *   `src/`: Contains all source files for the blog.
        *   `src/_includes/`: Contains Nunjucks layout files (`base.njk`, `post.njk`).
        *   `src/assets/`: Contains static assets like `css` and `images`.
        *   `src/index.njk`: The homepage.
        *   `src/*.md`: Markdown files for blog posts.
    *   `_site/`: This directory is where Eleventy outputs the generated static files (HTML, processed CSS, copied images).

5.  **Scripts:**
    *   `package.json` defines two main scripts:
        *   `npm start`: Runs Eleventy in development mode with a local server (`--serve`) and sets `ELEVENTY_PRODUCTION=false`.
        *   `npm build`: Builds the static site for production, setting `ELEVENTY_PRODUCTION=true`, which affects the `pathPrefix` in `eleventy.config.js` (useful for GitHub Pages deployments).

In summary, this is a modern static blog setup that leverages Eleventy for content management and templating, and Tailwind CSS for efficient and maintainable styling, with a build process that optimizes the CSS for production.
