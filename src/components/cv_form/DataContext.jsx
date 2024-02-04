import { createContext, useContext, useReducer } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    userData: {
      email: "",
      phone: "",
      address: "",
      link: "",
    },
    personalData: {
      firstName: "",
      lastName: "",
      profileTitle: "",
      description: "",
      file: null,
      imageUrl: "",
      nationality: "",
      sexe: "",
      language: "",
    },
    experienceData: {
      positionExp: "",
      company: "",
      startDate: "",
      endDate: "",
      details: "",
    },
    skillData: {
      skills: "",
    },
    educationData: {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
    },
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_PERSONAL_DATA":
        return { ...state, personalData: action.payload };
      case "SET_EXPERIENCE_DATA":
        return { ...state, experienceData: action.payload };
      case "SET_SKILL_DATA":
        return { ...state, skillData: action.payload };
      case "SET_EDUCATION_DATA":
        return { ...state, educationData: action.payload };
      case "SET_USER_DATA":
        return { ...state, userData: action.payload };
      case "DOWNLOAD_PDF":
        return { ...state, downloadPDF: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
