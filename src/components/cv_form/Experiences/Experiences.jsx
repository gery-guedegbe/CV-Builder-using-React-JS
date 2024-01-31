import React, { useState } from "react";
import "./Experiences.css";

const Experiences = () => {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      position: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const handleNewExperience = () => {
    setExperiences((prevExperiences) => [
      ...prevExperiences,
      {
        id: prevExperiences.length + 1,
        position: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const handleRemoveExperience = (id) => {
    setExperiences((prevExperiences) =>
      prevExperiences.filter((experience) => experience.id !== id)
    );
  };

  const renderExperiences = () => {
    return experiences.map((experience, index) => (
      <div key={experience.id} className="experience-form">
        {index !== 0 && (
          <div className="title">
            <div>
              <i className="fa-solid fa-wrench"></i>
              <h2> Experience #{index}</h2>
            </div>
          </div>
        )}
        <form action="">
          <input
            type="text"
            name={`position${experience.id}`}
            className="position"
            placeholder="Position"
          />
          <input type="text" className="company" placeholder="Company" />
          <label htmlFor={`startDate${experience.id}`}>Date Start</label>
          <input
            type="date"
            name={`startDate${experience.id}`}
            className="startDate"
            placeholder="Start Date of employment"
          />
          <label htmlFor={`endDate${experience.id}`}>Date End</label>
          <input
            type="date"
            name={`endDate${experience.id}`}
            className="endDate"
            placeholder="End Date of employment"
          />
          <input
            type="text"
            className="description"
            placeholder="Your main occupation"
          />
          {(index !== 0 || experiences.length === 1) && (
            <div className="button-group">
              {index !== 0 && (
                <button
                  type="button"
                  className="remove"
                  onClick={() => handleRemoveExperience(experience.id)}
                >
                  Remove
                </button>
              )}
              {index === experiences.length - 1 && (
                <button
                  type="button"
                  className="new"
                  onClick={handleNewExperience}
                >
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
            <i className="fa-solid fa-wrench"></i>
            <h2> Experience</h2>
          </div>
          <div className="icons" id="icons"></div>
        </div>
      </button>
      <div className="menu_container" id="menu_container">
        {renderExperiences()}
      </div>
    </div>
  );
};

export default Experiences;
