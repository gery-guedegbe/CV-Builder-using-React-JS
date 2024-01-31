import React from "react";
import "./CV.css";

export const CV = ({ formData }) => {
  return (
    <div className="cv_container">
      <div className="header" id="header">
        <div className="picture_div">
          <img className="picture" alt="" />
        </div>
        <div className="right">
          <h1 className="name"> </h1>
          <p className="profileTitlte"></p>
          <div className="cv_contact">
            <span>
              <i class="fa-solid fa-envelope"></i>
            </span>
            <span>
              <i class="fa-solid fa-phone"></i>
            </span>
            <span>
              <i class="fa-solid fa-location-dot"></i>
            </span>
            <span>
              <i class="fa-solid fa-link"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="cv_main">
        <div className="main_left">
          <div className="profil">
            <h2>Profile</h2>
            <p className="profil-description"></p>
          </div>
          <div className="hr_1"></div>
          <div className="education">
            <h2></h2>
            <h4></h4>
            <p></p>
          </div>
          <div className="hr_1"></div>
          <div className="experiences">
            <h2>Experiences</h2>
            <div>
              <h4></h4>
              <span></span>
              <p></p>
            </div>
          </div>
        </div>
        <div className="main_right">
          <div className="hr_2"></div>
          <div className="competences">
            <h2>Skills</h2>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
