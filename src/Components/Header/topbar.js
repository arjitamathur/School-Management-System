import React from "react";
import "./topbar.css";

import Sidebar from "./Sidebar";

function Topbar() {

const handleChange = () => {
  window.location.href="/login"
}


  return (
    <div className="App">
      <header className="header">
        <h2>Student Management System </h2>
        <button className="login-button" onClick={handleChange}>Logout</button>
      </header>
      <Sidebar />
    </div>
  );
}

export default Topbar;
