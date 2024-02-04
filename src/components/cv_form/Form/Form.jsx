import React from "react";
import "./Form.css";
import PersonnalData from "../Personnal Data/PersonnalData";
import Experiences from "../Experiences/Experiences";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";
import FormHeader from "../Form Header/formHeader";
import { DataProvider } from "../DataContext";
import CV from "../../cv_preview/CV";

const Form = () => {
  return (
    <>
      <main className="form_main">
        <FormHeader />
        <PersonnalData />
        <Experiences />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
};

export default Form;
