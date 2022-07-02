//Chapter 8 - JSX

import React, { createElement } from "react";

// Option 1: Using JSX
// const Hello = () => {

//     return  (
//         <div>
//             <h1> Chapter 8 - JSX </h1>
//         </div>

//     )
// }


// Option 2: Using React
const Hello = () => {

    return React.createElement('div', {id:'hello', className:'DummyClass'}, 
            React.createElement('h1', null, 'Chapter 8 - JSX')
            )
}

export default Hello 