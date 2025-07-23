import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { useState } from "react";

export default function Secondary() {
  const [star1, setStar1] = useState(true);
  const [star2, setStar2] = useState(false);
  const [star3, setStar3] = useState(false);
  const [completed1, setCompleted1] = useState(true);
  const [completed2, setCompleted2] = useState(false);
  const [completed3, setCompleted3] = useState(false);
  function handleStar(index) {
    if (index === 1) setStar1(!star1);
    if (index === 2) setStar2(!star2);
    if (index === 3) setStar3(!star3);
  }

  function handleComplete(index) {
    if (index === 1) setCompleted1(!completed1);
    if (index === 2) setCompleted2(!completed2);
    if (index === 3) setCompleted3(!completed3);
  }
  return (
    <Container>
      <h5>secondary's tasks(0 Tasks)</h5>
      <div className="main-head d-flex">
        <div className="icons-main-head d-flex gap-2 mt-3">
          <Image src="/view-1.svg" className="img-1" />
          <Image src="/view-2.svg" className="img-2" />
        </div>
        <div className="sort-by">
          <DropdownButton id="dropdown-item-button" title="Sort by">
            <Dropdown.ItemText>Sort by</Dropdown.ItemText>
            <Dropdown.Item as="button">Order added</Dropdown.Item>
            <Dropdown.Item as="button">Earlier first</Dropdown.Item>
            <Dropdown.Item as="button">Later first</Dropdown.Item>
            <Dropdown.Item as="button">Completed first</Dropdown.Item>
            <Dropdown.Item as="button">UnCompleted first</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </Container>
  );
}
