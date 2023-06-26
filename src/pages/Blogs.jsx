import React from "react";
import BlogList from "../components/BlogList";
import Nav from "../components/Nav";

function Blogs({ blogs }) {
  return (
    <>
      <Nav />
      <BlogList blogs={blogs} />
    </>
  );
}

export default Blogs;
