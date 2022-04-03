import React from 'react';
import { useFetch, useUpdateLogger } from '../Hooks';

export const UseFetch = () => {
  const [loading, users = [], error, status] = useFetch("http://jsonplaceholder.typicode.com/users");

  useUpdateLogger(status);

  if (loading) return <h2>Loading....</h2>

  if (error) return <h1>Someting went wrong</h1>

  return users.map((user: any) => <h3 key={user.id}> {user.name} </h3>)
}
