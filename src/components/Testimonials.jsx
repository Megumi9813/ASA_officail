import TestimonialSlider from "./UI/TestimonialSlider";

function Testimonials({ testimonials }) {

  return (
    <section id="testimonials">
      <div className="testimonials_container">
        <div className="container">
          <div className="section_intro">
            <div className="section_title font02">What Our Students Say</div>
          </div>
          <ul className="testimonial_list" style={{listStyle: "none"}}>
            <li className="testimonial_item">
              <TestimonialSlider testimonials={testimonials} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
