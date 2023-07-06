import React from "react";
import Landing from "../../components/official/Landing";
import SystemChart from "../../components/official/SystemChart";
import Services from "../../components/official/Services";
import Team from "../../components/official/Team";
import Review from "../../components/official/Review";
import Nav from "../../components/official/Nav";

function Home({ teachers, testimonials }) {
  return (
    <>
      {/* <Nav /> */}
      <Landing />
      <Team teachers={teachers} />
      <SystemChart />
      <Services />
      <Review testimonials={testimonials} />
    </>
  );
}

export default Home;
