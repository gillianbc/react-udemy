// Stateless functional component
import Option from "./Option";
import React from "react";

const Options = (props) => {
    return (
        <div>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {
                /*To do a simple paragraph, we'd do this
                this.props.options.map((option) =>  <p key={option}>{option}</p>)
                */
                /*We still need to provide a key as it's an array*/
                props.options.map((option) =>
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />)
            }
            <button
                onClick={props.handleRemove}
                disabled={props.options.length < 2}>
                Remove all options?
            </button>
        </div>
    )
}

export default Options