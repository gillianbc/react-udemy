import React from "react";

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }

    handleAddOption = (e) => {
        console.log('Forms submitted')
        e.preventDefault();  // stop the whole form from refreshing
        const newOption = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(newOption)
        this.setState(() => ({error}))
        // clear the input if all OK
        !error && (e.target.elements.option.value = '')
    }

    render() {
        // buttons are submit buttons by default
        return (
            <div>
                <div>{this.state.error && <p className="add-option-error">{this.state.error}</p>}</div>
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Add option</button>
                </form>
            </div>
        )
    }
}