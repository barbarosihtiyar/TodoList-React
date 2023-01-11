import "./App.css";
import "./reset.css";
import TodoList from './Components/TodoList';
import TodoListForm from './Components/TodoListForm';

function App() {
  return (
    <div className="App">
    <h1 className="title">What's the Plan for Today?</h1>
    <TodoListForm />
    <TodoList />
    </div>
  );
}

export default App;
