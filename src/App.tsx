import React, { useState } from 'react';
import Todos from './components/Todos';
import './App.css';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  const [todos, setTudos] = useState<Todo[]>([]);

  const removeTodoHandler = (todoId: string) => {
    setTudos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

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
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
