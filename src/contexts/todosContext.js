import React, { createContext, useReducer } from 'react';
import useTodoState from '../hooks/useTodoState';
import todoReducer from '../reducers/todoReducer';

const defaultTodos = [
  { id: 1, task: 'do stuff', completed: false }
]

export const TodosContext = createContext();

export const TodosProvider = props => {
  // const todosStuff = useTodoState(defaultTodos);
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

  return (
    <TodosContext.Provider value={{todos, dispatch}}>
      {props.children}
    </TodosContext.Provider>
  )
}
