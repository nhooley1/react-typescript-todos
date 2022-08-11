import React from 'react';
import Todos from './components/Todos';
import './App.css';
import Todo from './models/todo';

const todos = [new Todo('Todo 1'), new Todo('Todo 2')];

function App() {
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
