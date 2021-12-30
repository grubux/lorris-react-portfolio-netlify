import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./containers/Main";
import Company1 from "./containers/Company1";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/company1" element={<Company1 />} />
      </Routes>
    </Router>
  );
};

export default App;
