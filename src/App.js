import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
// import MintPage from "./pages/MintPage";
import CommunityPage from "./pages/CommunityPage";
import MintPage from "./pages/MintPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mint" element={<MintPage />} />
      <Route path="/community" element={<CommunityPage />} />
    </Routes>
  );
}

export default App;
