import Container from "react-bootstrap/Container";
import TaskCard from "../components/TaskCard";

export default function UncompletedTasks({
  tasks,
  onToggleStar,
  onToggleComplete,
  onDelete,
  onEditTask,
}) {
  const uncompletedTasks = tasks.filter((task) => !task.completed);

  return (
    <Container>
      <h4 className="mb-4">Uncompleted Tasks ({uncompletedTasks.length})</h4>
      <div className="all-cards d-flex gap-4 flex-wrap">
        {uncompletedTasks.map((task) => (
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
