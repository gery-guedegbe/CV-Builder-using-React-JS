import React from "react";
import "./App.css";
import Form from "./components/cv_form/Form/Form";
import CV from "./components/cv_preview/CV";
import "@fortawesome/fontawesome-free/css/all.css";

const App = () => {
  return (
    <div className="container">
      <Form />
      <CV />
    </div>
  );
};

export default App;
