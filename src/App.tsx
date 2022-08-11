import React from 'react';
import Todos from './components/Todos';
import './App.css';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

const todos = [new Todo('Todo 1'), new Todo('Todo 2')];

const addTodoHandler = (todoText: string) => {
  console.log(todoText);
};

function App() {
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
