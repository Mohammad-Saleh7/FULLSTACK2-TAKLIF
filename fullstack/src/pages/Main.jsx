import Container from "react-bootstrap/Container";
import TaskCard from "../components/TaskCard";

export default function MainPage({
  tasks,
  onToggleStar,
  onToggleComplete,
  onDelete,
  onEditTask,
}) {
  const mainTasks = tasks.filter((task) => task.directory === "Main");

  return (
    <Container>
      <h4 className="mb-4">Main Tasks ({mainTasks.length})</h4>
      <div className="all-cards d-flex gap-4 flex-wrap">
        {mainTasks.map((task) => (
          <TaskCard
            key={task.id}
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
