import React from "react";

function FAQs() {
  return (
    <section id="faqs">
      <div className="container">
        <div className="section_intro">
          <div className="section_title font02 color02">FAQs</div>
        </div>
        <div className="faq_wrapper color02">
          <ul className="faq_list font01">
            <li className="faq_item">
              <p className="question font02">
                How long are the classes/programs?
              </p>
              <p className="answer">
                Our class lengths are entirely up to our students starting with
                a 1-hour minimum. Our programs can range anywhere from a
                4-session review all the way to a multi-year mentorship program.
              </p>
            </li>
            <li className="faq_item">
              <p className="question font02">How much are classes?</p>
              <p className="answer">
                Prices start at $50 Canadian dollars for one-to-one classes and
                are negotiable for group classes.
              </p>
            </li>
            <li className="faq_item">
              <p className="question font02">
                What do I need to have for these classes?
              </p>
              <p className="answer">
                All you need for our classes are a functioning computer and/or a
                tablet with a keyboard, hi-speed internet and a motivation to
                learn.
              </p>
            </li>
            <li className="faq_item">
              <p className="question font02">Do you offer group classes?</p>
              <p className="answer">
                Yes, we offer group classes up to a maximum of 6 students to
                ensure everyone receives ample attention and feedback.
              </p>
            </li>
            <li className="faq_item">
              <p className="question font02">
                What is ASA's payment, cancellation and refund policy?
              </p>
              <p className="answer">
                Please refer to our Terms of Service for payment, cancellation
                and refund policy.
              </p>
            </li>
            <li className="faq_item">
              <p className="question font02">
                Can I register for classes outside of North America?
              </p>
              <p className="answer">
                Yes, of course. The advantage of a virtual school is you do not
                need to be in a native-English speaking country to receive
                top-tier English instruction.
              </p>
            </li>
            <li className="faq_item">
              <p className="question font02">
                Why not go to a regular academy?
              </p>
              <p className="answer">
                Language acquisition is an intimate process and requires a
                personalized and custom-tailored approach. Furthermore, instead
                of vague promises we use metrics to ensure progress.
              </p>
            </li>
            <li className="faq_item">
              <p className="question font02">
                Why are some online English classes cheaper?
              </p>
              <p className="answer">
                The majority of online English schools do not offer true English
                classes. Rather, they offer lectures with no authentic
                communication as class size will not allow for genuine
                interaction.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FAQs;