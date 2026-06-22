import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function(eleventyConfig) {
  // 1. Copy your stylesheet
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("assets");

  // 2. Configure the image plugin
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
}
