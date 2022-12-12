/* eslint-disable eqeqeq */
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { Card } from "@mui/material";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, input: input, status: false };
    if (!todo.input) {
      return alert("Todo wajib diisi");
    }
    setTodos([todo, ...todos]);
    setInput("");
  };

  const handleDelete = (id) => {
    let updateTodo = [...todos].filter((todo) => todo.id !== id);
    setTodos(updateTodo);
  };

  const handleDone = (id) => {
    let doneTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }
      return todo;
    });
    setTodos(doneTodo);
  };
  return (
    <Card
      style={{
        width: "70%",
        margin: "auto",
        marginTop: 300,
        backgroundColor: "whitesmoke",
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          placeholder="add a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ marginTop: 30, height: 30, width: "40%", marginBottom: 20 }}
        />
        <button
          type="submit  "
          style={{
            marginTop: 30,
            height: 35,
            width: "10%",
            backgroundColor: "blue",
            color: "white",
            borderColor: "blue",
          }}
        >
          Add
        </button>
      </form>
      {todos.map((todo, idx) => {
        return (
          <div
            key={idx}
            style={{
              marginTop: 10,
              backgroundColor: "red",
              width: "50%",
              margin: "auto",
            }}
          >
            <h3
              style={{
                backgroundColor: "blue",
                textAlign: "left",
                padding: 10,
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                textDecoration: todo.status == true ? "line-Through" : "",
              }}
            >
              {todo.input}
              <div>
                <DeleteIcon
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => handleDelete(todo.id)}
                />
                <CheckIcon
                  style={{ color: "yellow", cursor: "pointer", marginLeft: 10 }}
                  onClick={() => handleDone(todo.id)}
                />
              </div>
            </h3>
          </div>
        );
      })}
    </Card>
  );
};

export default TodoList;
