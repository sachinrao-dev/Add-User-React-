import React, {useState, useRef} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";


const AddUser =(props) =>{
    const  nameInputRef = useRef();
    const ageInputRef = useRef();

    const AddUserHandler = (event) =>{
        const  enteredUserName=nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length===0){
            alert("entered the userName")
            return;
        } 
        if(+enteredAge<1){
            alert('user age must be greater than 1');
            return;
        }
        // console.log(enteredUserName, enteredAge);
        props.onAddUser(enteredUserName, enteredAge )
        nameInputRef.current.value = '';
        ageInputRef.current.value = ''; 
        

    }


    return(
        <div>
            <ErrorModal title= "An error occurre!" message= "Something went wrong"/>
        <Card >
        <form onSubmit={AddUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text"
            ref={nameInputRef}
            />
            <label htmlFor="username">Age ( Years )</label>
            <input id="username"  type="number" ref={ageInputRef}/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </div>

    );
}
export default AddUser;