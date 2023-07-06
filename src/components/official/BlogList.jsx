import Blog from "./UI/Blog";

function BlogList({ blogs }) {
  return (
    <section id="blog">
      <div className="container">
        <div className="blog_wrapper">
          <ul className="blog_list">
            {blogs
              .sort((a, b) => a.id - b.id)
              .map((blog) => (
                <Blog blog={blog} key={blog.id} />
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BlogList;
