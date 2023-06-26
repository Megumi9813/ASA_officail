import TestimonialPhoto from "./UI/TestimonialPhoto";

function TestimonialPhotos({ testimonials }) {
      const commentTestimonials = testimonials.filter(
        (item) => item.name === "Laura L" || item.name === "Flora H"
      );

  return (
    <section id="testimonialPhotos">
      <div className="testimonialPhotos_container">
        <div className="container">
          <ul className="testimonialPhotos_list">
            {commentTestimonials.map((testimonial) => (
              <TestimonialPhoto
                testimonial={testimonial}
                key={testimonial.id}
              />
            ))}
            {/* {testimonials
              .sort((a, b) => a.id - b.id)
              .slice(0, 2)
              .map((testimonial) => (
                <TestimonialPhoto
                  testimonial={testimonial}
                  key={testimonial.id}
                />
              ))} */}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TestimonialPhotos;