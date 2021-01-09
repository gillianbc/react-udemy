// Stateless functional component
import Option from "./Option";
import React from "react";

const Options = (props) => (
    <div>
        <div className="widget-header">
          <h3 className="widget-header__title"> Your options</h3>
          <button
            className="button button--link"
            onClick={props.handleRemove}
            disabled={props.options.length < 2}>
            Remove All
          </button>
        </div>
      {props.options.length === 0 && <p className="widget-message">Please add an option to get started</p>}
      {
        /*To do a simple paragraph, we'd do this
        this.props.options.map((option) =>  <p key={option}>{option}</p>)
        */
        /*We still need to provide a key as it's an array*/
        props.options.map((option, index) =>
          <Option
            key={index + 1}
            optionText={option}
            optionNum={index + 1}
            handleDeleteOption={props.handleDeleteOption}
          />)
      }

    </div>
)

export default Options