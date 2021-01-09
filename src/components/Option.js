// Stateless functional component
import React from "react";

export default Option = (props) => (
        <div className="option">
            <h3 className="option__text">{props.optionNum}. {props.optionText}</h3>
            <button className="button button--link" onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}>
                Remove
            </button>
        </div>
    )
