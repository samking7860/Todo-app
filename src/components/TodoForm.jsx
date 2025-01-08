import React, { useEffect } from "react";

const TodoForm = ({
  todo,
  setTodo,
  todos,
  setTodos,
  addTodoToLocalStorage,
  edit,
  setEdit,
  id,
}) => {
  useEffect(() => {
    addTodoToLocalStorage();
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let update = todos.map((todoItem) => {
      if (todoItem.id === id) {
        return { ...todoItem, task: todo };
      }
      return todoItem;
    });
    edit
      ? setTodos(update)
      : setTodos([...todos, { id: Date.now(), task: todo, completed: false }]);
    setTodo("");
    setEdit(false);
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        className="h-10 w-full rounded-lg border text-2xl ps-5 focus:outline-gray-300"
        name="input"
        autoComplete="off"
        placeholder="create a new todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="h-10 w-full rounded-lg bg-blue-400 mt-5 font-bold text-white hover:bg-blue-600 focus:bg-blue-600 transition delay-100 outline-none">
        {edit ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
};

export default TodoForm;
