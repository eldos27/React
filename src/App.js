import React, { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import View from "./components/View/View";

function App() {
  const [todos, setTodos] = useState([]);
  function addTask(task) {
    let obj = {
      title: task,
      id: Date.now(),
    };
    let todosArr = [...todos, obj];
    setTodos(todosArr);
  }
  console.log(todos);
  return (
    <>
      <Input addTask={addTask} />
      <Button />
      <View todos={todos} />
    </>
  );
}

export default App;
