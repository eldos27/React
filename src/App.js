import React, { useState } from "react";
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
  function deleteTask(id) {
    let newArr = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newArr);
  }
  return (
    <>
      <Input addTask={addTask} />
      <View todos={todos} deleteTask={deleteTask} />
    </>
  );
}

export default App;
