import React from "react";

function Program({ program }) {
  return (
    <li className="program_item">
      <figure>
        <img src={program.url} alt="" />
      </figure>
      <div className="program_info">
        <h4 className="program_title font02 color02">{program.title}</h4>
        <p className="font01 color02">{program.para}</p>
        <a href={program.link} target="_blank" rel="noreferrer">
          <button
            className="btn"
            style={{ margin: "16px 0", cursor: "pointer" }}
          >
            Find out more
          </button>
        </a>
      </div>
    </li>
  );
}

export default Program;
