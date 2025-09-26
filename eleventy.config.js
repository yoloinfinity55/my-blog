// eleventy.config.js
import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';
import cssnano from 'cssnano';
import { DateTime } from 'luxon'; 

// Set the pathPrefix for production builds (your GitHub repo name)
const pathPrefix = process.env.ELEVENTY_PRODUCTION ? '/my-blog/' : '/';

export default function (eleventyConfig) {
  // This event runs before Eleventy builds the site
  eleventyConfig.on('eleventy.before', async () => {
    const tailwindInputPath = path.resolve('src/assets/css/index.css');
    const tailwindOutputPath = '_site/assets/css/index.css';
    const cssContent = fs.readFileSync(tailwindInputPath, 'utf8');

    // Define the PostCSS plugins
    const plugins = [
      tailwindcss(),
      cssnano({ preset: 'default' })
    ];

    // Process the CSS
    const result = await postcss(plugins).process(cssContent, {
      from: tailwindInputPath,
      to: tailwindOutputPath,
    });

    // Write the output CSS file
    fs.mkdirSync(path.dirname(tailwindOutputPath), { recursive: true });
    fs.writeFileSync(tailwindOutputPath, result.css);
  });

    eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  });

  // Add a custom collection for blog posts
  eleventyConfig.addCollection("posts", function (collection) {
    return collection.getFilteredByGlob("src/*.md").filter(item => item.data.tags && item.data.tags.includes("posts"));
  });

  // Copy `src/assets/images` to `_site/assets/images`
  eleventyConfig.addPassthroughCopy("src/assets/images");

  // Tell Eleventy to use the src directory for input and _site for output
  return {
    pathPrefix,
    dir: {
      input: 'src',
      output: '_site',
    },
  };
}
