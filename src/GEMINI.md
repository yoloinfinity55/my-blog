---
title: Project Overview
description: "This is a personal blog built using the Eleventy static site generator and styled with Tailwind CSS."
date: 2025-09-27
tags:
  - posts
layout: post.njk
---

# Project Overview

This is a personal blog built using the Eleventy static site generator and styled with Tailwind CSS. The blog posts are written in Markdown and the site is structured using Nunjucks templates.

## Key Technologies

*   **Eleventy:** A simple static site generator.
*   **Tailwind CSS:** A utility-first CSS framework.
*   **Nunjucks:** A templating language for JavaScript.
*   **PostCSS:** A tool for transforming CSS with JavaScript.
*   **Luxon:** A library for working with dates and times.

## Project Structure

*   `src`: Contains the source code for the blog.
    *   `_includes`: Contains the Nunjucks templates for the layout.
    *   `assets`: Contains the CSS and images.
    *   `*.md`: The blog posts written in Markdown.
    *   `index.njk`: The main page of the blog.
*   `_site`: The output directory for the generated site.
*   `eleventy.config.js`: The configuration file for Eleventy.
*   `package.json`: Defines the project's dependencies and scripts.
*   `tailwind.config.js`: The configuration file for Tailwind CSS.

# Building and Running

## Development

To start the development server, run the following command:

```bash
npm start
```

This will start a local server at `http://localhost:8080` with live reloading.

## Production

To build the site for production, run the following command:

```bash
npm run build
```

The generated site will be in the `_site` directory.

# Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. All CSS is located in `src/assets/css/index.css` and is processed by PostCSS.
*   **Templating:** The site uses Nunjucks for templating. The main layout is in `src/_includes/base.njk` and the layout for blog posts is in `src/_includes/post.njk`.
*   **Blog Posts:** Blog posts are written in Markdown and are located in the `src` directory. Each post has a front matter section with metadata such as the title, description, date, and tags.
