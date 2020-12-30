

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handlePlusOne = this.handlePlusOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }
    handlePlusOne() {
        console.log('handlePlusOne')
    }
    handleMinusOne() {
        console.log('handleMinusOne')
    }
    handleReset() {
        console.log('handleReset')
    }
    render() {
        return (
            <div>
                <h1>Count: </h1>
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
