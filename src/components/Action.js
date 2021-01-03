// Stateless functional component
import React from "react";

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handleSelectedOption} disabled={!props.hasOptions}>What should I do?</button>
        </div>
    )
}

export default Action