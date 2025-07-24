// src/components/NavBar.jsx
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import ModalComponent from "./Modal";

function NavBar() {
  const today = new Date();
  const date = today.toLocaleDateString();

  return (
    <Container>
      <Navbar
        className="bg-body-tertiary px-4 nav-up"
        style={{ height: "70px", borderBottom: "1px solid #ddd" }}
      >
        <Form className="d-flex w-100 form">
          <Form.Control
            type="text"
            placeholder="Search Task"
            className="me-2 search"
          />
          <p>{date}</p>
          {/* <Button type="submit" className="btn-nav">
            Add new task
          </Button> */}
          <ModalComponent />
        </Form>
      </Navbar>
    </Container>
  );
}

export default NavBar;
