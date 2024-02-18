// api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),

  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => 'todos',
    }),


    getTodoById: builder.query({
      query: (id) => `todos/${id}`,
    }),

    updateTodo: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `todos/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetTodosQuery, useGetTodoByIdQuery, useUpdateTodoMutation, useDeleteTodoMutation } = myApi;
