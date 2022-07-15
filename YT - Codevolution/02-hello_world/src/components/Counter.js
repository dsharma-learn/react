// Chapter 11 - setState 
import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0 
        }
    }

    increment() {
        
        // Option 1: Dont use this as changes would not reflect on UI as react wouldnt rerender the  component. 
        // directly setting the state will work only in constructor.

        // this.state.count = this.state.count +1

        // Option 2: Dont access the state directly. Always use set
        // this.setState({
        //     count: this.state.count+1
        // }, () => {
        //     console.log('Callback value (Async)', this.state.count)
        // }

        // Option 3: Instead pass in the function
        this.setState( (prevState, props) => ({
            count: prevState.count+1
//            count: prevState.count+ props.addValue
        }), 
        () => {
            console.log('Callback value (Async)', this.state.count)
        })

        console.log('Direct value (sync)', this.state.count)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
        <div> Count - {this.state.count} 
            <button onClick={() => this.incrementFive()}> 
                Increment Counter
            </button>
        </div>
        )
    }
}

export default Counter