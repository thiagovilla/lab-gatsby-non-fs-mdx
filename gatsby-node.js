/**
 * @type {import('gatsby').GatsbyNode}
 */
const fs = require("fs-extra");
const path = require("path");

const outDir = path.resolve(__dirname, "content/posts/");

exports.sourceNodes = ({ getNodes }) => {
  fs.emptyDirSync(outDir);
  getNodes().filter(filterFn).forEach(writeMdxFile);
};

function filterFn(node) {
  return node.internal.type === "GoogleDocs";
}

function writeMdxFile(node) {
  fs.writeFileSync(path.resolve(outDir, getFilename(node)), getMarkdown(node));
}

function getFilename(node) {
  return node.slug + ".mdx";
}

function getMarkdown(node) {
  return node.markdown;
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
          id
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("ERR_QUERY_ALL_MDX");
    return;
  }

  const { createPage } = actions;
  const template = path.resolve("src/templates/blog-post.js");
  result.data.allMdx.nodes.forEach(node => {
    createPage({
      path: "blog/" + node.frontmatter.slug,
      component: `${template}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    });
  });
};
