import "./App.css";
import React, { useState } from "react";

function App() {
  // <UserList  users={users} />

  const [users, setUsers] = useState([]);

  const UsersToLi = (users) => {
    /*  users.map((e) => {
      <li key={e.id}>{`${e.id} ${e.fName} ${e.lName}`}</li>
    }); */
    console.log(users);

    // [...users].forEach((e) => {
    //   console.log(e);
    // });
  };

  fetch("../public/data/users.json")
    .then((response) => response.json())
    .then((items) => setUsers((users = items)))
    .catch(console.error);

  return (
    <ul>
      <UsersToLi />
    </ul>
  );
}
export default App;
