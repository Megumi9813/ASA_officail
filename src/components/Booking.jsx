import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { calendarData } from "../calendarData";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function Booking({ teachers }) {
  return (
    <section id="booking">
      <div className="booking_container">
        <div className="container">
          <div className="section_intro">
            <div className="section_title font02 color02">
              Book a free assessment
            </div>
            <p className="font01 color02">
              Free speaking, writing, reading and grammar assessment to identify
              your needs.
            </p>
          </div>
          <ul className="booking_list color02">
            {calendarData.map((calendar) => (
              <a href={calendar.url} target="_blank">
                <li className="booking_item">
                  <h3>{calendar.title}</h3>
                  <div className="booking_item-info">
                    <div className="booking_during">
                      <FontAwesomeIcon icon={faClock} />
                      55 minutes
                    </div>
                    <button className="btn">Book a Test</button>
                  </div>
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Booking;
