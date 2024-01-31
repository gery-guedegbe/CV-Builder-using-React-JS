import React from "react";
import "./formHeader.css";
import downloadIcon from "../../../assets/bin.svg";
import autofillIcon from "../../../assets/autofill.svg";

const formHeader = () => {
  return (
    <div className="formHeader">
      <div>
        <h1 className="title">CV Maker</h1>
        <div className="buttons">
          <button className="button_save button" id="button_save">
            <i class="fa-solid fa-download"></i>
            Save
          </button>
          <button className="button_autofill button" id="button_autofill">
            <i class="fa-solid fa-pen"></i>
            Autofill
          </button>
        </div>
      </div>
      <p>
        Created By
        <span>
          <a
            href="https://github.com/gery-guedegbe"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
            <span className="name">géry-guedegbe</span>
          </a>
        </span>
      </p>
    </div>
  );
};

export default formHeader;
