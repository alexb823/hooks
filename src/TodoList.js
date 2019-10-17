import React, { Fragment } from 'react';
import { Paper, List, Divider } from '@material-ui/core';
import Todo from './Todo';

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  if (todos.length)
    return (
      <Paper>
      <List>
        {todos.map((todo, idx) => (
          <Fragment key={todo.id}>
            <Todo
              {...todo}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            {idx < (todos.length - 1) && <Divider />}
          </Fragment>
        ))}
      </List>
    </Paper>
    );
  return null;
};

export default TodoList;
