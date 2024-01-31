import React, { useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([
    {
      id: 1,
      value: "",
    },
  ]);

  const handleNewSkills = () => {
    setSkills((prevSkills) => [
      ...prevSkills,
      {
        id: prevSkills.length + 1,
        value: "",
      },
    ]);
  };

  const handleRemoveSkills = (id) => {
    setSkills((prevSkills) => prevSkills.filter((skill) => skill.id !== id));
  };

  const renderSkills = () => {
    return skills.map((skill, index) => (
      <div key={skill.id} className="skills-color">
        {index !== 0 && (
          <div className="title">
            <div>
              <i className="fa-solid fa-gears"></i>
              <h2> Skills #{index}</h2>
            </div>
          </div>
        )}
        <form key={index}>
          <input
            type="text"
            name={`skills${skill.id}`}
            className="skills"
            placeholder="Language or Technology"
          />
          {(index !== 0 || skills.length === 1) && (
            <div className="button-group">
              {index !== 0 && (
                <button
                  type="button"
                  className="remove"
                  onClick={() => handleRemoveSkills(skill.id)}
                >
                  Remove
                </button>
              )}
              {index === skills.length - 1 && (
                <button type="button" className="new" onClick={handleNewSkills}>
                  +New
                </button>
              )}
            </div>
          )}
        </form>
      </div>
    ));
  };

  return (
    <div className="menu" id="menu">
      <button className="menu_button" id="menu_button">
        <div className="title">
          <div>
            <i className="fa-solid fa-gears"></i>
            <h2>Skills</h2>
          </div>
        </div>
      </button>
      <div className="menu_container" id="menu_container">
        {renderSkills()}
      </div>
    </div>
  );
};

export default Skills;
