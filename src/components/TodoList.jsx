import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todoId, value) => {
    if (!value.text || /^\s*$/.test(value.text)) {
      return;
    }
    setTodos((prev) => prev.map((item) => (item.id === todoId ? value : item)));
  };

  const removeTodo = (id) => {
    const filteredTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todos.isComplete = !todos.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>What's the plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoList;
