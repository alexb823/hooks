import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
  { id: 1, task: 'do stuff', completed: false }
]

export const TodosContext = createContext();

export const TodosProvider = props => {
  const todosStuff = useTodoState(defaultTodos);

  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  )
}
