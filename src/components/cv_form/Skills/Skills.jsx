import React, { useState } from "react";
import "./Skills.css";
import { useData } from "../DataContext";

const Skills = () => {
  const { dispatch } = useData();

  const [mainFormData, setMainFormData] = useState({
    skills: "",
  });

  const [additionalSkills, setAdditionalSkills] = useState([
    {
      id: 1,
      skills: "",
    },
  ]);

  const handleMainInputChange = (e) => {
    const { name, value } = e.target;
    setMainFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAdditionalInputChange = (e, index) => {
    const { name, value } = e.target;
    const newAdditionalSkills = [...additionalSkills];
    newAdditionalSkills[index] = {
      ...newAdditionalSkills[index],
      [name]: value,
    };
    setAdditionalSkills(newAdditionalSkills);
  };

  const handleAddSkill = () => {
    const newSkill = {
      id: additionalSkills.length + 1,
      skills: "",
    };
    setAdditionalSkills([...additionalSkills, newSkill]);
  };

  const handleRemoveSkill = (index) => {
    const newAdditionalSkills = additionalSkills.filter((_, i) => i !== index);
    setAdditionalSkills(newAdditionalSkills);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_SKILL_DATA",
      payload: {
        skills: [mainFormData, ...additionalSkills],
      },
    });
  };

  return (
    <div className="menu" id="menu">
      <div className="title">
        <div>
          <i className="fa-solid fa-gears"></i>
          <h2>Skills</h2>
        </div>
      </div>

      <form className="skills_form" onSubmit={handleSubmit}>
        <div className="skill-item">
          <input
            type="text"
            name="skills"
            className="skills"
            placeholder="Language or Technology"
            value={mainFormData.skills}
            onChange={handleMainInputChange}
          />
        </div>

        {additionalSkills.map((skill, index) => (
          <div key={skill.id} className="skill-items">
            <input
              type="text"
              name="skills"
              className="skills"
              placeholder="Language or Technology"
              value={skill.skills}
              onChange={(e) => handleAdditionalInputChange(e, index)}
            />

            <div>
              <button type="button" onClick={() => handleRemoveSkill(index)}>
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="button-group">
          <button type="button" onClick={handleAddSkill}>
            +New
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Skills;
