import SystemImg from "../../assets/SystemImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons";

function System() {
  return (
    <section id="systemChart">
      <div className="container">
        <div className="section_intro" style={{ maxWidth: "1200px" }}>
          <h2 className="section_title font02 color02">How It Works</h2>
          <p className="font01 color02" style={{ margin: "0 5%" }}>
            We provide English language training based on the most effective
            approaches to language acquisition in order to maximize performance
            on standardized tests such as CELPIP, SAT, TOEFL, Cambridge and
            IELTS.
          </p>
        </div>
        <div className="system_chart">
          <ul className="system_chart-list color02 font01">
            <li className="system_chart-item">
              <FontAwesomeIcon icon={faCommentDots} />
              <div className="system_chart-description">
                <h4 className="font02">Send an email or Start a Chat</h4>
                <p>
                  What sets ASA apart is our needs-based, diagnostic-prognostic
                  approach.
                </p>
              </div>
            </li>
            <li className="system_chart-item">
              <FontAwesomeIcon icon={faCalendarDays} />
              <div className="system_chart-description">
                <h4 className="font02">Book a Test</h4>
                <p>
                  We invite all prospective students to register for a free
                  assessment where after a comprehensive grammar, reading,
                  writing and speaking exam, students are provided with a range
                  of options on how to achieve their desired goal.
                </p>
              </div>
            </li>
            <li className="system_chart-item">
              <FontAwesomeIcon icon={faChalkboardUser} />
              <div className="system_chart-description">
                <h4 className="font02">Choose and built a Study Plan</h4>
                <p>
                  Students may very well only need a few English classes or may
                  benefit from our long-term coaching program.
                </p>
              </div>
            </li>
          </ul>
          <div
            className="system_chart-img"
            style={{
              backgroundImage: `url(${SystemImg})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default System;
