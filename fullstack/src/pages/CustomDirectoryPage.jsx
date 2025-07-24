import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import TaskCard from "../components/TaskCard";

export default function CustomDirectoryPage({
  tasks,
  onToggleStar,
  onToggleComplete,
  onDelete,
  onEditTask,
}) {
  const { name } = useParams();
  const filtered = tasks.filter((task) => task.directory === name);

  return (
    <Container>
      <h4 className="mb-4">
        Tasks in "{name}" ({filtered.length})
      </h4>
      <div className="all-cards d-flex gap-4 flex-wrap">
        {filtered.map((task) => (
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
