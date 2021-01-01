/*
* Single component application
*
* Constructor sets the application state - just a single property - count
* Methods to change the count
* render() to display the count
* */

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handlePlusOne = this.handlePlusOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        // Define the state object and initialise it
        this.state = {
            count: props.count
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

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter count={-1}/>, document.getElementById('app'));

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
