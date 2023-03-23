import React, { useState, useRef, useEffect } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
      e.preventDefault();
     
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
      });
    setInput('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    if (e.target.checked) {
        console.log('✅ Checkbox is checked');
      } else {
        console.log('⛔️ Checkbox is NOT checked');
      }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update an item"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button edit" onClick={handleSubmit}>
            Update todo
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button" onClick={handleSubmit}>
            Add todo
          </button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
