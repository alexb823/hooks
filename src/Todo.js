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
import { DispatchContext } from './contexts/todosContext';

const Todo = ({ id, task, completed }) => {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggleIsEditing] = useToggle(false);

  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleIsEditing={toggleIsEditing}/>
      ) : (
        <Fragment>
          <Checkbox
            checked={completed}
            tabIndex={-1}
            onClick={() => dispatch({type: 'TOGGLE', id: id})}
          />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => dispatch({type: 'REMOVE', id: id})}>
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
