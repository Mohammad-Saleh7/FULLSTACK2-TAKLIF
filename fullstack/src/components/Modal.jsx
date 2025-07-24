// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import { useForm } from "react-hook-form";

// export default function ModalComponent({ onAddTask }) {
//   const [show, setShow] = useState(false);
//   const [directory, setDirectory] = useState("Main");
//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [desc, setDesc] = useState("");
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
//       Description: "",
//       select: "",
//     },
//   });

//   const helperText = {
//     title: {
//       required: "Please enter title",
//       minLength: "Title should be more than 5 characters",
//     },
//     date: {
//       required: "Please enter date",
//     },
//     select: {
//       required: "Please select a directory",
//     },
//   };

//   const onSubmit = (data) => {
//     console.log(data);
//     reset();
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
//             <Form.Group className="mb-3" controlId="formTitle">
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="e.g, study for the test"
//                 autoFocus
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 {...register("title", {
//                   required: true,
//                   minLength: 5,
//                 })}
//               />
//               {errors.title && (
//                 <Form.Text className="text-danger">
//                   {helperText.title[errors.title.type]}
//                 </Form.Text>
//               )}
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Date</Form.Label>
//               <Form.Control
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 {...register("date", {
//                   required: true,
//                 })}
//               />
//               {errors.date && (
//                 <Form.Text className="text-danger">
//                   {helperText.date[errors.date.type]}
//                 </Form.Text>
//               )}
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formDescription">
//               <Form.Label>Description (optional)</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={2}
//                 placeholder="e.g, study for the test"
//                 value={desc}
//                 onChange={(e) => setDesc(e.target.value)}
//                 {...register("Description")}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Select a Directory</Form.Label>
//               <Form.Select
//                 value={directory}
//                 onChange={(e) => setDirectory(e.target.value)}
//                 {...register("select", {
//                   required: true,
//                 })}
//               >
//                 <option value="">-- Select --</option>
//                 <option value="main">Main</option>
//                 <option value="personal">Personal</option>
//               </Form.Select>
//               {errors.select && (
//                 <Form.Text className="text-danger">
//                   {helperText.select[errors.select.type]}
//                 </Form.Text>
//               )}
//             </Form.Group>

//             <Form.Group>
//               <Form.Check
//                 type="checkbox"
//                 id="markImportant"
//                 label="Mark As Important"
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Check
//                 type="checkbox"
//                 id="markCompleted"
//                 label="Mark As Completed"
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
//**************************************************************************** */
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import { useForm } from "react-hook-form";

// export default function ModalComponent({ onAddTask }) {
//   const [show, setShow] = useState(false);
//   const [directory, setDirectory] = useState("Main");
//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [desc, setDesc] = useState("");
//   const [markImportant, setMarkImportant] = useState(false);
//   const [markCompleted, setMarkCompleted] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//     reset,
//   } = useForm();

//   const helperText = {
//     title: {
//       required: "Please enter title",
//       minLength: "Title should be more than 5 characters",
//     },
//     date: {
//       required: "Please enter date",
//     },
//     select: {
//       required: "Please select a directory",
//     },
//   };

//   const onSubmit = (data) => {
//     const newTask = {
//       id: Date.now(), // id یکتا
//       title: data.title,
//       description: data.Description || "",
//       date: data.date,
//       completed: markCompleted,
//       starred: markImportant,
//       directory: data.select,
//     };

//     onAddTask(newTask); // می‌فرستیم به والد
//     reset();
//     setTitle("");
//     setDate("");
//     setDesc("");
//     setMarkCompleted(false);
//     setMarkImportant(false);
//     setDirectory("Main");
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
//             <Form.Group className="mb-3" controlId="formTitle">
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="e.g, study for the test"
//                 autoFocus
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 {...register("title", {
//                   required: true,
//                   minLength: 5,
//                 })}
//               />
//               {errors.title && (
//                 <Form.Text className="text-danger">
//                   {helperText.title[errors.title.type]}
//                 </Form.Text>
//               )}
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Date</Form.Label>
//               <Form.Control
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 {...register("date", {
//                   required: true,
//                 })}
//               />
//               {errors.date && (
//                 <Form.Text className="text-danger">
//                   {helperText.date[errors.date.type]}
//                 </Form.Text>
//               )}
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formDescription">
//               <Form.Label>Description (optional)</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={2}
//                 placeholder="e.g, study for the test"
//                 value={desc}
//                 onChange={(e) => setDesc(e.target.value)}
//                 {...register("Description")}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Select a Directory</Form.Label>
//               <Form.Select
//                 value={directory}
//                 onChange={(e) => setDirectory(e.target.value)}
//                 {...register("select", {
//                   required: true,
//                 })}
//               >
//                 <option value="">-- Select --</option>
//                 <option value="main">Main</option>
//                 <option value="personal">Personal</option>
//               </Form.Select>
//               {errors.select && (
//                 <Form.Text className="text-danger">
//                   {helperText.select[errors.select.type]}
//                 </Form.Text>
//               )}
//             </Form.Group>

//             <Form.Group>
//               <Form.Check
//                 type="checkbox"
//                 id="markImportant"
//                 label="Mark As Important"
//                 checked={markImportant}
//                 onChange={(e) => setMarkImportant(e.target.checked)}
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Check
//                 type="checkbox"
//                 id="markCompleted"
//                 label="Mark As Completed"
//                 checked={markCompleted}
//                 onChange={(e) => setMarkCompleted(e.target.checked)}
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
//*************************************** */
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
      id: Date.now(), // شناسه‌ی یکتا
      title: data.title,
      description: data.description,
      date: data.date,
      directory: data.select, // تعیین پوشه‌ی مقصد
      starred: important,
      completed: completed,
    };

    onAddTask(newTask); // ارسال تسک به والد
    reset(); // پاک کردن فرم
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

      <Modal className="modals" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Title */}
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g, study for the test"
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

            {/* Date */}
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

            {/* Description */}
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="e.g, study notes"
                {...register("description")}
              />
            </Form.Group>

            {/* Directory Selection */}
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

            {/* Checkboxes */}
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

            {/* Submit Button */}
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
