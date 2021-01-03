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
                <div>{this.state.error && <p>{this.state.error}</p>}</div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}