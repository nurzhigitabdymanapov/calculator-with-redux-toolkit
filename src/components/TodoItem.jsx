import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todosActions } from "../store/todo/todoSlice";
import styled from "styled-components";
import { ImCheckboxChecked } from "react-icons/im";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

export const TodoItem = ({ el, deleteTodo, checkTodo }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [editTitle, setEditTitle] = useState(el.title);
  const enable = editTitle.trim().length > 0;
  const openEdit = () => {
    setOpen(true);
  };
  const saveNewTodo = (el) => {
    setOpen(false);
    const data = {
      id: el.id,
      title: editTitle,
    };
    dispatch(todosActions.saveTodo(data));
  };
  return (
    <Container>
      {open ? (
        <ContainerSave>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <button disabled={!enable} onClick={() => saveNewTodo(el)}>
            SAVE
          </button>
        </ContainerSave>
      ) : (
        <>
          <h1 style={el.check ? { textDecoration: "line-through" } : null}>
            {el.title}
          </h1>
          <div>
            <ImCheckboxChecked onClick={() => checkTodo(el.id)} />
            <AiFillDelete onClick={() => deleteTodo(el.id)} />
            <AiFillEdit onClick={openEdit} />
          </div>
          {/* <button onClick={openEdit}>EDIT</button> */}
          {/* <button onClick={() => deleteTodo(el.id)}>DELETE</button> */}
          {/* <input type="checkbox" onClick={() => checkTodo(el.id)} /> */}
        </>
      )}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin: 10px;
  h1 {
    width: 300px;
  }
  div {
    display: flex;
    gap: 20px;
  }
`;
const ContainerSave = styled.main`
  width: 400px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    width: 300px;
    height: 40px;
    border-radius: 22px;
    border: 0;
  }
  button {
    width: 100px;
    height: 40px;
    margin: 10px;
    border-radius: 22px;
    border: 0;
    font-size: 16px;
  }
`;