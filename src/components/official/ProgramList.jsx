import Program from "./UI/Program";
import { programData } from "../../programData";

function ProgramList() {
  return (
    <section id="programIntro">
      <div className="programIntro_container">
        <div className="container">
          <div className="section_intro">
            <div className="section_title font02 color02">
              Our Personalized Programs
            </div>
            <p className="font01 color02">
              Students may very well only need a few English classes or may
              benefit from our long-term coaching program.
            </p>
          </div>
          <ul className="programIntro_list">
            {programData.slice(1).map((program) => (
              <Program program={program} key={program.id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProgramList;
