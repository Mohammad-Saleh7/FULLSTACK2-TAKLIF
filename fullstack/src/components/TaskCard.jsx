import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

export default function TaskCard({
  task,
  onToggleStar,
  onToggleComplete,
  onDelete,
}) {
  const cardStyle =
    task.id === 1
      ? { backgroundColor: "navy", color: "white" }
      : { backgroundColor: "#e9e9e9", color: "black" };

  const linkClass = task.id === 1 ? "card-link" : "card-link-two";
  const dashedLineClass = task.id === 1 ? "dashed-line" : "dashed-line-two";

  return (
    <div className="card-box mt-5">
      <Card
        className={`card-${task.id === 1 ? "one" : "two"} d-flex flex-column`}
        style={{ width: "18rem", ...cardStyle }}
      >
        <p className="badge-card">Main</p>
        <Card.Body className="card-b-all flex-column">
          <Card.Title>{task.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted card-sub">
            {task.description}
          </Card.Subtitle>

          <div className="d-flex align-items-center mt-5 gap-1 mb-4">
            <i className="bi bi-calendar2-week me-2"></i>
            <span className="m-0">{task.date}</span>
          </div>
          <hr className={dashedLineClass} />
          <div className="footer-card">
            <div>
              <Card.Link
                className={`${linkClass} ${
                  task.completed ? "btn-complete" : ""
                }`}
                onClick={() => onToggleComplete(task.id)}
                href="#"
              >
                {task.completed ? "completed" : "uncompleted"}
              </Card.Link>
            </div>
            <div className="footer-icon">
              <i
                className={`bi bi-star-fill star ${
                  task.starred ? "star-active" : ""
                }`}
                onClick={() => onToggleStar(task.id)}
              ></i>
              <i
                className="bi bi-trash-fill trash"
                onClick={() => onDelete(task.id)}
              ></i>
              <i className="bi bi-three-dots-vertical"></i>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  onToggleStar: PropTypes.func.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
