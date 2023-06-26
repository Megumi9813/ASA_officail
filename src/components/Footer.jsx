import { useEffect, useState } from "react";
import AsaLogoBrown from "../assets/AsaLogoBrown.png";
import { Link } from "react-router-dom";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

function Footer() {
  const [submitted, setSubmitted] = useState(
    localStorage.getItem("submitted") === "false"
  );
  const [data, setData] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "subscribers"), {
        timeStamp: serverTimestamp(),
        email: data,
      });
      setSubmitted(true);
      localStorage.setItem("submitted", true);
      console.log("submitted");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="footer">
      <div className="container color01">
        <div className="footer_wrapper">
          <div className="footer_left">
            <figure>
              <img src={AsaLogoBrown} alt="" />
            </figure>
            <p className="font01">
              For our latest membership plan and Blog subscribe below
            </p>
            <div className="email_container">
              <input
                type="email"
                placeholder="exmaple@email.com"
                onChange={(e) => {
                  setData(e.target.value);
                }}
              />
              {submitted ? (
                <button className="submitted-btn">Submitted</button>
              ) : (
                <button
                  className="btn"
                  onClick={handleAdd}
                  style={{ cursor: "pointer" }}
                >
                  Send
                </button>
              )}
            </div>
            {submitted ? (
              <p className="font01">Thanks for submitting!</p>
            ) : (
              <></>
            )}
          </div>
          <div className="footer_right">
            <div className="menu font02">
              <h3>Menu</h3>
              <ul className="menu_list font01">
                <li className="link_item">
                  <Link to="/">Home</Link>
                </li>
                <li className="link_item">
                  <Link to="/About">About</Link>
                </li>
                <li className="link_item">
                  <Link to="/Programs">Programs</Link>
                </li>
                <li className="link_item">
                  <Link to="/Booking">Book a Test</Link>
                </li>
                <li className="link_item">
                  <Link to="/Blog">Blog</Link>
                </li>
                {/* <li className="link_item">
                  <Link
                    to="/asa-membership"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Membership
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className="social font02">
              <h3>Social</h3>
              <ul className="social_list font01">
                <li className="link_item">
                  <a
                    href="https://www.facebook.com/asavanedu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li className="link_item">
                  <a
                    href="https://www.instagram.com/asavancouver/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li className="link_item">
                  <a
                    href="https://www.linkedin.com/company/the-academy-of-scholastic-achievement"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="link_item">
                  <a
                    href="https://twitter.com/asavancouver1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li className="link_item">
                  <a
                    href="https://www.youtube.com/channel/UC25kAkWdpINL0da3HnsDNzA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact font02">
              <h3>Contact</h3>
              <ul className="contact_list font01">
                <li className="link_item contact_item">
                  info@asavancouver.com
                </li>
                <li className="link_item contact_item">604-774-4501</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyRight font01">
          Copyright © 2022 Academy of Scholastic Achievement - All Rights
          Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;