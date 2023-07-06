import ReviewImg from "../../assets/Review.jpg";
import Slider from "./UI/Slider";

function Review({ testimonials }) {
  return (
    <section
      id="review"
      style={{ backgroundImage: `url(${ReviewImg})`, backgroundSize: "cover" }}
    >
      <div className="container">
        <div className="review_container">
          <ul className="review_list">
            <li className="review_item">
              <Slider testimonials={testimonials} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Review;