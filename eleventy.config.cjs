module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/img')
  eleventyConfig.addPassthroughCopy('src/browserconfig.xml')
  eleventyConfig.addPassthroughCopy('src/favicon.ico')
  eleventyConfig.addPassthroughCopy('src/robots.txt')
  eleventyConfig.addPassthroughCopy('src/site.webmanifest')
  eleventyConfig.addPassthroughCopy('src/sitemap.xml')

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
