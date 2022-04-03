import React, { useState } from 'react';
import { useEffectOnce } from '../Hooks';

export const UseEffectOnce = () => {

  const [users, setUsers] = useState<any>([]);

  // Api call will be made only only once on page load
  // Similar to useEffect(() => {}, [])
  useEffectOnce(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => setUsers(res))
  })

  return users.map((user: any) => <h2 key={user.id}>{user.name}</h2>)
}
