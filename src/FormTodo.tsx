import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const FormTodo = ({ addTodo }: any) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Add New Task</Form.Label>
        <Form.Control
          id="task"
          className="input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new task"
        />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormTodo;
