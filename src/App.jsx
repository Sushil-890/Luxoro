import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Content from "./component/Content";
import Footer from "./Footer/Footer";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Navbar onSearch={setSearchQuery} />
      
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Content searchQuery={searchQuery} />} />
          <Route path="/category/:category" element={<Content searchQuery={searchQuery} />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
