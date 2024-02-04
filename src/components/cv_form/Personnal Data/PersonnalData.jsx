import React from "react";
import { useState } from "react";
import { useData } from "../DataContext";
import "./PersonnalData.css";

const PersonnalData = () => {
  const { dispatch } = useData();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    profileTitle: "",
    description: "",
    file: null,
    imageUrl: "",
    nationality: "",
    sexe: "",
    language: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const file = e.target.files[0];
      setFormData((prevData) => ({
        ...prevData,
        file,
      }));

      // Utilisation FileReader pour obtenir l'URL de l'image
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          imageUrl: reader.result,
        }));
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_PERSONAL_DATA", payload: formData });
  };

  return (
    <div className="menu" id="menu">
      <div className="title">
        <div>
          <i className="fa-solid fa-id-card"></i>
          <h2>Personal Data</h2>
        </div>
      </div>

      <div className="menu_container" id="menu_container">
        <form>
          <div>
            <input
              type="text"
              name="firstName"
              className="firstName"
              id="firstName"
              placeholder="First Name"
              onChange={handleInputChange}
              value={formData.firstName}
            />
            <input
              type="text"
              name="lastName"
              className="lastName"
              id="lastName"
              placeholder="Last Name"
              onChange={handleInputChange}
              value={formData.lastName}
            />
          </div>
          <input
            type="text"
            name="profileTitle"
            className="profileTitle"
            id="profileTitle"
            placeholder="Profile Title: Backend Developer "
            onChange={handleInputChange}
            value={formData.profileTitle}
          />
          <input
            type="file"
            name="file"
            className="file"
            id="file"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            className="description"
            id="description"
            placeholder="Tell something about yourself"
            onChange={handleInputChange}
            value={formData.description}
          />
          <input
            type="text"
            name="nationality"
            className="nationaly"
            id="nationaly"
            placeholder="Your nationaly"
            onChange={handleInputChange}
            value={formData.nationality}
          />
          <input
            type="text"
            name="sexe"
            className="sexe"
            id="sexe"
            placeholder="Sexe"
            onChange={handleInputChange}
            value={formData.sexe}
          />
          <input
            type="text"
            name="language"
            className="language"
            id="language"
            placeholder="Language"
            onChange={handleInputChange}
            value={formData.language}
          />
        </form>
        <button type="submit" className="save_user" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default PersonnalData;
