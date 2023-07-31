import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Layout from "./Pages/Layout";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/layout" element={<Layout />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
