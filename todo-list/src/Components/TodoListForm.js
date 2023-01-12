import React from "react";
import { useState } from "react";
import "../App.css";

function TodoListForm({todo,todos}) {
  const [form, setForm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if(form === ""){
      return false
    }
    todos([...todo,form]);
    setForm("");
  }
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
