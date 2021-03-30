import "./App.css";
import React, { useEffect } from "react";

function App() {
  // <UserList  users={users} />
  const printUsers = (users) => {
    users.map((e) => {
      <li key={e.id}>{`${e.id} ${e.fName} ${e.lName}`}</li>;
    });
  };

  const loadUsers = () => {
    fetch("../public/data/users.json")
      .then((response) => response.json())
      .then((users) => printUsers(users));
  };

     loadUsers();
 

  return <ul>{printUsers(users)}</ul>;
}
export default App;