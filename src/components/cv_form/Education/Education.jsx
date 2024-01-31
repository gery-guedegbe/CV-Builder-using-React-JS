import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="menu">
      <button className="menu_button" id="menu_button">
        <div className="title">
          <div>
            <i class="fa-solid fa-graduation-cap"></i>
            <h2>Education</h2>
          </div>
          <div className="icons" id="icons"></div>
        </div>
      </button>
      <form action="">
        <input
          type="text"
          name="school"
          className="school"
          id="school"
          placeholder="School"
        />
        <input
          type="text"
          name="degree"
          className="degree"
          id="degree"
          placeholder="Degree"
        />
      </form>
    </div>
  );
};

export default Education;
