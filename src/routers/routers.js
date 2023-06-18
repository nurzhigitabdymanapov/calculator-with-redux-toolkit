import React from "react";
import { Route, Routes } from "react-router-dom";
import { Todos } from "../components/Todos";
import { TodoLogin } from "../components/TodoLogin";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoLogin />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
  );
};
