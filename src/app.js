class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: ['Cheese']
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleSelectedOption = this.handleSelectedOption.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
    }
    handleDeleteOptions() {
        console.log('Setting options to empty')
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handleSelectedOption() {
        console.log('Selecting an option randomly')
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        console.log('Random Num:', randomNum)
        alert(this.state.options[randomNum])
    }

    // Do not mutate the original arrays
    // Do not add the same item twice or you'll get a key error
    handleAddOption(option) {
        console.log('Option: ', option)
        this.setState((prevState) => {
            if (!option) {
                console.log('No option')
                return 'No option'
            }
            if (prevState.options.includes(option)) {
                console.log('Duplicate option')
                return 'Duplicate option'
            }
            return {
                options: prevState.options.concat(option)
            }
        })
    }
    render() {
        /* Note that this main component renders the Header, Action, Options and AddOptions components, but they cannot
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
                />
                <AddOptions
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

class Header extends React.Component{

    //we must provide a render() method when inheriting from React.Component
    render() {
        return (
            /*Header has been called with 2 args, these become props*/
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )

    }
}
class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleSelectedOption} disabled={!this.props.hasOptions}>What should I do?</button>
            </div>
        )
    }
}
class Options extends React.Component {
    render() {
        return (
            <div>
                <p>The options component</p>
                <button onClick={this.props.handleRemove}>Remove all options?</button>
                {
                    /*To do a simple paragraph, we'd do this
                    this.props.options.map((option) =>  <p key={option}>{option}</p>)
                    */
                    /*We still need to provide a key as it's an array*/
                    this.props.options.map((option) =>  <Option key={option} optionText={option}/>)
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.optionText}</h3>
            </div>
        )
    }
}

class AddOptions extends React.Component {
    constructor(props) {
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.state = {
            error: undefined
        }
    }
    onFormSubmit(e) {
        console.log('Forms submitted')
        e.preventDefault();  // stop the whole form from refreshing
        const newOption = e.target.elements.option.value.trim();
        this.setState(() => {
            return { error: this.props.handleAddOption(newOption) }
        })
    }

    render() {
        // buttons are submit buttons by default
        return (
            <div>
                <div>{this.state.error && <p>this.state.error</p>}</div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}

// What we want to render and where do we want it displayed
 ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))