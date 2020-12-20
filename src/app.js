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
    render() {
        return (
            <div>
                <button>What should I do?</button>
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
    render() {
        return (
            <div>
                <p>The options component</p>
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
    render() {
        return (
            <div>
                <p>The addOptions component</p>
            </div>
        )
    }
}

//brackets are conventional but not required
const jsx = (
    <div>
        {/*All we need to provide is the name of the component*/}

    </div>
)

// What we want to render and where do we want it displayed
 ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))