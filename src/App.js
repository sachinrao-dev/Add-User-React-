import React, {useState} from 'react';
import logo from './logo.svg';

import AddUser from './Component/USER/AddUser';
import UserList from './Component/USER/UserList';
import './App.css';

function App() {
  const [usersList, setUserList] = useState([]);
  const addUserHandler =(uName, uAge) => {
    console.log(uName, uAge,);

     setUserList((prevUserList) => {
      return[...prevUserList, {name:uName, age: uAge }];

    });
  }
 
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}/>
      <UserList users ={usersList}/>
    </div>
  );
}

export default App;
