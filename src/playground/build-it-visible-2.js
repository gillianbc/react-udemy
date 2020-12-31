"use strict";

console.log('MAIN APP IS RUNNING')

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.toggleDetails = this.toggleDetails.bind(this)
        this.state = {
            visible: false
        }
    }
    render(){
        return (
            <div>
                <button onClick={this.toggleDetails}>{this.state.visible ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visible && <p>{'Here are the details'}</p>}
                {!this.state.visible && <p>{'No details'}</p>}
            </div>
        )
    }
    toggleDetails() {
        this.setState((prevState) => {
            console.log(prevState.visible)
            return {
                visible: !prevState.visible
            }
        })
    }

}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


