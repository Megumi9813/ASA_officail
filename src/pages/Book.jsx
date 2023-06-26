import React from "react";
import Booking from "../components/Booking";
import Nav from "../components/Nav";

function Book({ teachers }) {
  return (
    <>
      <Nav />
      <Booking teachers={teachers} />
    </>
  );
}

export default Book;
