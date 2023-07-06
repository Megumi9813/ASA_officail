import { useState } from "react";
import { Link } from "react-router-dom";
import AsaLogo from "../../assets/AsaLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Login from "./Login";

function MembershipNav() {
  return (
    <div
      className="fixed w-full h-20 px-8 items-center flex"
      style={{ borderBottom: "2px solid hsla(0, 0%, 52.2%, 0.1)" }}
    >
      <div className="flex justify-between pt-0 w-full">
        <div className="flex">
          <button
            style={{ color: "#c69476" }}
            className="py-2 px-3 flex items-center"
          >
            <FontAwesomeIcon icon={faBars} className="h-7 w-10" />
            {/* <FontAwesomeIcon icon={faXmark} /> */}
          </button>
          <Link to="/membership" className="flex">
            <figure className="">
              <img
                src={AsaLogo}
                alt="logo"
                className="w-full max-h-14"
                style={{ maxWidth: "240px" }}
              />
            </figure>
          </Link>
        </div>
        <div className="flex items-center">
          <Login />
          <div
            className="h-10 flex items-center mr-3.5 rounded"
            style={{ backgroundColor: "#c69476" }}
          >
            <button className="px-4 py-0 text-sm font-light text-white">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipNav;
