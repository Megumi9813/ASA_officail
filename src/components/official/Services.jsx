import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleRobbery } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <section id="services">
      <div className="container color01">
        <h2 className="section_title font02">
          Professional. Experienced. Compassionate.
        </h2>
        <div className="service_container">
          <ul className="service_list">
            <li className="service_item">
              <FontAwesomeIcon icon={faPeopleRobbery} />
              <h5>Mentorship and Academic Coaching Program (MACP)</h5>
            </li>
            <li className="service_item">
              <FontAwesomeIcon icon={faBriefcase} />
              <h5>Business Communication Program (BCP)</h5>
            </li>
            <li className="service_item">
              <FontAwesomeIcon icon={faChartColumn} />
              <h5>Test Preparation Program (TPP)</h5>
            </li>
            <li className="service_item">
              <FontAwesomeIcon icon={faEarthAmericas} />
              <h5>English Program for Immigrants in Canada (EPIC)</h5>
            </li>
          </ul>
          <Link to="/Programs">
            <button className="btn">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
