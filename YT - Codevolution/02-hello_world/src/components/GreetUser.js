// 9 - Props - With Functional Components
import React from 'react'

const GreetUser = props => {
    console.log(props)
    return  <div> 
                <h1> Chapter 09 - Props with Functional Components - {props.name} AKA {props.heroName}</h1>
                {props.children}
            </div> 
}

// Export Option 1 - Default Export
export default GreetUser

 