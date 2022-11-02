import React,  { useState } from "react";
import Card from "../UI/Card";

const UserList = (props) => {
    const {users} = props;
    console.log("users", users);
    return(
        <ul>
        {users.map(user => <li>
            {user.name} (Years {user.age})
        </li>)}
        </ul>
    )
    
}   

 export default UserList;