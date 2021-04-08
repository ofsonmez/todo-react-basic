import React, { useState } from 'react';
import './App.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './Todo';
import FormTodo from './FormTodo';

function App() {
  const [todos, setTodos] = useState([
    {
      task: 'This is a sample task.',
      isFinished: false,
    },
  ]);

  const addTodo = (task: string) => {
    setTodos([{ task, isFinished: false }, ...todos]);
  };

  const markTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isFinished = true;
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="container mt-5 px-5">
        <h2 className="text-center mb-4">Welcome Your Todo List</h2>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  todo={todo}
                  index={index}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
