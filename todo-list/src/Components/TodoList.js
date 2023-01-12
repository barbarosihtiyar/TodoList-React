import React from "react";
import "../App.css";
import { FaTimesCircle } from "react-icons/fa";

function TodoList({ todo,removeTodo }) {
  return (
    <div className="todoList">
      {todo.map((item, index) => (
        <div className="todoTarget" key={index}>
          <span className="todoSpan">{index+1} - {item}</span>{" "}
          <div className="button">
            <FaTimesCircle onClick={() => removeTodo(item.id)}/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
