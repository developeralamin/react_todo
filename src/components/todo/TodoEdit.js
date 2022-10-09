import React, { useState } from "react";
import { InputGroup, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const TodoEdit = ({ onUpdateTodo, todo, index }) => {
  const [title, setTitle] = useState(todo.title);
  const [status, setStatus] = useState(todo.status);

  const createTodo = () => {
    if (title.length > 0) {
      const todo = {
        title,
        status,
      };
      onUpdateTodo({ todo, index });
    }
  };

  const handleEnterSubmission = (e) => {
    if (e.key === "Enter") {
      createTodo();
    }
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Enter new Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => handleEnterSubmission(e)}
      />
      &nbsp;&nbsp;
      <select
        name="status"
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Pending">Pending</option>
        <option value="Done">Done</option>
      </select>
      <Button
        variant="outline-primary"
        id="button-addon2"
        onClick={(e) => createTodo()}
      >
        <FontAwesomeIcon icon={faCheckSquare} /> Save
      </Button>
    </InputGroup>
  );
};

export default TodoEdit;
