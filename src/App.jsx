import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormComponent from "./components/FormComponent";
import Home from "./components/Home";
import AddPost from "./components/AddPost";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/" element={<FormComponent />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
