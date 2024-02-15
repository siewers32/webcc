const path = require('path');
const fs = require('fs');
const pluginWebc = require("@11ty/eleventy-plugin-webc");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(pluginWebc, {
        components: [
            "src/_components/*.webc"
        ]      
    });

    eleventyConfig.addPlugin(EleventyRenderPlugin);
    //eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    eleventyConfig.addPassthroughCopy("./src/_assets");
    eleventyConfig.addPassthroughCopy("./src/_system");


    return {
        dir: {
            input: "src",
            output: "docs",
        },
    };
};


