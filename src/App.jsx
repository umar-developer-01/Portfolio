import React from 'react';
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
// import About from "./pages/About";
import Homepage from "./pages/homepage";
import Project from "./pages/projects";

function App() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Project />} />
          {/* <Route path="/contact" element={<h1>sss</h1>} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
