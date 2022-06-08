import React from "react";
import Classes from "./Button.module.css"

const Button = (props) => {
    return(
        <React.Fragment>
            <button className={Classes.button} onClick={props.onClick} >{props.children}</button>
        </React.Fragment>
    )

}

export default Button;