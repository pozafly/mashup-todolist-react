import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map(({ id, text, done }) => (
        <TodoItem text={text} done={done} key={id} id={id} />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
