import React from 'react';
import { Button } from 'react-bootstrap';

interface Props {
  todo: any;
  index: number;
  markTodo: any;
  removeTodo: any;
}

const Todo = ({ todo, index, markTodo, removeTodo }: Props) => {
  return (
    <div className="todo">
      <p style={{ textDecoration: todo.isFinished ? 'line-through' : '' }}>
        {todo.task}
      </p>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>
          ✓
        </Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>
          ✕
        </Button>
      </div>
    </div>
  );
};

export default Todo;
