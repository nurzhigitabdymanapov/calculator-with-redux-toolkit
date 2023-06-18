import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { todosActions } from "../store/todo/todoSlice";

export const Calculator = () => {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const dispatch = useDispatch();
  const value = useSelector((state) => state.todos.result);

  const handleAdd = () => {
    dispatch(todosActions.add(+value1));
    setValue1("");
  };

  const handleSubtract = () => {
    dispatch(todosActions.subtract(+value1));
    setValue1("");
  };

  const handleMultiply = () => {
    dispatch(todosActions.multiply(+value1));
    setValue1("");
  };

  const handleDivide = () => {
    dispatch(todosActions.divide(+value1));
    setValue1("");
  };

  const reset = () => {
    dispatch(todosActions.reset());
  };

  return (
    <Container>
      <div>
        <ContainerInput>
          <input
            type="number"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
          />
        </ContainerInput>
        <h1>{value}</h1>
        <div>
          <button onClick={handleAdd}>+</button>
          <button onClick={handleSubtract}>-</button>
          <button onClick={handleMultiply}>x</button>
          <button onClick={handleDivide}>/</button>
          <button onClick={reset}>RESET</button>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #3b5f74;
  width: 400px;
  border-radius: 12px;
  padding: 50px;
  margin: 20px auto;
  button {
    width: 50px;
    height: 50px;
    margin: 5px;
  }
  h1 {
    color: #fff;
    margin: 10px;
  }
`;
const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  input {
    border-radius: 22px;
    text-align: center;
    border: 0;
    height: 50px;
    width: 300px;
    &:active {
      border: 0;
    }
  }
`;
