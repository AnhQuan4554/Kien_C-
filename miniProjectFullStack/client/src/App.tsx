import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Reward from "./component/Home/Reward";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Reward />} />
      </Routes>
    </>
  );
}

export default App;
