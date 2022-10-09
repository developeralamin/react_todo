import React, { useState, useEffect } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import TodoCreate from "./TodoCreate";
import TodoEmpty from "./TodoEmpty";
import TodoEdit from "./TodoEdit";

const TodoList = () => {
  const [todoEditing, setTodoEditing] = useState(null);

  const [todos, setTodos] = useState([
    {
      title: "First Todo",
      status: "Pending",
    },
    {
      title: "Second Todo",
      status: "Done",
    },
    {
      title: "Third Todo",
      status: "Done",
    },
  ]);

  //add todo
  const addTodo = (todo) => {
    let newTodos = todos.slice();
    newTodos.unshift(todo);
    setTodos(newTodos);
  };

  //update todo
  const updateTodo = ({ index, todo }) => {
    let newTodos = todos.slice();
    newTodos[index] = todo;
    setTodos(newTodos);
    setTodoEditing(null);
  };

  //delete todo
  const deleteTodo = (index) => {
    let newTodos = todos.slice();
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  //fetch api data use useEffect

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => console.log(json));
  });

  // console.log("todoEditing", todoEditing);

  //How and When needs to clean up useEffect Hook:

  const [count, setCount] = useState(window.innerWidth);

  const calculateWindowSize = () => {
    setCount(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", calculateWindowSize);

    return () => {
      window.removeEventListener("resize", calculateWindowSize);
    };
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center todo-title">
          <h1>React Todos</h1>
        </Card.Title>
        {count}
        <TodoCreate onCreateTodo={(todo) => addTodo(todo)} />

        {todos.length === 0 && <TodoEmpty />}

        <ListGroup>
          {todos.map((todo, index) => (
            <ListGroup.Item
              key={index}
              variant={todo.status === "Pending" ? "info" : "warning"}
            >
              <div className="float-start">
                {todoEditing === index ? (
                  <TodoEdit
                    todo={todo}
                    index={index}
                    onUpdateTodo={(value) => updateTodo(value)}
                  />
                ) : (
                  <>
                    {todo.status === "Pending" && todo.title}
                    {todo.status === "Done" && <del>{todo.title}</del>}
                  </>
                )}
              </div>

              <div className="float-end">
                <Button
                  variant="primary"
                  className="ms-2"
                  onClick={() => setTodoEditing(index)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </Button>
                <Button
                  variant="danger"
                  className="ms-2"
                  onClick={() => deleteTodo(index)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default TodoList;
