import React from 'react';
import { UserProvider } from "./UserContext";
import UserList from "./UserList";
import UserForm from "./UserForm";
import "./App.css";

function App() {


  return (
    <UserProvider>
      <div className="App">
        <UserList />
        <UserForm />
      </div>
    </UserProvider>
  );
}

export default App;
