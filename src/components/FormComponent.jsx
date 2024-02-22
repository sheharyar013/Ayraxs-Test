import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../redux/actions";
import formData from "../form-data.json";
import { useNavigate, useLocation } from "react-router";

const FormComponent = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const location = useLocation();
  const Forms = useSelector((state) => state.form.formData);

  const [formDataState, setFormDataState] = useState({});

  const handleInputChange = (e, fieldName) => {
    setFormDataState({ ...formDataState, [fieldName]: e.target.value });
  };

  useEffect(() => {
    if (location.pathname === "/" && Object.keys(Forms).length === 0) {
      return navigateTo("/");
    } else {
      return navigateTo("/home");
    }
  }, [Forms]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = formData.filter((field) => field.required);
    const missingFields = requiredFields.filter(
      (field) => !formDataState[field.name]
    );

    if (missingFields.length > 0) {
      alert("Please fill all required fields.");
    } else {
      dispatch(submitForm(formDataState));
      navigateTo("/home");
    }
  };

  return (
    <div className="form-div">
      {formData.map((field) => (
        <div className="form-main" key={field.name}>
          <label className="form-label">
            {field.label}
            {field?.required ? "*" : ""}
          </label>
          <input
            className="form-input"
            type={field.type}
            value={formDataState[field.name] || ""}
            onChange={(e) => handleInputChange(e, field.name)}
          />
        </div>
      ))}
      <button className="form-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default FormComponent;
