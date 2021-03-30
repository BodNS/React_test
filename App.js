import "./App.css";
import React from "react";

function App() {
  // <UserList  users={users} />
  

  const UsersToLi = (users) => {
    
   /*  users.map((e) => {
      <li key={e.id}>{`${e.id} ${e.fName} ${e.lName}`}</li>
    }); */

  
      [...users].forEach((e) => {
        console.log(e)
      })

  };

  fetch('../public/data/users.json')
      .then((response) => response.json())
      .then(UsersToLi)
      .catch(console.error);

  return <ul><UsersToLi /></ul>;
}
export default App;