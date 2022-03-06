import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Todos from '../components/Todos';

const Header = styled.h2`
  text-align: center;
 `
function UseCallbackPage() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Header>General UseCallback</Header>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default UseCallbackPage; 
