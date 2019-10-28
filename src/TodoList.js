import React, { Fragment, useContext } from 'react';
import { Paper, List, Divider } from '@material-ui/core';
import Todo from './Todo';
import { TodosContext } from './contexts/todosContext';

const TodoList = ({ removeTodo, toggleTodo, editTodo }) => {
  const { todos } = useContext(TodosContext);

  if (todos.length)
    return (
      <Paper>
      <List>
        {todos.map((todo, idx) => (
          <Fragment key={todo.id}>
            <Todo {...todo}/>
            {idx < (todos.length - 1) && <Divider />}
          </Fragment>
        ))}
      </List>
    </Paper>
    );
  return null;
};

export default TodoList;
