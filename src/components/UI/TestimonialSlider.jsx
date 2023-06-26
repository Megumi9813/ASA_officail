import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function TestimonialSlider({ testimonials }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const commentTestimonials = testimonials.filter((item) => item.comments);

  console.log(typeof testimonials);

  return (
    <>
      {testimonials.length > 0 && (
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "20%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {currentSlide !== 0 && (
              <button
                onClick={() => setCurrentSlide(currentSlide - 1)}
                style={{
                  border: "none",
                  backgroundColor: "#2e4051",
                  fontSize: "24px",
                  width: "100%",
                  cursor: "posinter",
                }}
                className="color02"
              >
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  style={{ color: "#828c97" }}
                />
              </button>
            )}
          </div>
          <div className="color02 font01" style={{ width: "60%" }}>
            <>
              {commentTestimonials[currentSlide].comments.map(
                (comment, index) => (
                  <>
                    <div key={index} style={{ color: "white" }}>
                      {comment}
                    </div>
                    <br />
                  </>
                )
              )}
              <div
                style={{
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ marginRight: "4px" }}>
                  {commentTestimonials[currentSlide].name}
                </p>
                <p>({commentTestimonials[currentSlide].country})</p>
                <img
                  src={commentTestimonials[currentSlide].picture}
                  style={{
                    maxWidth: "40px",
                    marginLeft: "10px",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </>
          </div>
          <div
            style={{
              width: "20%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {currentSlide !== commentTestimonials.length - 1 && (
              <button
                onClick={() => setCurrentSlide(currentSlide + 1)}
                style={{
                  border: "none",
                  backgroundColor: "#2e4051",
                  fontSize: "24px",
                  width: "100%",
                  cursor: "posinter",
                }}
                className="color02"
              >
                <FontAwesomeIcon
                  icon={faAngleRight}
                  style={{ color: "#828c97" }}
                />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default TestimonialSlider;
