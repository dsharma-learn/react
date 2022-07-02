// Chapter 9 - Props - With Class Components

import React, { Component } from "react";


class WelcomeUser extends Component {
    
    render() {
        return <h1>Chapter 09 - Props with Class Component - {this.props.name} AKA  {this.props.heroName} </h1>
    }

}

export default WelcomeUser 