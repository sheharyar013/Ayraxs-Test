import React, { useState } from "react";
import { useNavigate } from "react-router";
import Servers from "../redux/services/services";
import { AddPost } from "../redux/actions";
import { useDispatch } from "react-redux";

const FormComponent = () => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const [formDataState, setFormDataState] = useState({});
  const [response, setResponse] = useState(null);

  const handleInputChange = (e, fieldName) => {
    setFormDataState({ ...formDataState, [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formDataState).length === 0 || formDataState.title === "") {
      alert("Please fill all required fields.");
    } else {
      const payload = {
        title: formDataState.title,
      };
      Servers.addProduct(payload)
        .then((res) => {
          setResponse(res);
          dispatch(AddPost(res));
          alert("Post created successfully.");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="form-div">
      <div className="form-main">
        <label className="form-label">{"Post Title *"}</label>
        <input
          className="form-input"
          type={"text"}
          placeholder="post title"
          value={formDataState["title"] || ""}
          onChange={(e) => handleInputChange(e, "title")}
        />
      </div>
      <button className="form-button" onClick={handleSubmit}>
        Submit
      </button>
      {response && (
        <div>
          <p>
            <span> Response: </span>
            {response?.title}
          </p>
        </div>
      )}

      {response && (
        <button className="form-button" onClick={() => navigateTo("/home")}>
          Back to Listing
        </button>
      )}
    </div>
  );
};

export default FormComponent;
