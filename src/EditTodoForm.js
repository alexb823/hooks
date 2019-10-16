import React from 'react';
import { TextField } from '@material-ui/core';
import useInputState from './hooks/useInputState';

const EditTodoForm = ({ id, editTodo, task, toggleIsEditing }) => {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleIsEditing();
      }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
      />
    </form>
  );
};

export default EditTodoForm;
