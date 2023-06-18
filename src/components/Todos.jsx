import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosActions } from "../store/todo/todoSlice";
import { TodoItem } from "./TodoItem";
import styled from "styled-components";

export const Todos = () => {
  const { todos } = useSelector((state) => state.todos);
  console.log(todos, "todos");
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const enable = title.trim().length > 0;
  const addTodos = (e) => {
    e.preventDefault();
    const data = {
      id: Math.random(),
      title,
      check: false,
    };
    dispatch(todosActions.addTodos(data));
    setTitle("");
  };
  const deleteTodo = (id) => {
    dispatch(todosActions.deleteTodo(id));
  };
  const deleteAll = () => {
    dispatch(todosActions.deleteAll());
  };
  const checkTodo = (id) => {
    dispatch(todosActions.completedTodo(id));
  };
  return (
    <Container>
      <DivBlock1 onSubmit={addTodos}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>
          <button onClick={deleteAll}>DELETE ALL</button>
          <button disabled={!enable} type="submit">
            ADD
          </button>
        </div>
      </DivBlock1>
      <div>
        {todos.map((el) => (
          <TodoItem
            key={el.id}
            el={el}
            deleteTodo={deleteTodo}
            checkTodo={checkTodo}
          />
        ))}
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 500px;
  background-color: #3b5f74;
  text-align: center;
  border-radius: 12px;
  padding: 30px 0;
  margin: 10px auto;
`;

const DivBlock1 = styled.form`
  input {
    margin: 10px;
    width: 400px;
    height: 40px;
    border-radius: 22px;
    border: 0;
    text-align: center;
  }
  button {
    width: 150px;
    height: 30px;
    margin: 10px;
    border-radius: 12px;
    border: 0;
    font-size: 16px;
  }
`;
