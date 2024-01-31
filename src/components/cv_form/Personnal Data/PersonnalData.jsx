import React from "react";
import "./PersonnalData.css";
import { useState } from "react";
import CV from "../../cv_preview/CV";
import { useForm } from "react-hook-form";

// eslint-disable-next-line no-lone-blocks
{
  /*function changeIcon() {
  const menuContainer = document.querySelector("#menu_container");
  const button = document.querySelector("#menu_button");
  const icon = document.querySelector("#icon");
  const menu = document.querySelector("#menu");

  button.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuContainer.classList.toggle("active");

    if (menuContainer.classList.contains("active")) {
      icon.classList.remove("fa-circle-chevron-down");
      icon.classList.add("fa-solid", "fa-circle-chevron-up");
    } else {
      icon.classList.remove("fa-circle-chevron-up");
      icon.classList.add("fa-solid", "fa-circle-chevron-down");
    }
  });
}*/
}

const PersonnalData = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    profileTitle: "",
    file: null,
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      file,
    }));
  };

  const { register, handleSubmit } = useForm();

  return (
    <div className="menu" id="menu">
      <button className="menu_button" id="menu_button">
        <div className="title">
          <div>
            <i class="fa-solid fa-id-card"></i>
            <h2>Personal Data</h2>
          </div>
          <div className="icons" id="icons">
            {/*<i class="fa-solid fa-circle-chevron-down down-icon"></i>
            <i class="fa-solid fa-circle-chevron-up up-icon"></i>
            <i id="icon"></i>
            */}
          </div>
        </div>
      </button>
      <div className="menu_container" id="menu_container">
        <div>
          <form action="">
            <div>
              <input
                type="text"
                name="firstName"
                className="firstName"
                id="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastName"
                className="lastName"
                id="lasttName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <input
              type="text"
              name="profileTitle"
              className="profileTitle"
              id="profileTitlte"
              placeholder="Profile Title: Backend Developer "
              value={formData.profileTitle}
              onChange={handleInputChange}
            />
            <input
              type="file"
              name="file"
              className="file"
              id="file"
              value={formData.file}
              onChange={handleFileChange}
            />
            <input
              type="text"
              name="description"
              className="description"
              id="description"
              value={formData.description}
              placeholder="Tell something about yourself"
              onChange={handleInputChange}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonnalData;
