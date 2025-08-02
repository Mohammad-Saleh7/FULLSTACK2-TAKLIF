// import Navbar from "react-bootstrap/Navbar";
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";
// import ModalComponent from "./Modal";

// function NavBar({ onAddTask }) {
//   const today = new Date();
//   const date = today.toLocaleDateString();

//   return (
//     <Container>
//       <Navbar
//         className="bg-body-tertiary px-4 nav-up"
//         style={{ height: "70px", borderBottom: "1px solid #ddd" }}
//       >
//         <Form className="d-flex w-100 form">
//           <Form.Control
//             type="text"
//             placeholder="Search Task"
//             className="me-2 search"
//           />
//           <p>{date}</p>
//           <ModalComponent onAddTask={onAddTask} />
//         </Form>
//       </Navbar>
//     </Container>
//   );
// }

// export default NavBar;
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalComponent from "./Modal";

function NavBar({ onAddTask }) {
  const today = new Date();
  const date = today.toLocaleDateString();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setShowLogoutModal(false);
    navigate("/login");
  };

  return (
    <Container>
      <Navbar
        className="bg-body-tertiary px-4 nav-up d-flex justify-content-between"
        style={{ height: "70px", borderBottom: "1px solid #ddd" }}
      >
        <Form className="d-flex w-75 form">
          <Form.Control
            type="text"
            placeholder="Search Task"
            className="me-2 search"
          />
          <p className="ms-3">{date}</p>
          <ModalComponent onAddTask={onAddTask} />
        </Form>

        {/* دکمه Logout */}
        <Button variant="danger" onClick={() => setShowLogoutModal(true)}>
          Logout
        </Button>
      </Navbar>

      {/* Modal تایید Logout */}
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
    </Container>
  );
}

export default NavBar;
