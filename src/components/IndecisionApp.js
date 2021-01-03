import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";

export default class IndecisionApp extends React.Component {
    state = {
        options: []
    }

    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options'))
            // Only use the options saved to localStorage if there are some.
            // Otherwise, let it fallback to using the default we set via
            // IndecisionApp.defaultProps or the args we launched the app with
            if (options.length > 0) {
                this.setState(() => ({options}))
                console.log('Component did mount', options)
            }
        } catch (e) {
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            console.log('Component did update')
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    componentWillUnmount() {
        console.log('Component will unmount')
    }

    handleDeleteOptions = () => {
        console.log('Setting options to empty')
        this.setState(() => ({options: []}))
    }

    handleDeleteOption = (optionToRemove) => {
        console.log('handleDeleteOption: ', optionToRemove)
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }))
    }

    handleSelectedOption = () => {
        console.log('Selecting an option randomly')
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        console.log('Random Num:', randomNum)
        alert(this.state.options[randomNum])
    }

    // Do not mutate the original arrays
    // Do not add the same item twice or you'll get a key error
    handleAddOption = (option) => {
        console.log('Option: ', option)
        if (!option) {
            console.log('No option')
            return 'No option'
        }
        if (this.state.options.includes(option)) {
            console.log('Duplicate option')
            return 'Duplicate option'
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }

    render() {
        /* Note that this main component renders the Header, Action, Options and AddOption components, but they cannot
        update the state of the parent IndecisionApp state directly. The parent can pass state down as props, but this.props
        cannot be passed back to the parent.  We have to pass functions to the subordinate components which they can then
        call to update the state of the parent i.e. the main component IndecisionApp
        * */
        const title = 'The Indecision Application'
        const subtitle = 'Put your life in the hands of a computer.'
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handleSelectedOption={this.handleSelectedOption}
                />
                <Options
                    options={this.state.options}
                    handleRemove={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: ['default']
}