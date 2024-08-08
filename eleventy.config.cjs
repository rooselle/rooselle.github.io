const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/img')
  eleventyConfig.addPassthroughCopy('src/browserconfig.xml')
  eleventyConfig.addPassthroughCopy('src/favicon.ico')
  eleventyConfig.addPassthroughCopy('src/robots.txt')
  eleventyConfig.addPassthroughCopy('src/site.webmanifest')
  eleventyConfig.addPassthroughCopy('src/sitemap.xml')
  eleventyConfig.addPlugin(eleventySass);

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
