import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const fetchTodos = () => {
    let todo = localStorage.getItem("todos");
    return todo ? JSON.parse(todo) : [];
  };

  const addTodoToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const [todos, setTodos] = useState(fetchTodos());
  const [todo, setTodo] = useState("");
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null);

  return (
    <section className="min-h-[400px] w-[90%] md:w-[75%] lg:w-[50%] bg-white rounded-lg flex flex-col items-center justify-center gap-5 p-5">
      <header className="text-2xl md:text-3xl font-semibold">Todo App</header>
      <TodoForm
        todo={todo}
        setTodo={setTodo}
        todos={todos}
        setTodos={setTodos}
        addTodoToLocalStorage={addTodoToLocalStorage}
        edit={edit}
        setEdit={setEdit}
        id={id}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        setTodo={setTodo}
        edit={edit}
        setEdit={setEdit}
        setId={setId}
      />
    </section>
  );
};

export default TodoContainer;
