import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

export default function ModalComponent({ onAddTask }) {
  const [show, setShow] = useState(false);
  const [important, setImportant] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      date: "",
      description: "",
      select: "",
    },
  });

  const onSubmit = (data) => {
    const newTask = {
      id: Date.now(),
      title: data.title,
      description: data.description,
      date: data.date,
      directory: data.select,
      starred: important,
      completed: completed,
    };

    onAddTask(newTask);
    reset();
    setImportant(false);
    setCompleted(false);
    handleClose();
  };

  return (
    <div>
      <Button
        variant="danger"
        onClick={handleShow}
        style={{ backgroundColor: "navy", border: "none" }}
        className="mb-4 mt-3"
      >
        Add new task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. Study for the test"
                autoFocus
                {...register("title", { required: true, minLength: 5 })}
              />
              {errors.title && (
                <Form.Text className="text-danger">
                  {errors.title.type === "required"
                    ? "Please enter title"
                    : "Title should be more than 5 characters"}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                {...register("date", { required: true })}
              />
              {errors.date && (
                <Form.Text className="text-danger">Please enter date</Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="e.g. Study notes"
                {...register("description")}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select a Directory</Form.Label>
              <Form.Select {...register("select", { required: true })}>
                <option value="">-- Select --</option>
                <option value="Main">Main</option>
                <option value="Secondary">Secondary</option>
              </Form.Select>
              {errors.select && (
                <Form.Text className="text-danger">
                  Please select a directory
                </Form.Text>
              )}
            </Form.Group>

            <Form.Check
              type="checkbox"
              label="Mark As Important"
              checked={important}
              onChange={(e) => setImportant(e.target.checked)}
              className="mb-2"
            />
            <Form.Check
              type="checkbox"
              label="Mark As Completed"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              className="mb-3"
            />

            <Modal.Footer className="px-0 pt-0">
              <Button
                type="submit"
                variant="primary"
                style={{
                  width: "100%",
                  backgroundColor: "navy",
                  border: "none",
                }}
              >
                Add a Task
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
