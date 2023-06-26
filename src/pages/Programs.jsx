import React from "react";
import Plans from "../components/Plans";
import System from "../components/System";
// import MembershipIntro from "../components/MembershipIntro";
import TestimonialPhotos from "../components/TestimonialPhotos";
import Nav from "../components/Nav";

function Programs({ testimonials }) {
  return (
    <>
      <Nav />
      <Plans />
      <TestimonialPhotos testimonials={testimonials} />
      <System />
      {/* <MembershipIntro /> */}
    </>
  );
}

export default Programs;
