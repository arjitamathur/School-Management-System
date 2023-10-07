import React, { useEffect, useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [activeLink, setActiveLink] = useState(""); 

  useEffect(() => {
    // Get the current path
    const currentPath = window.location.pathname;

    // Find the corresponding link and set it as active
    const links = document.querySelectorAll(".sidebar-nav a");
    links.forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        setActiveLink(link.getAttribute("href"));
      }
    });
  }, []); 

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="header-logo">LOGO</h2>
      </div>
      <nav className="sidebar-nav">
        <ul className="no-bullets">
        <li>
            <a href="/createuser"  className={activeLink === "/createuser" ? "active" : ""}>
            Dashboard
            </a>
          </li>

          <li>
            <a href="/class/list"  className={activeLink === "/class/list" ? "active" : ""}>
              Create Class
            </a>
          </li>
          <li>
            <a
              href="/subjects"
              className={activeLink === "/subjects" ? "active" : ""}
            >
              Create Subjects
            </a>
          </li>
          <li>
            <a
              href="/students"
              className={activeLink === "/students" ? "active" : ""}
            >
              Students List
            </a>
          </li>
          <li>
            <a
              href="/teachers"
              className={activeLink === "/teachers" ? "active" : ""}
            >
              Teachers List
            </a>
          </li>
          <li>
            <a
              href="/accounts"
              className={activeLink === "/accounts" ? "active" : ""}
            >
              Accountants List
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
