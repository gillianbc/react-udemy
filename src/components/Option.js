// Stateless functional component
import React from "react";

export default Option = (props) => (
        <div>
            <h3>{props.optionText}</h3>
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}>
                Remove
            </button>
        </div>
    )
