import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const TodoLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState();
  const [passwordDirty, setPasswordDirty] = useState();
  const [formValid, setFormValid] = useState(false);

  const emailChange = (e) => {
    setEmail(e.target.value);
    setFormValid(e.target.value.includes("@") && password.trim().length >= 8);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
    setFormValid(e.target.value.trim().length >= 8 && email.includes("@"));
  };
  const blurEmailHandler = () => {
    setEmailDirty(email.includes("@"));
  };
  const blurPasswordHandler = () => {
    setPasswordDirty(password.trim().length >= 8);
  };

  return (
    <Container>
      <input
        type="email"
        value={email}
        onChange={emailChange}
        onBlur={blurEmailHandler}
        style={
          emailDirty
            ? { backgroundColor: "#709dd8c1" }
            : { backgroundColor: "#db7070b3" }
        }
      />
      <input
        type="password"
        value={password}
        onChange={passwordChange}
        onBlur={blurPasswordHandler}
        style={
          passwordDirty
            ? { backgroundColor: "#709dd8c1" }
            : { backgroundColor: "#db7070b3" }
        }
      />
      <Link to={"/todos"}>
        <button disabled={!formValid}>LOGIN</button>
      </Link>
    </Container>
  );
};
const Container = styled.div`
  width: 400px;
  height: 200px;
  background-color: #3b5f74;
  margin: 10px auto;
  padding: 50px 50px;
  border-radius: 12px;
  text-align: center;
  input {
    margin-top: 20px;
    width: 400px;
    height: 40px;
    border-radius: 22px;
    border: 0;
    text-align: center;
  }
  button {
    margin: 30px 0;
    width: 150px;
    height: 40px;
    border-radius: 22px;
    border: 0;
    font-size: large;
    transition: 0.3s;
    &:hover {
      background-color: #959bed;
      color: #fff;
    }
    &:active {
      background-color: #3b5f74;
    }
  }
`;
