import React from "react";
import FAQs from "../components/FAQs";
import Nav from "../components/Nav";
import Teachers from "../components/Teachers";
import Testimonials from "../components/Testimonials";

function About({ teachers, testimonials }) {
  return (
    <>
      <Nav />
      <Teachers teachers={teachers} />
      <Testimonials testimonials={testimonials} />
      <FAQs />
    </>
  );
}

export default About;
