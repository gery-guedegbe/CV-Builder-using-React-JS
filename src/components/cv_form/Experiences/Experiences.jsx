import React, { useState } from "react";
import "./Experiences.css";
import { useData } from "../DataContext";

const Experiences = () => {
  const { dispatch } = useData();

  const [experiences, setExperiences] = useState([
    {
      positionExp: "",
      company: "",
      startDate: "",
      endDate: "",
      details: "",
    },
  ]);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;

    const newExperiences = [...experiences];
    newExperiences[index] = {
      ...newExperiences[index],
      [name]: value,
    };

    setExperiences(newExperiences);
  };

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        positionExp: "",
        company: "",
        startDate: "",
        endDate: "",
        details: "",
      },
    ]);
  };

  const handleRemoveExperience = (index) => {
    const newExperiences = [...experiences];
    newExperiences.splice(index, 1);
    setExperiences(newExperiences);
  };

  const handleSubmit = () => {
    dispatch({ type: "SET_EXPERIENCE_DATA", payload: experiences });
  };

  return (
    <div className="menu" id="menu">
      <div className="title">
        <div>
          <i className="fa-solid fa-wrench"></i>
          <h2> Experience</h2>
        </div>
        <div className="icons" id="icons"></div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {experiences.map((experience, index) => (
          <div key={index} className="experience-form Exp_form">
            <input
              type="text"
              name="positionExp"
              className="positionExp"
              placeholder="Position"
              value={experience.positionExp}
              onChange={(e) => handleInputChange(index, e)}
            />
            <input
              type="text"
              name="company"
              className="company"
              placeholder="Company"
              value={experience.company}
              onChange={(e) => handleInputChange(index, e)}
            />
            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              className="startDate"
              placeholder="Start Date"
              value={experience.startDate}
              onChange={(e) => handleInputChange(index, e)}
            />
            <label>End Date</label>
            <input
              type="date"
              name="endDate"
              className="endDate"
              placeholder="End Date"
              value={experience.endDate}
              onChange={(e) => handleInputChange(index, e)}
            />
            <input
              type="text"
              name="details"
              className="details"
              placeholder="Your main occupation"
              value={experience.details}
              onChange={(e) => handleInputChange(index, e)}
            />

            <div className="button-group">
              {experiences.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveExperience(index)}
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}
        <button type="button" onClick={handleAddExperience}>
          +New
        </button>
        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Experiences;
