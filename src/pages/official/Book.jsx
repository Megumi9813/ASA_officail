import React from "react";
import Booking from "../../components/official/Booking";
import Nav from "../../components/official/Nav";

function Book({ teachers }) {
  return (
    <>
      {/* <Nav /> */}
      <Booking teachers={teachers} />
    </>
  );
}

export default Book;
