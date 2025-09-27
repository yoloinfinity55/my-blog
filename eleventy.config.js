// eleventy.config.js
import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';
import cssnano from 'cssnano';
import { DateTime } from 'luxon';

// Set the pathPrefix for production builds (your GitHub repo name)
const pathPrefix = process.env.ELEVENTY_PRODUCTION === 'true' ? '/my-blog/' : '/';

// Function to recursively copy a directory
function copyDirRecursive(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

export default function (eleventyConfig) {
  // This event runs before Eleventy builds the site
  eleventyConfig.addPassthroughCopy("src/assets/css/index.css");
  eleventyConfig.addPassthroughCopy("src/assets/js/theme.js");
  eleventyConfig.addPassthroughCopy("src/assets/images");

    eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  });

  // Add a custom collection for blog posts
  eleventyConfig.addCollection("posts", function (collection) {
    return collection.getFilteredByGlob(["src/*.md", "src/posts/*.md", "src/assets/posts/*.md"]).filter(item => item.data.tags && item.data.tags.includes("posts"));
  });

  // Tell Eleventy to use the src directory for input and _site for output
  return {
    pathPrefix,
    dir: {
      input: 'src',
      output: '_site',
    },
  };
}
