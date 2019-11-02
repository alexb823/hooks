import React, { createContext } from 'react';
import todoReducer from '../reducers/todoReducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

// const defaultTodos = [
    //   { id: 1, task: 'do stuff', completed: false }
    // ]

export const TodosContext = createContext();
export const DispatchContext = createContext();

export const TodosProvider = props => {
  const [todos, dispatch] = useLocalStorageReducer('todos', [], todoReducer);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}
