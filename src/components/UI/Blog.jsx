import { useState } from "react";
import { Link } from "react-router-dom";

function Blog({ blog }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Link to={blog.id} style={{ textDecoration: "none" }}>
      <li className="blog_item">
        <img
          src={blog.img}
          alt=""
          onLoad={() => {
            setIsImageLoaded(true);
          }}
        />
        <div className="blog_info-wrapper">
          <p className="date color02 font01">{blog.date}</p>
          <h3 className="blog_title font02 color02">{blog.title}</h3>
          <button>Continue Reading</button>
        </div>
      </li>
    </Link>
  );
}

export default Blog;