import Plans from "../../components/official/Plans";
import System from "../../components/official/System";
import TestimonialPhotos from "../../components/official/TestimonialPhotos";
import Nav from "../../components/official/Nav";

function Programs({ testimonials }) {
  return (
    <>
      {/* <Nav /> */}
      <Plans />
      <TestimonialPhotos testimonials={testimonials} />
      <System />
      {/* <MembershipIntro /> */}
    </>
  );
}

export default Programs;
