import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";

const UserForm = ({ user }) => {
  const { dispatch } = useContext(UserContext);

  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: Date.now(), name, email };
    if (user) {
      dispatch({ type: "UPDATE_USER", payload: { ...newUser, id: user.id } });
    } else {
      dispatch({ type: "ADD_USER", payload: newUser });
    }
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h2>{user ? "Edit User" : "Add User"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">{user ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default UserForm;