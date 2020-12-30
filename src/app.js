class IndecisionApp extends React.Component {
    render() {
        const title = 'The Indecision Application'
        const subtitle = 'Put your life in the hands of a computer.'
        const options = ['apple', 'pear', 'banana']
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOptions/>
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
    handlePick() {
        console.log('handlePick was called')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}
function displayOptionsArray() {
    return (option) => {
        return <li key={option}>Option: {option}</li>
    };
}

class Options extends React.Component {
    /*
    The bog standard constructor is:
    constructor(props) {
        super(props);
    }
     */
    constructor(props) {
        super(props);
        // Ensure that handleRemove is always bound to the Options instance even when called from other functions
        // and thus has access to the props
        this.handleRemove = this.handleRemove.bind(this)
    }
    handleRemove() {
        console.log('handleRemove was called')
        console.log(this.props.options)  // will not work unless bound.  We have constructed the Options instance with a property of
        // options.  The property is accessible in render as it is simply a property of the Options instance on which
        // render() has been called.  However, it's the onClick event of render() that is calling handleRemove() and 'this'
        // is not bound.  See the binding-this.js for more examples.
        // We could just bind it to the instance of Options like so and it would work:
        // <button onClick={this.handleRemove.bind(this)}>Remove all options?</button>
        // but better to use the constructor
    }
    render() {
        return (
            <div>
                <p>The options component</p>
                <button onClick={this.handleRemove}>Remove all options?</button>
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
    onFormSubmit(e) {
        console.log('Forms submitted')
        console.log('---',e.target.elements.option.value,'---')
        e.preventDefault();  // stop the whole form from refreshing
        const newOption = e.target.elements.option.value.trim();
        console.log('---',newOption,'---')
        if (newOption) {
            console.log('New option to add ', newOption)
        }
    }

    render() {
        return (
            <div>
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