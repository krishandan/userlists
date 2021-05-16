import React, {useState} from 'react';
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";



function App() {

  const [userlist, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    
    setUserList((prevUserList) => {
      return [...prevUserList, {key:Math.random(), name:uName, age:uAge}];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userlist} />
    </>
  );
}

export default App;
