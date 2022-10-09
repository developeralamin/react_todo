import React, { useState, useEffect } from "react";
import { InputGroup, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const TodoCreate = (props) => {
  const [title, setTitle] = useState("");

  const createTodo = () => {
    if (title.length > 0) {
      const todo = {
        title,
        status: "Pending",
      };
      props.onCreateTodo(todo);
      setTitle("");
    }
  };

  const handleEnterSubmission = (e) => {
    if (e.key === "Enter") {
      createTodo();
    }
  };

  //useEffect hooks
  /* const [score, setScore] = useState(title.length);

  useEffect(() => {
    document.title = "Title" + title.length;
  }); */

  // when use [] then rendering just one time
  useEffect(() => {
    console.log("Every timeredndering");
  }, []);

  useEffect(() => {
    console.log("redndering");
  }, [title]);

  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Enter new Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(E) => handleEnterSubmission(E)}
      />
      <Button
        variant="outline-primary"
        id="button-addon2"
        onClick={(e) => createTodo()}
      >
        <FontAwesomeIcon icon={faPlusCircle} /> New
      </Button>
    </InputGroup>
  );
};

export default TodoCreate;
