import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./containers/Main";
import Archlet from "./containers/Archlet";
const App = () => {
  return (
    <Router basename="/lorris-react-portfolio">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/archlet" element={<Archlet />} />
      </Routes>
    </Router>
  );
};

export default App;
