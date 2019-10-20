import React from 'react';
import useTodoState from './hooks/useTodoState';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {
  // const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');

  // let initialTodos;
  // if (window.localStorage.getItem('todos'))
  //   initialTodos = JSON.parse(window.localStorage.getItem('todos'));
  // else initialTodos = [];

  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState([]);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
