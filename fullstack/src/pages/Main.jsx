// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Container from "react-bootstrap/esm/Container";
// import Image from "react-bootstrap/Image";
// import Card from "react-bootstrap/Card";
// import { useState } from "react";

// export default function Main() {
//   const [star1, setStar1] = useState(true);
//   const [star2, setStar2] = useState(false);
//   const [star3, setStar3] = useState(true);
//   const [completed1, setCompleted1] = useState(false);
//   const [completed2, setCompleted2] = useState(false);
//   const [completed3, setCompleted3] = useState(true);
//   function handleStar(index) {
//     if (index === 1) setStar1(!star1);
//     if (index === 2) setStar2(!star2);
//     if (index === 3) setStar3(!star3);
//   }

//   function handleComplete(index) {
//     if (index === 1) setCompleted1(!completed1);
//     if (index === 2) setCompleted2(!completed2);
//     if (index === 3) setCompleted3(!completed3);
//   }
//   return (
//     <Container>
//       <h5>All Tasks(3 Tasks)</h5>
//       <div className="main-head d-flex">
//         <div className="icons-main-head d-flex gap-2 mt-3">
//           <Image src="/view-1.svg" className="img-1" />
//           <Image src="/view-2.svg" className="img-2" />
//         </div>
//         <div className="sort-by">
//           <DropdownButton id="dropdown-item-button" title="Sort by">
//             <Dropdown.ItemText>Sort by</Dropdown.ItemText>
//             <Dropdown.Item as="button">Order added</Dropdown.Item>
//             <Dropdown.Item as="button">Earlier first</Dropdown.Item>
//             <Dropdown.Item as="button">Later first</Dropdown.Item>
//             <Dropdown.Item as="button">Completed first</Dropdown.Item>
//             <Dropdown.Item as="button">UnCompleted first</Dropdown.Item>
//           </DropdownButton>
//         </div>
//       </div>
//       <div className="all-cards d-flex gap-4">
//         <div className="card-box mt-5">
//           {" "}
//           <Card
//             className="card-one d-flex flex-column "
//             style={{ width: "18rem", backgroundColor: "navy", color: "white" }}
//           >
//             <p className="badge-card">Main</p>
//             <Card.Body className="card-b-all   flex-column">
//               <Card.Title>SomeThing</Card.Title>
//               <Card.Subtitle className="mb-2 text-muted card-sub">
//                 hi there
//               </Card.Subtitle>
//               <Card.Text></Card.Text>

//               <div className="d-flex align-items-center mt-5 gap-1 mb-4">
//                 <i className="bi bi-calendar2-week me-2"></i>
//                 <span className="m-0">10/19/2024</span>
//               </div>
//               <hr className="dashed-line" />
//               <div className="footer-card">
//                 <div>
//                   <Card.Link
//                     className={`card-link ${completed1 ? "btn-complete" : ""}`}
//                     onClick={() => handleComplete(1)}
//                     href="#"
//                   >
//                     {completed1 ? "completed" : "uncompleted"}
//                   </Card.Link>
//                 </div>
//                 <div className="footer-icon">
//                   <i
//                     className={`bi bi-star-fill star ${
//                       star1 ? "star-active" : ""
//                     }`}
//                     onClick={() => handleStar(1)}
//                   ></i>
//                   <i className="bi bi-trash-fill trash"></i>
//                   <i className="bi bi-three-dots-vertical  "></i>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>
//         </div>
//         <div className="card-box mt-5">
//           {" "}
//           <Card
//             className="card-two d-flex flex-column "
//             style={{ width: "18rem", backgroundColor: "navy", color: "white" }}
//           >
//             <p className="badge-card">Main</p>
//             <Card.Body className="card-two card-b-all flex-column">
//               <Card.Title>Task 1</Card.Title>
//               <Card.Subtitle className="mb-2 text-muted card-sub">
//                 This is the description for this task
//               </Card.Subtitle>
//               <Card.Text></Card.Text>

//               <div className="d-flex align-items-center mt-5 gap-1 mb-4">
//                 <i className="bi bi-calendar2-week me-2"></i>
//                 <span className="m-0">04/12/2023</span>
//               </div>
//               <hr className="dashed-line-two" />
//               <div className="footer-card">
//                 <div>
//                   <Card.Link
//                     className={`card-link-two ${
//                       completed2 ? "btn-complete" : ""
//                     }`}
//                     onClick={() => handleComplete(2)}
//                     href="#"
//                   >
//                     {completed2 ? "completed" : "uncompleted"}
//                   </Card.Link>
//                 </div>
//                 <div className="footer-icon">
//                   <i
//                     className={`bi bi-star-fill star ${
//                       star2 ? "star-active" : ""
//                     }`}
//                     onClick={() => handleStar(2)}
//                   ></i>
//                   <i className="bi bi-trash-fill trash"></i>
//                   <i className="bi bi-three-dots-vertical  "></i>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>
//         </div>
//         <div className="card-box mt-5">
//           {" "}
//           <Card
//             className="card-two d-flex flex-column "
//             style={{ width: "18rem", backgroundColor: "navy", color: "white" }}
//           >
//             <p className="badge-card">Main</p>
//             <Card.Body className="card-two card-b-all flex-column">
//               <Card.Title>Task 2</Card.Title>
//               <Card.Subtitle className="mb-2 text-muted card-sub">
//                 This is the description for this task
//               </Card.Subtitle>
//               <Card.Text></Card.Text>

//               <div className="d-flex align-items-center mt-5 gap-1 mb-4">
//                 <i className="bi bi-calendar2-week me-2"></i>
//                 <span className="m-0">05/15/2023</span>
//               </div>
//               <hr className="dashed-line-two" />
//               <div className="footer-card">
//                 <div>
//                   <Card.Link
//                     className={`card-link-two ${
//                       completed3 ? "btn-complete" : ""
//                     }`}
//                     onClick={() => handleComplete(3)}
//                     href="#"
//                   >
//                     {completed3 ? "completed" : "uncompleted"}
//                   </Card.Link>
//                 </div>
//                 <div className="footer-icon">
//                   <i
//                     className={`bi bi-star-fill star ${
//                       star3 ? "star-active" : ""
//                     }`}
//                     onClick={() => handleStar(3)}
//                   ></i>
//                   <i className="bi bi-trash-fill trash"></i>
//                   <i className="bi bi-three-dots-vertical  "></i>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>
//     </Container>
//   );
// }
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
        className="mb-4 mt-3"
        style={{ backgroundColor: "navy", border: "none" }}
      >
        Add new task
      </Button>

      <Modal show={show} onHide={handleClose} className="modals">
        <Modal.Header closeButton>
          <Modal.Title>Add a Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. Study"
                {...register("title", { required: true, minLength: 5 })}
              />
              {errors.title && (
                <Form.Text className="text-danger">
                  {errors.title.type === "required"
                    ? "Please enter title"
                    : "Title must be at least 5 characters"}
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
                <Form.Text className="text-danger">
                  Please enter a date
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                {...register("description")}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select a Directory</Form.Label>
              <Form.Select {...register("select", { required: true })}>
                <option value="">-- Select --</option>
                <option value="main">Main</option>
                <option value="personal">Secondary</option>
              </Form.Select>
              {errors.select && (
                <Form.Text className="text-danger">
                  Please select a directory
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Mark As Important"
                checked={important}
                onChange={(e) => setImportant(e.target.checked)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Mark As Completed"
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
              />
            </Form.Group>

            <Modal.Footer className="mt-4 px-0">
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
