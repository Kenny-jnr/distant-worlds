// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("welcome", function(name, image) {
    return `<img class="about" alt="diamond" src="/images/${image}.jpeg" width="100" />
    <div class="welcome-message">
      <p>This is the point where I talk about my trip to the ${name} planet.</p>
    </div>`
  })
};