import Container from "react-bootstrap/Container";
import TaskCard from "../components/TaskCard";

export default function CompletedTasks({
  tasks,
  onToggleStar,
  onToggleComplete,
  onDelete,
  onEditTask,
}) {
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <Container>
      <h4 className="mb-4">Completed Tasks ({completedTasks.length})</h4>
      <div className="all-cards d-flex gap-4 flex-wrap">
        {completedTasks.map((task) => (
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
