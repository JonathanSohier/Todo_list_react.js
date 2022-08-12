import React from 'react'; 
import TodoForm from './Composants/TodoForm';
import TodoList from './Composants/TodoList';
import './style.css';

function App() {
  return (
    <div className="todo-app">
      <TodoList/>
    </div>
  );
}

export default App; 
