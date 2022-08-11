import React, { useState } from 'react';
import Todos from './components/Todos';
import './App.css';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  const [todos, setTudos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTudo = new Todo(todoText);

    setTudos((prevState) => {
      return prevState.concat(newTudo);
    });

    console.log(todoText);
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
