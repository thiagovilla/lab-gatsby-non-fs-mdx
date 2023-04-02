import React from "react";

function BlogPost({ children, pageContext }) {
  return (
    <div>
      <h1>{pageContext.frontmatter.name}</h1>
      {children}
    </div>
  );
}

export default BlogPost;
