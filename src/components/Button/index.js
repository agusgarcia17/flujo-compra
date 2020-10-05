import React from "react"

function Button(props){

    return(
        <button onClick={props.callback}>{props.label}</button>
    )

}

export default Button