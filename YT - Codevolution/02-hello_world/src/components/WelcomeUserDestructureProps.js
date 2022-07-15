//Chapter 12 - Destructuing Props and State

import React, { Component } from "react";


class WelcomeUserDestructureProps extends Component {
    
    render() {
        const {name, heroName} = this.props
        // const {state1, state2} = this.state
        return <h1>Chapter 12 - Destructuing Props and State - Class - {name} AKA  {heroName} </h1>
    }

}

export default WelcomeUserDestructureProps 