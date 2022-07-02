import React, { Component } from "react";

// Step 1: Create a state object and initialize using constructor calling super()
// Step 2: Bind the state value in render function (similar to Props)
// Step 3: Add HTML for button Element 
// Step 4: Add event/onClick
class Message extends Component {

    constructor () {
        super()
        this.state = {
            message: 'Chapter 10 - State - Welcome Visitor'
        }
    }

    changeMessage () {
        this.setState({
            message: 'Chapter 10 - State - Thanks for Subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>

        )
    }

}


export default Message