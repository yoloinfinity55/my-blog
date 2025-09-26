---
title: "Welcome to the Project!"
description: "A guide to understanding the structure, technologies, and conventions of this Eleventy-powered blog."
date: 2025-09-27
tags:
  - posts
layout: post.njk
---


> This is a personal blog built using the Eleventy static site generator and styled with Tailwind CSS. The blog posts are written in Markdown and the site is structured using Nunjucks templates.


## Core Technologies


Here are the key technologies used in this project:


*   **Eleventy:** A simple static site generator.
*   **Tailwind CSS:** A utility-first CSS framework for styling.
*   **Nunjucks:** A templating language for creating layouts.
*   **PostCSS:** A tool for transforming CSS with JavaScript.
*   **Luxon:** A library for working with dates and times.


## Project Anatomy


The project is organized as follows:


*   `src`: Contains all the source code for the blog.
    *   `_includes`: Holds the Nunjucks templates for layouts (`base.njk`, `post.njk`).
    *   `assets`: Contains static assets like CSS and images.
    *   `*.md`: The blog posts themselves, written in Markdown.
    *   `index.njk`: The main entry point for the blog's homepage.
*   `_site`: The output directory where the generated static site is placed.
*   `eleventy.config.js`: The main configuration file for Eleventy.
*   `package.json`: Defines project dependencies and scripts.
*   `tailwind.config.js`: The configuration file for Tailwind CSS.


## Getting Started


### Development


To start the local development server with live reloading, run:


```bash
npm start
```


The site will be available at `http://localhost:8080`.


### Production


To build a production-ready version of the site, run:


```bash
npm run build
```


The generated files will be placed in the `_site` directory.


## Development Guidelines


### Styling


The project uses **Tailwind CSS** for all styling. The main stylesheet is located at `src/assets/css/index.css` and is processed by PostCSS.


### Templating


We use **Nunjucks** for templating. Key templates include:
*   `src/_includes/base.njk`: The main site layout.
*   `src/_includes/post.njk`: The layout for individual blog posts.


### Blog Posts


Blog posts are written in **Markdown** and are located in the `src` directory. Each post must include a front matter section with metadata:


*   `title`: The title of the post.
*   `description`: A brief summary of the post.
*   `date`: The publication date.
*   `tags`: A list of relevant tags.