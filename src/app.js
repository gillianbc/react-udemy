class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Action/>
                <Options/>
                <AddOptions/>
            </div>
        )
    }
}
class Header extends React.Component{
    //we must provide a render() method when inheriting from React.Component
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer.</h2>
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

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>The options component</p>
                <Option/>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>- The option component</p>
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