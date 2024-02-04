import React from "react";
import "./App.css";
import Form from "./components/cv_form/Form/Form";
import CV from "./components/cv_preview/CV";
import "@fortawesome/fontawesome-free/css/all.css";
import { DataProvider } from "./components/cv_form/DataContext";

const App = () => {
  return (
    <div className="container">
      <DataProvider>
        <Form />
        <CV />
      </DataProvider>
    </div>
  );
};

export default App;
