import React from "react";
import "./Education.css";
import { useData } from "../DataContext";
import { useForm } from "react-hook-form";

const Education = () => {
  const { dispatch } = useData();
  const { register, handleSubmit } = useForm({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  });

  const onSubmit = (data) => {
    dispatch({ type: "SET_EDUCATION_DATA", payload: data });
  };

  return (
    <div className="menu">
      <div className="title">
        <div>
          <i className="fa-solid fa-graduation-cap"></i>
          <h2>Education</h2>
        </div>
        <div className="icons" id="icons"></div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="school"
          className="school"
          id="school"
          placeholder="School"
          {...register("school")}
        />
        <input
          type="text"
          name="degree"
          className="degree"
          id="degree"
          placeholder="Degree"
          {...register("degree")}
        />
        <label> Start Date</label>
        <input
          type="date"
          name="startDate"
          className="startDate"
          id="tartDate"
          {...register("startDate")}
        />
        <label> End Date</label>
        <input
          type="date"
          name="endDate"
          className="endDate"
          id="endDate"
          {...register("endDate")}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Education;
