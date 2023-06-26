import { programData } from "../programData";
import { Link } from "react-router-dom";

function Plans() {
  return (
    <section id="plans">
      <div className="plan_container">
        <div className="container">
          <div className="section_intro">
            <div className="section_title font02 color02">What We Offer</div>
            <p className="font01 color02">
              Providing English language training based on the most effective
              approaches to language acquisition in order to maximize
              performance on standardized tests such as CELPIP, SAT, TOEFL,
              Cambridge and IELTS.
            </p>
          </div>
          <ul className="plan_list">
            <li className="plan_item">
              <figure>
                <img src={programData[0].url} alt="" />
              </figure>
              <h5 className="plan_title font02 color02">
                {programData[0].title}
              </h5>
              <Link to="/ProgramIntro">
                <button className="btn">Let's get started!</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Plans;