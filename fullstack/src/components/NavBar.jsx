import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import ModalComponent from "./Modal";

function NavBar({ onAddTask }) {
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
          <ModalComponent onAddTask={onAddTask} />
        </Form>
      </Navbar>
    </Container>
  );
}

export default NavBar;
