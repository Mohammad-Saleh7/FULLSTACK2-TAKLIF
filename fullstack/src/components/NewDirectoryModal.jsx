import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function NewDirectoryModal({ onAddDirectory }) {
  const [show, setShow] = useState(false);
  const [dirName, setDirName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleaned = dirName.trim();
    if (cleaned) {
      onAddDirectory(cleaned);
      setDirName("");
      setShow(false);
    }
  };

  return (
    <>
      <span
        className="new"
        onClick={() => setShow(true)}
        style={{ cursor: "pointer" }}
      >
        +New
      </span>
      <Modal show={show} onHide={() => setShow(false)} className="modals">
        <Modal.Header closeButton>
          <Modal.Title>Create New Directory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Directory Name</Form.Label>
              <Form.Control
                type="text"
                value={dirName}
                onChange={(e) => setDirName(e.target.value)}
                required
              />
            </Form.Group>
            <Modal.Footer>
              <Button
                type="submit"
                style={{ backgroundColor: "navy", border: "none" }}
              >
                Create
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
