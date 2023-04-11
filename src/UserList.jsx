import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserList = () => {
  const { state, dispatch } = useContext(UserContext);

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_USER', payload: id });
  };

  return (
    <div>
      <h2>User List</h2>
      {state.users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
