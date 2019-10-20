import useLocalStorageState from './useLocalStorageState';
import uuid from 'uuid/v4';

const useTodoState = initialTodos => {
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos);

  const addTodo = newTodoText => {
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
  };

  const removeTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleTodo = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) return { ...todo, completed: !todo.completed };
      else return todo;
    });
    setTodos(updatedTodos);
  };

  const editTodo = (id, task) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) return { ...todo, task };
      else return todo;
    });
    setTodos(updatedTodos);
  };

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    editTodo,
  };
};

export default useTodoState;
