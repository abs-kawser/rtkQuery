import React, { useEffect,useState } from 'react'
import {useGetTodoByIdQuery,  useGetTodosQuery, useUpdateTodoMutation } from '../redux/api';

const Todos = () => {
  const [selectedTodoId, setSelectedTodoId] = useState(null);
   
  // Fetch list of todos
  const { data: todos, error, isLoading } = useGetTodosQuery();
  console.log("todos",todos);

  // Fetch a single todo by ID
  const { data: todoById } = useGetTodoByIdQuery(selectedTodoId);
  console.log("todoById", todoById);
  
  const handleSingleGet = (id) => {
    setSelectedTodoId(id);
  };


  // Update a todo
  // const [updateTodo] = useUpdateTodoMutation();
  // useEffect(() => {
  //   // Assume you have a todo object to update
  //   const updatedTodo = { id: 1, title: 'Updated Todo' };
  //   updateTodo(updatedTodo);
  // }, [updateTodo]);

  // // Delete a todo
  // const [deleteTodo] = useDeleteTodoMutation();
  // useEffect(() => {
  //   // Assume you have a todo ID to delete
  //   const todoIdToDelete = 1;
  //   deleteTodo(todoIdToDelete);
  // }, [deleteTodo]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.todos?.map((todo) => (
          <li key={todo.id}>{todo.todo}
            <button onClick={() => handleSingleGet(todo.id)}>Get</button>
          </li>
        ))}
      </ul>

      <h2>Todo by ID</h2>
      {/* <p>{todoById ? todoById.title : 'Loading...'}</p> */}
    </div>
  );
};


export default Todos