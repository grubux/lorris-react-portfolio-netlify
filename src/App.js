import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./containers/Main";
import Archlet from "./containers/Archlet";
import UmanovaSA from "./containers/UmanovaSA";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/archlet" element={<Archlet />} />
        <Route path="/umanovasa" element={<UmanovaSA />} />
      </Routes>
    </Router>
  );
};

export default App;
