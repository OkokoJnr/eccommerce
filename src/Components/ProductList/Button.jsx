import React from "react";
import './button.css'

function Button({children, eventHandler, disable}){
    return (<>
        <button onClick={eventHandler} className="btn btn-primary" disabled={disable}> {children} </button>
    </>)
}

export default Button;