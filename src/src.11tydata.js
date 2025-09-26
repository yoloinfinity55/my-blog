export default {
  layout: "post.njk",
  eleventyComputed: {
    tags: (data) => {
      // Only apply default tags if no tags are explicitly set or if it's not an array
      if (!data.tags || (Array.isArray(data.tags) && data.tags.length === 0)) {
        return ["posts"];
      }
      return data.tags;
    },
    title: (data) => {
      if (data.title) {
        return data.title;
      }
      // Extract filename without extension and replace hyphens with spaces, then capitalize each word
      const filename = data.page.fileSlug;
      return filename
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    },
    date: (data) => {
      if (data.date) {
        return data.date;
      }
      return new Date(); // Current date if not provided
    },
    description: (data) => {
      if (data.description) {
        return data.description;
      }
      // Use Eleventy's built-in excerpt if description is not provided
      if (data.page.excerpt) {
        return data.page.excerpt;
      }
      return '';
    }
  }
};
