if (process.env.NODE_ENV !== "production") require("dotenv").config();

function loadConfig() {
  return {
    googleDocs: {
      folderId: process.env.GOOGLE_DOCS_FOLDER_ID,
    },
  };
}

module.exports = loadConfig;
