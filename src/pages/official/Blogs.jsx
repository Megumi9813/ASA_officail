import React from "react";
import BlogList from "../../components/official/BlogList";
import Nav from "../../components/official/Nav";

function Blogs({ blogs }) {
  return (
    <>
      {/* <Nav /> */}
      <BlogList blogs={blogs} />
    </>
  );
}

export default Blogs;
