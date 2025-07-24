import Container from "react-bootstrap/Container";
import TaskCard from "../components/TaskCard";

export default function SecondaryPage({
  tasks,
  onToggleStar,
  onToggleComplete,
  onDelete,
  onEditTask,
}) {
  const secondaryTasks = tasks.filter((task) => task.directory === "Secondary");

  return (
    <Container>
      <h4 className="mb-4">Secondary Tasks ({secondaryTasks.length})</h4>
      <div className="all-cards d-flex gap-4 flex-wrap">
        {secondaryTasks.map((task) => (
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
