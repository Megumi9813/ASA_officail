import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons";

function System() {
  return (
    <section id="system">
      <div className="system_container">
        <div className="container">
          <div className="section_intro">
            <div className="section_title font02 color02">
              Here's How It Works
            </div>
          </div>
          <ul className="system_list font01 color02">
            <li className="system_item">
              <FontAwesomeIcon icon={faCommentDots} className="color02" />
              <h4 className="font02">1. Send an email or Start a Chat</h4>
              <p>
                What sets ASA apart is our needs-based, diagnostic-prognostic
                approach.
              </p>
            </li>
            <li className="system_item">
              <FontAwesomeIcon icon={faCalendarDays} className="color02" />
              <h4 className="font02">2. Book a Test</h4>
              <p>
                We invite all prospective students to register for a free
                assessment where after a comprehensive grammar, reading, writing
                and speaking exam, students are provided with a range of options
                on how to achieve their desired goal.
              </p>
            </li>
            <li className="system_item">
              <FontAwesomeIcon icon="fa-chalkboard-user" className="color02" />
              <FontAwesomeIcon icon={faChalkboardUser} className="color02" />
              <h4 className="font02">3. Choose and built a Study Plan</h4>
              <p>
                Students may very well only need a few English classes or may
                benefit from our long-term coaching program.
              </p>
            </li>
          </ul>
          <Link to="/Booking">
            <button className="btn">Contatc Us</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default System;