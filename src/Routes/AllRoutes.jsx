import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Form from "../Pages/Form/Form";
import Home from "../Pages/Home/Home";
import Tables from "../Pages/Table/Tables";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/form" element={<Form />} />
      <Route path="/table" element={<Tables />} />
    </Routes>
  );
};

export default AllRoutes;
