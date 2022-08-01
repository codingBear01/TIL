import { createContext, React, useReducer } from 'react';
import ToDoList from './ToDoList';
import { todosInitialState, todosReducer } from './reducer';

export const TodosContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(todosReducer, todosInitialState);
  console.log('state', state);
  console.log('dispatch', state);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <ToDoList />
    </TodosContext.Provider>
  );
};

export default App;
