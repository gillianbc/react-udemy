// Stateless functional component
import React from "react";

export default Option = (props) => (
        <div>
            <h3>{props.optionText}</h3>
            <button className="button button--link" onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}>
                Remove
            </button>
        </div>
    )
