# Non-fs MDX Gatsby Pages

This laboratory demonstrantes how to programatically create Gatsby pages from non-filesystem sourced MDX content, such as CMSs and cloud storage.

This example uses MDX content from Google Docs, but should be easily extendable to other sources.

## Context

Gatsby MDX plugin `gastby-plugin-mdx`'s latest version currently only compiles MDX from filesystem MDX files sourced via `gatsby-source-filesystem`.

## Installation

Please run `npx gatsby-source-google-docs-token` to generate the necessary environment variables for this example.

You'll also need to add an extra variable `GOOGLE_DOCS_FOLDER_ID` pointing to a Google Docs folder.
