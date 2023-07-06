import Teacher from "./UI/Teacher";

function Teachers({ teachers }) {
  return (
    <section id="teachers" style={{marginBottom: "0"}}>
      <div className="section_intro" style={{ maxWidth: "1200px" }}>
        <div className="section_title font02 color02">Our Team.</div>
        <p className="font01 color02" style={{ margin: "0 5%" }}>
          To learn a language is to connect with the world as well as your own
          human capacities for personal growth. At ASA, our goal is to
          facilitate these connections by drawing on a broad spectrum of
          resources which engage our students and expand their language, their
          potential, and ultimately their world.
        </p>
      </div>
      <div className="teacher_list-container">
        <div className="container">
          <ul className="teacher_list">
            {teachers
              .sort((a, b) => a.order - b.order)
              .map((teacher) => (
                <Teacher teacher={teacher} key={teacher.id} />
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Teachers;
