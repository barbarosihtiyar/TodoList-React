import "./App.css";
import "./reset.css";
import TodoList from './Components/TodoList';
import TodoListForm from './Components/TodoListForm';
import { useState } from "react";

function App() {
  const [todo,setTodo] = useState([]);
 
  const removeTodo = id => {
    const removedArr = [...todo].filter(item => item.id !== id);
    setTodo(removedArr);
  };
  return (
    <div className="App">
    <div className="appWrapper">
    <h1 className="title">What's the Plan for Today?</h1>
    <TodoListForm todo={todo} todos={setTodo} />
    <TodoList todo={todo} removeTodo={removeTodo}/>
    </div>
    </div>
  );
}

export default App;
