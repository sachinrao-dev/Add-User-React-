import React from "react";
import Button from "./Button";

const ErrorModal = (props) =>{
return<div>
    <header>
        <h2>{ props.title}</h2>

    </header>
    <div>
        <p>{props.massage}</p>
    </div>
    <footer>
        <Button>Okay</Button>
    </footer>
</div>
}
export default ErrorModal;