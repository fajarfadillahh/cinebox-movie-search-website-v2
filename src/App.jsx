import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
