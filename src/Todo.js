import React, { Fragment, useContext } from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  IconButton,
}
from '@material-ui/core';
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';
import useToggle from './hooks/useToggle';
import EditTodoForm from './EditTodoForm';
import { TodosContext } from './contexts/todosContext';

const Todo = ({ id, task, completed }) => {
  const [isEditing, toggleIsEditing] = useToggle(false);
  const { removeTodo, toggleTodo } = useContext(TodosContext);

  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleIsEditing={toggleIsEditing}/>
      ) : (
        <Fragment>
          <Checkbox
            checked={completed}
            tabIndex={-1}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggleIsEditing}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </Fragment>
      )}
    </ListItem>
  );
};

export default Todo;
