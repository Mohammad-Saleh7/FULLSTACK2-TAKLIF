// import Container from "react-bootstrap/Container";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Image from "react-bootstrap/Image";
// import TaskCard from "../components/TaskCard";

// export default function AllTasks({
//   tasks,
//   onToggleStar,
//   onToggleComplete,
//   onDelete,
//   onEditTask,
// }) {
//   return (
//     <Container>
//       <h5>All Tasks ({tasks.length})</h5>
//       <div className="main-head d-flex">
//         <div className="icons-main-head d-flex gap-2 mt-3">
//           <Image src="/view-1.svg" className="img-1" />
//           <Image src="/view-2.svg" className="img-2" />
//         </div>
//         <div className="sort-by">
//           <DropdownButton id="dropdown-item-button" title="Sort by">
//             <Dropdown.ItemText>Sort by</Dropdown.ItemText>
//           </DropdownButton>
//         </div>
//       </div>
//       <div className="all-cards d-flex gap-4 flex-wrap">
//         {tasks.map((task) => (
//           <TaskCard
//             key={task.id}
//             task={task}
//             onToggleStar={onToggleStar}
//             onToggleComplete={onToggleComplete}
//             onDelete={onDelete}
//             onEditTask={onEditTask}
//           />
//         ))}
//       </div>
//     </Container>
//   );
// }
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Image from "react-bootstrap/Image";
import TaskCard from "../components/TaskCard";

export default function AllTasks({
  onToggleStar,
  onToggleComplete,
  onDelete,
  onEditTask,
}) {
  const [tasks, setTasks] = useState([]);

  // گرفتن تسک‌ها از بک‌اند
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:3000/api/tasks", {
          headers: { Authorization: token },
        });
        const data = await res.json();
        setTasks(data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };
    fetchTasks();
  }, []);

  return (
    <Container>
      <h5>All Tasks ({tasks.length})</h5>
      <div className="main-head d-flex">
        <div className="icons-main-head d-flex gap-2 mt-3">
          <Image src="/view-1.svg" className="img-1" />
          <Image src="/view-2.svg" className="img-2" />
        </div>
        <div className="sort-by">
          <DropdownButton id="dropdown-item-button" title="Sort by">
            <Dropdown.ItemText>Sort by</Dropdown.ItemText>
          </DropdownButton>
        </div>
      </div>
      <div className="all-cards d-flex gap-4 flex-wrap">
        {tasks.map((task) => (
          <TaskCard
            key={task._id} // از _id بک‌اند استفاده کن
            task={task}
            onToggleStar={onToggleStar}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
            onEditTask={onEditTask}
          />
        ))}
      </div>
    </Container>
  );
}
