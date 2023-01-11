import React from "react";
import { useState } from "react";
import "../App.css";

function TodoListForm() {
  const [form, setForm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setForm("");
    console.log(form);
  };

  return (
    <div className="todoListForm">
      <form onSubmit={onSubmit}>
        <input
          value={form}
          className="todoInput"
          type="text"
          placeholder="Add a Todo"
          onChange={(e) => setForm(e.target.value)}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default TodoListForm;
