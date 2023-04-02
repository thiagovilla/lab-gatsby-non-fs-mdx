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
