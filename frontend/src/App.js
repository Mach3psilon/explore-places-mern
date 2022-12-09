import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/places/new" element={<NewPlace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
