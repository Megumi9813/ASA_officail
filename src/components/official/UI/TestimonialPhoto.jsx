import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function TestimonialPhoto({ testimonial }) {

  return (
    <li className="testimonialPhotos_item font01" style={{ fontSize: "16px" }}>
      <FontAwesomeIcon icon={faQuoteLeft} className="quote-up" />
      <p>{testimonial.shortComment}</p>
      <div className="student_info-wrapper">
        <img src={testimonial.picture} alt="" />
        <div className="student_info">
          <div className="studentName">{testimonial.name}</div>
          <div className="country">{testimonial.country}</div>
        </div>
      </div>
      <FontAwesomeIcon icon={faQuoteRight} className="quote-down" />
    </li>
  );
}

export default TestimonialPhoto;
