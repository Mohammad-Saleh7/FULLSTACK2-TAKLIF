import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import { useState } from "react";
import TaskCard from "../components/TaskCard";
import tasksData from "../data/tasks.json";

export default function AllTasks() {
  const [tasks, setTasks] = useState(tasksData);

  const handleToggleStar = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, starred: !task.starred } : task
    );
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <h5>All Tasks({tasks.length} Tasks)</h5>
      <div className="main-head d-flex">
        <div className="icons-main-head d-flex gap-2 mt-3">
          <Image src="/view-1.svg" className="img-1" />
          <Image src="/view-2.svg" className="img-2" />
        </div>
        <div className="sort-by">
          <DropdownButton id="dropdown-item-button" title="Sort by">
            <Dropdown.ItemText>Sort by</Dropdown.ItemText>
            <Dropdown.Item as="button">Order added</Dropdown.Item>
            <Dropdown.Item as="button">Earlier first</Dropdown.Item>
            <Dropdown.Item as="button">Later first</Dropdown.Item>
            <Dropdown.Item as="button">Completed first</Dropdown.Item>
            <Dropdown.Item as="button">UnCompleted first</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div className="all-cards d-flex gap-4 flex-wrap">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggleStar={handleToggleStar}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </Container>
  );
}
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import { useForm } from "react-hook-form";

// export default function ModalComponent({ onAddTask }) {
//   const [show, setShow] = useState(false);
//   const [important, setImportant] = useState(false);
//   const [completed, setCompleted] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//     reset,
//   } = useForm({
//     defaultValues: {
//       title: "",
//       date: "",
//       description: "",
//       select: "",
//     },
//   });

//   const onSubmit = (data) => {
//     const newTask = {
//       id: Date.now(),
//       title: data.title,
//       description: data.description,
//       date: data.date,
//       starred: important,
//       completed: completed,
//     };

//     onAddTask(newTask);
//     reset();
//     setImportant(false);
//     setCompleted(false);
//     handleClose();
//   };

//   return (
//     <div>
//       <Button
//         variant="danger"
//         onClick={handleShow}
//         style={{ backgroundColor: "navy", border: "none" }}
//         className="mb-4 mt-3"
//       >
//         Add new task
//       </Button>

//       <Modal className="modals" show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add a Task</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleSubmit(onSubmit)}>
//             <Form.Group className="mb-3">
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="e.g, study for the test"
//                 autoFocus
//                 {...register("title", { required: true, minLength: 5 })}
//               />
//               {errors.title && (
//                 <Form.Text className="text-danger">
//                   {errors.title.type === "required"
//                     ? "Please enter title"
//                     : "Title should be more than 5 characters"}
//                 </Form.Text>
//               )}
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Date</Form.Label>
//               <Form.Control
//                 type="date"
//                 {...register("date", { required: true })}
//               />
//               {errors.date && (
//                 <Form.Text className="text-danger">Please enter date</Form.Text>
//               )}
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={2}
//                 placeholder="e.g, study notes"
//                 {...register("description")}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Select a Directory</Form.Label>
//               <Form.Select {...register("select", { required: true })}>
//                 <option value="">-- Select --</option>
//                 <option value="main">Main</option>
//                 <option value="personal">Personal</option>
//               </Form.Select>
//               {errors.select && (
//                 <Form.Text className="text-danger">
//                   Please select a directory
//                 </Form.Text>
//               )}
//             </Form.Group>

//             <Form.Group>
//               <Form.Check
//                 type="checkbox"
//                 id="markImportant"
//                 label="Mark As Important"
//                 checked={important}
//                 onChange={(e) => setImportant(e.target.checked)}
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Check
//                 type="checkbox"
//                 id="markCompleted"
//                 label="Mark As Completed"
//                 checked={completed}
//                 onChange={(e) => setCompleted(e.target.checked)}
//               />
//             </Form.Group>

//             <Modal.Footer className="mt-4 px-0">
//               <Button
//                 type="submit"
//                 variant="primary"
//                 style={{
//                   width: "100%",
//                   backgroundColor: "navy",
//                   border: "none",
//                 }}
//               >
//                 Add a Task
//               </Button>
//             </Modal.Footer>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }
