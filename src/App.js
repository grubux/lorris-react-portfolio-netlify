import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./containers/Main";
import Archlet from "./containers/Archlet";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/archlet" element={<Archlet />} />
        <Route exact path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
