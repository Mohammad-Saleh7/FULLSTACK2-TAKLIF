import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function EditModal({ task, onEdit }) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    title: task.title,
    date: task.date,
    description: task.description,
    directory: task.directory,
  });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(task.id, formData);
    setShow(false);
  };

  return (
    <>
      <i
        className="bi bi-three-dots-vertical"
        onClick={() => setShow(true)}
        style={{ cursor: "pointer" }}
      ></i>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                as="textarea"
                rows={2}
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Directory</Form.Label>
              <Form.Select
                name="directory"
                value={formData.directory}
                onChange={handleChange}
              >
                <option value="Main">Main</option>
                <option value="Secondary">Secondary</option>
              </Form.Select>
            </Form.Group>
            <Modal.Footer>
              <Button type="submit" variant="primary">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
