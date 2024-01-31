import React from "react";
import "./Contact.css";
import { useState } from "react";
import CV from "../../cv_preview/CV";

const Contact = () => {
  const [formData, setFormData] = useState({
    address: "",
    email: "",
    phone: "",
    link: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="menu">
      <button className="menu_button" id="menu_button">
        <div className="title">
          <div>
            <i class="fa-solid fa-address-book"></i>
            <h2>Contacts</h2>
          </div>
          <div className="icons" id="icons"></div>
        </div>
      </button>
      <form action="">
        <input
          type="text"
          name="address"
          className="address"
          id="address"
          value={formData.address}
          placeholder="Address"
          onChange={handleInputChange}
        />
        <div>
          <input
            type="email"
            name="email"
            id="email"
            className="email"
            value={formData.email}
            placeholder="E-mail"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            id="phone"
            className="phone"
            value={formData.phone}
            placeholder="Phone Number"
            onChange={handleInputChange}
          />
        </div>
        <input
          type="url"
          name="link"
          className="link"
          id="link"
          value={formData.link}
          placeholder="Portofolio Link"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default Contact;
