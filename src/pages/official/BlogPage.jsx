import Nav from "../../components/official/Nav";

export default function BlogPage(blog) {
  return (
    <>
      {/* <Nav /> */}
      <section id="blogPage">
        <div className="container" style={{ maxWidth: "65%" }}>
          <div className="section_intro">
            <div className="section_title font02 color02">
              {blog.blog.title}
            </div>
          </div>
          <figure style={{ margin: "0 auto" }}>
            <img src={blog.blog.img} alt="" style={{ width: "100%" }} />
          </figure>
          <div style={{ marginTop: "30px", textAlign: "initial" }}>
            {blog.blog.article.map((paragraph, index) => (
              <>
                <div
                  key={index}
                  className="font01 color02"
                  style={{ fontSize: "18px" }}
                >
                  {paragraph}
                </div>
                <br />
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
