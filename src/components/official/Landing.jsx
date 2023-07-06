import LandingImg from "../../assets/LandingImg.jpg";

function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header_container">
          <div className="header_description color02">
            <h1 className="font02">English classes for the 21st century</h1>
            <h3 className="font01">For Anyone, from Anywhere, at Anytime.</h3>
          </div>
          <figure className="header_img-wrapper">
            <img src={LandingImg} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
}

export default Landing;
