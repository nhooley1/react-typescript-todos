import React from 'react';
import Todos from './components/Todos';
import './App.css';

function App() {
  return (
    <div>
      <Todos items={['item 1', 'item 2', 'item 3']} />
    </div>
  );
}

export default App;
