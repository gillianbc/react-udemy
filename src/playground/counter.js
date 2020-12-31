

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handlePlusOne = this.handlePlusOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        // Define the state object and initialise it
        this.state = {
            count: 0
        }
    }
    handlePlusOne() {
        // We must use the setter for React to detect the state change and re-render the component
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
        // There is old style syntax that lets you just pass in an object
        // this.setState({
        //     count: -1
        // })
        // this.setState({
        //     count: this.state.count + 1
        // })
        // So you would expect the count to go to -1 and then 0, but it doesn't
        // That's because setState() is async so the count in incremented before it's set to -1
        // Always use a function for setting state - don't pass in an object as there is a risk of stale values
        // The problem occurs because we accessed this.state.count.  If we don't need to access the previous state, then
        // it is safe to use pass in an object for changing state.
        // If we had done this it would work because the prevstate that is the result of the first state change is
        // passed into the second state change:
        this.setState(() => {
            return {
                count: -1
            }
        })
        this.setState((prevstate) => {
            return {
                count: prevstate.count + 1
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handlePlusOne}>Plus 1</button>
                <button onClick={this.handleMinusOne}>Minus 1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

/*
let count = 10;
const myId = "btn1"

const addOne = () => {
    count++;
    console.log('Added 1', count)
    renderCounterApp();
}
const minusOne = () => {
    count--;
    console.log('Subtracted 1', count)
    renderCounterApp();
}

const reset = () => {
    count = 0;
    console.log('Reset', count)
    renderCounterApp();
}



// Eventually, we'll do this with a React component
const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button id={myId} className="button" onClick={addOne}>Add One</button>
            <button id="btn_one" className="button" onClick={minusOne}>Minus One</button>
            <button id="reset" className="button" onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

// Run the application
renderCounterApp();*/
