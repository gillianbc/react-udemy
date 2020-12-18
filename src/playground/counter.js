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
renderCounterApp();