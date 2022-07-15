// Chapter 12 - Destructuring Props and State - Functional Components
// Option 2 - Destructing in function body

import React from 'react'

// Option 1: Standard way
// function Greet() {
//     return <h1>Hello Deepak</h1>
// }


// Option 2: Arrow Functions Approach
const GreetDestructureFuncBody = props => {

    const {name, heroName} = props
    return (
        <div>
            <h1> Chapter 12 - Destructuring Props and State - Functional Components (OPT2 - Function Body): Hello {name} aka {heroName}</h1>
        </div>
    )
}


// Export Option 1 - Default Export
export default GreetDestructureFuncBody

// Export Option 2 - Named Export
// export const  Greet = () => <h1>Hello Deepak Sharma Ji</h1>

 