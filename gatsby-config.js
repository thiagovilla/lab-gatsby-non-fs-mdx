/**
 * @type {import('gatsby').GatsbyConfig}
 */
const config = require("./boot/load-config")();

module.exports = {
  siteMetadata: {
    title: `Non-fs MDX test`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-google-docs",
      options: {
        folder: config.googleDocs.folderId,
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
