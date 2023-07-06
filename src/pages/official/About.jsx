import React from "react";
import FAQs from "../../components/official/FAQs";
import Nav from "../../components/official/Nav";
import Teachers from "../../components/official/Teachers";
import Testimonials from "../../components/official/Testimonials";

function About({ teachers, testimonials }) {
  return (
    <>
      {/* <Nav /> */}
      <Teachers teachers={teachers} />
      <Testimonials testimonials={testimonials} />
      <FAQs />
    </>
  );
}

export default About;
