import uuid from 'uuid/v4';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: uuid(), task: action.task, completed: false }];
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return state.map(todo => {
        if (todo.id === action.id) return { ...todo, completed: !todo.completed };
        else return todo;
      });
    case 'EDIT':
      return state.map(todo => {
        if (todo.id === action.id) return { ...todo, task: action.task };
        else return todo;
      });
    default:
      return state;
  }
}


export default todoReducer;
