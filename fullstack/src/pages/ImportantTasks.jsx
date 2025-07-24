import Container from "react-bootstrap/Container";
import TaskCard from "../components/TaskCard";

export default function ImportantTasks({
  tasks,
  onToggleStar,
  onToggleComplete,
  onDelete,
  onEditTask,
}) {
  const importantTasks = tasks.filter((task) => task.starred);

  return (
    <Container>
      <h4 className="mb-4">Important Tasks ({importantTasks.length})</h4>
      <div className="all-cards d-flex gap-4 flex-wrap">
        {importantTasks.map((task) => (
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
