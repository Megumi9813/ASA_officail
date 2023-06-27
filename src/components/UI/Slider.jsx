import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Slider({ testimonials }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      {testimonials.length > 0 && (
        <>
          <h2
            className="font02 color02"
            style={{ fontSize: "3rem", padding: "35px 0" }}
          >
            Student Stories
          </h2>
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
                    backgroundColor: "#fff",
                    fontSize: "24px",
                    width: "100%",
                    cursor: "posinter",
                  }}
                  className="color02"
                >
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
              )}
            </div>
            <div className="color02 font01" style={{ width: "60%" }}>
              {testimonials[currentSlide].comments ? (
                <div>
                  {testimonials[currentSlide].comments.map((comment, index) => (
                    <>
                      <div key={index}>{comment}</div>
                      <br />
                    </>
                  ))}
                </div>
              ) : (
                <div style={{ width: "100%", aspectRatio: "16/9" }}>
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src={`https://www.youtube.com/embed/${testimonials[currentSlide].url}`}
                    allowFullScreen
                  />
                </div>
              )}
            </div>
            <div
              style={{
                width: "20%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {currentSlide !== testimonials.length - 1 && (
                <button
                  onClick={() => setCurrentSlide(currentSlide + 1)}
                  style={{
                    border: "none",
                    backgroundColor: "#fff",
                    fontSize: "24px",
                    width: "100%",
                    cursor: "posinter",
                  }}
                  className="color02"
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              )}
            </div>
          </div>
          <div
            className="font02"
            style={{
              backgroundColor: "#2e4051",
              color: "#fff",
              padding: "20px 0",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              marginTop: "35px",
              alignItems: "center",
              height: "50px",
            }}
          >
            <p style={{ marginRight: "4px" }}>
              {testimonials[currentSlide].name}
            </p>
            <p>({testimonials[currentSlide].country})</p>
            <img
              src={testimonials[currentSlide].picture}
              alt="The picture of the student"
              style={{
                maxWidth: "40px",
                marginLeft: "10px",
                borderRadius: "50%",
              }}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Slider;
