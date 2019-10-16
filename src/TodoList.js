import React, { Fragment } from 'react';
import { Paper, List, Divider } from '@material-ui/core';
import Todo from './Todo';

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <Fragment key={todo.id}>
            <Todo
              task={todo.task}
              id={todo.id}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            <Divider />
          </Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
