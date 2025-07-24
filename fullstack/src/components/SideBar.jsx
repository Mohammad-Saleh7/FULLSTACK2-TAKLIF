import Nav from "react-bootstrap/Nav";
import { NavLink, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import ModalComponent from "./Modal";
import { useState } from "react";

function SideBar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showIcon, setShowIcon] = useState(null);
  const location = useLocation();

  const toggleSidebar = () => setShowSidebar((prev) => !prev);
  const handleToggle = (isOpen) => setShowDropdown(isOpen);
  const isActive = (path) => (location.pathname === path ? "active-link" : "");

  const SidebarContent = () => (
    <Nav defaultActiveKey="/home" className="flex-column ms-2">
      <h5 className="ms-3 mt-3 d-none d-md-block">TO‑DO LIST</h5>
      <div className="d-flex px-3">
        {/* <Button
          variant="navy"
          style={{ backgroundColor: "navy", color: "white", width: "100%" }}
          className="mt-3 mb-4"
        >
          ADD NEW TASKS
        </Button> */}
        <ModalComponent />
      </div>
      <NavLink
        className={`navLink text-decoration-none text-dark mb-2 ${isActive(
          "/"
        )}`}
        to="/"
      >
        All Tasks
      </NavLink>
      <NavLink
        className={`navLink text-decoration-none text-dark mb-2 ${isActive(
          "/important"
        )}`}
        to="/important"
      >
        Important
      </NavLink>
      <NavLink
        className={`navLink text-decoration-none text-dark mb-2 ${isActive(
          "/completed"
        )}`}
        to="/completed"
      >
        Completed task
      </NavLink>
      <NavLink
        className={`navLink text-decoration-none text-dark mb-2 ${isActive(
          "/uncompleted"
        )}`}
        to="/uncompleted"
      >
        Uncompleted tasks
      </NavLink>

      <NavDropdown
        className="nav-dropdown"
        style={{ backgroundColor: "#e9e9e9" }}
        title={
          <span
            className="navLink"
            style={{ color: "black", textDecoration: "none" }}
          >
            Directories
          </span>
        }
        show={showDropdown}
        onToggle={handleToggle}
      >
        <Dropdown.Item
          as={NavLink}
          to="/secondary"
          onClick={(e) => e.stopPropagation()}
          className={`icons-side nav-drop ${isActive("/secondary")}`}
          onMouseEnter={() => setShowIcon("secondary")}
          onMouseLeave={() => setShowIcon(null)}
        >
          <span>secondary</span>
          {showIcon === "secondary" && (
            <div className="d-flex gap-1">
              <i className="bi bi-pencil-square"></i>
              <i className="bi bi-trash"></i>
            </div>
          )}
        </Dropdown.Item>

        <Dropdown.Item
          as={NavLink}
          to="/main"
          onClick={(e) => e.stopPropagation()}
          className={`icons-side nav-drop ${isActive("/main")}`}
          onMouseEnter={() => setShowIcon("main")}
          onMouseLeave={() => setShowIcon(null)}
        >
          <span>Main</span>
          {showIcon === "main" && (
            <div className="d-flex gap-1">
              <i className="bi bi-pencil-square"></i>
              <i className="bi bi-trash"></i>
            </div>
          )}
        </Dropdown.Item>

        <Dropdown.Item
          as={NavLink}
          to="/new"
          onClick={(e) => e.stopPropagation()}
          className={`nav-drop ${isActive("/new")}`}
        >
          <span className="new">+New</span>
        </Dropdown.Item>
      </NavDropdown>
    </Nav>
  );

  return (
    <>
      <Button
        className="d-md-none m-3"
        variant="secondary"
        onClick={toggleSidebar}
      >
        ☰
      </Button>

      <div
        className="d-none d-md-block"
        style={{
          backgroundColor: "#e9e9e9",
          height: "100vh",
          width: "250px",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <SidebarContent />
      </div>

      <Offcanvas show={showSidebar} onHide={toggleSidebar}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>TO‑DO LIST</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SidebarContent />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
