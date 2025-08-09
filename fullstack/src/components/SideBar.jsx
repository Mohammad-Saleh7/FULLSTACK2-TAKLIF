import Nav from "react-bootstrap/Nav";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import ModalComponent from "./Modal";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function SideBar({ onAddTask }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showIcon, setShowIcon] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => setShowSidebar((prev) => !prev);
  const handleToggle = (isOpen) => setShowDropdown(isOpen);
  const isActive = (path) => (location.pathname === path ? "active-link" : "");

  const handleLogout = () => {
    localStorage.removeItem("token");
    setShowLogoutModal(false);
    navigate("/login");
  };

  const SidebarContent = () => (
    <Nav className="flex-column ms-2">
      <h5 className="ms-3 mt-3 d-none d-md-block">TO‑DO LIST</h5>
      <div className="d-flex px-3">
        <ModalComponent onAddTask={onAddTask} />
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
          <span className="navLink" style={{ color: "black" }}>
            Directories
          </span>
        }
        show={showDropdown}
        onToggle={handleToggle}
      >
        <Dropdown.Item
          as={NavLink}
          to="/secondary"
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
          className={`nav-drop ${isActive("/new")}`}
        >
          <span className="new">+New</span>
        </Dropdown.Item>
      </NavDropdown>

      <Button
        variant="danger"
        className="mt-4 ms-3"
        onClick={() => setShowLogoutModal(true)}
      >
        Logout
      </Button>
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

      <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to log out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SideBar;
