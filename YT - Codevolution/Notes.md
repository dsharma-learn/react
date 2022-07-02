[Tutorial from CodeEvolution Channel at Youtube](https://www.youtube.com/watch?v=QFaFIcGhPoM&ab_channel=Codevolution)

Notes: 
- Use ES7 React/Redux/GraphQL/React-N Extension


***Table of Contents***
- [Chapter 1 - About React](#chapter-1---about-react)
- [Chapter 2 - Hello World](#chapter-2---hello-world)
- [Chapter 3 - Folder Struture](#chapter-3---folder-struture)
- [Chapter 4 - Components](#chapter-4---components)
- [Chapter 5 - Functional Components](#chapter-5---functional-components)
- [Chapter 6 - Class Components ](#chapter-6---class-components-)
- [Chapter 7 - Hooks Update](#chapter-7---hooks-update)
- [Chapter 8 - JSX](#chapter-8---jsx)
- [Chapter 9 - Props](#chapter-9---props)
- [Chapter 10 - State](#chapter-10---state)
- [Chapter 11 - setState](#chapter-11---setstate)
- [Chapter 12 - Desctructing props and State](#chapter-12---desctructing-props-and-state)
- [Chapter 13 - Event Handling](#chapter-13---event-handling)
- [Chapter 14 - Binding Event Handlers](#chapter-14---binding-event-handlers)




## [Chapter 1 - About React](https://www.youtube.com/watch?v=QFaFIcGhPoM&)
    - Developed at Facebook
    - Its an Open Source library and not Framework 
    - Component based Architecture. 
    - Components of React are reusable across Angular and Vue
    - React is Declarative and Not Imperative (Algorithmic)
    - **Mobile** Application: React Native can be used for developing Native Mobile applications using React
   

## [Chapter 2 - Hello World](https://www.youtube.com/watch?v=9hb_0TZ_MVI)
- Prerequisites: 
  - NodeJS (along with npm)
  - VS Code 
  
- **Option 1:** Create Application Using npx:
    ```
      $ npx create-react-app 02-hello_world
      $ cd 02-hello_world
      $ npm start

    ```

- **Option 2:** Create Application Using npm:
    ```
      $ npm install create-react-app -g
      $ create-react-app 02-hello_world
      $ cd 02-hello_world
      $ npm start

    ``` 


## [Chapter 3 - Folder Struture](https://www.youtube.com/watch?v=9VIiLJL0H4Y)
- Files & Folders: 
  - project Root: 
    - package.json - Dependencies
      - a separate json for yarn will be here if using yarn for package management
    - public - 
      - manifest.json - for PWAs 
      - index.html - this is what we need to focus on.
        -  is the one that gets served. --> contains the Root DOM Node
        -  React will control the UI. 
        -  there is one div with id root - this is what react takes control of 
   -  src 
      -  index.js - Has the root ())app component) and DOM element that will be controlled by React)
      -  App.js - App Component - REsponsible for HTML - represents the view we see in browser
      -  App.css and App.test.js --> for App Styling and testing
      -  index.css -> for styling of body tag.
      -  serviceWorker.js - for PWA
   
  - node_modules - Dependecies are install in this 
- Alternate Package Manager (beside npm) - yarn
- 


## [Chapter 4 - Components](https://www.youtube.com/watch?v=Y2hgEGPzTZY)

- Root Components is usually named as App Components
- Components are reusable. Can be used with different properties. E.g. Sidenav could be left or right. 
- How component translated to code: 
  - Component is usually plaed in JS file e.g. App.js (also possible to use jsx)
- Components Types:
  - Stateless Functional Components 
  - Stateful Class Components 
    - Classes Extending Component Class
    - Must implement render () method. 
- 


## [Chapter 5 - Functional Components](https://www.youtube.com/watch?v=Cla1WwguArA) 

- Functional Components - These are javascript functions that also recived props (properties as input)
- Returns the HTML (actually JSX)

```
  Properties (Props)   ==>>>   Javascript Function (Functional component)  ==>>> Returns HTML (JSX)
```
  
- There are two ways of writing the functions:
  - Standard Javascript way
  - Arrow function way => 


- export options: 
  - Default Export --> Can be imported with any name 
  - Named Export --> Has to be imported with same name as the Function



## [Chapter 6 - Class Components ](https://www.youtube.com/watch?v=lnV34uLEzis)

- ES6 classes - Can include Classes

```
  Properties (Props)   ==>>>   ES6 Class ( + State)  ==>>> Returns HTML (JSX)
```

- When to use class vs functional Components? 
- Use as much as possible. If possible to create a component with both approach, try Functional

| Functional Components              | Class Components                 | 
| ---------------------------------- | -------------------------------- | 
| No this keyword required           |                                  |
| stateless components               | Possibly Stateful. Maintain own privat data                |
| Simple testing and maintenance     | Complexity in state maintenancee |
| Mainly for UI                      |                                  |
| Dumb/Presentational Components     | Stateful/Smart/ Container                                 |
|                                    | More feature Rich                |
|                                    | Complex UI logic                |
|                                    | PRovide Lifecycle Hooks                |




## [Chapter 7 - Hooks Update](https://www.youtube.com/watch?v=oecI26cWqzk)

- in Version 16.7.0-alpha a new feature has been introduced
- in 2018 hooks were introduced that lets you use state without creating a class. 
- Similar to lifecycle hooks that were availabe in classes earlier
- Hooks - Backword compatible. 


## [Chapter 8 - JSX](https://www.youtube.com/watch?v=7fPXI_MnBOY)

- JSX
  -  Javascript XML -> Extesion to JavaScript
  -  Allow creating XML like code for elements an components
  -  JSX tags have tag name, attributes and children 
  -  Not mandatory to create REact
  -  But helps in making code simple and elegant. 
  -  Transpiles to JavaSCript understood to browsers
-  JSX Differences from regular HTML:
   -  Class --> className
   -  for -> htmlFor
   -  CamelCase property naming 
      -  onclick = onClick
      -  tabindex = tabIndex 
      -  

## [Chapter 9 - Props](https://www.youtube.com/watch?v=m7OWXtbiXX8) 

- to Pass parameters to a component use Props 
- props.propname can be accessed using {} 
- if there are multiple elements, they should be incuded in a single element like div
- props.children will render anything between tag
- Using props with Class component will be a bit different
  - props are immutable. Can't be changed. They could only be used in the render() as readonly.
  - Question: IF props are mutable, how to maintain data? Answer - State


## [Chapter 10 - State](https://www.youtube.com/watch?v=4ORZ1GmjaMc)

- Props vs States

| Props                            | State                             |
| -------------------------------- |  -------------------------------- | 
| Passed to a component            | Managed within a Component        |
| Function Paramters               | Variables declared in function body|
| Immutable. Cant be changed       | Can be changed                    |
| access via props/this.props      | useState hook and this.stat       |

- Use Constructor to initalize the state
- State is just a private object that is maintained in a calls to manage state 


## [Chapter 11 - setState](https://www.youtube.com/watch?v=uirRaVjRsf4)





## Chapter 12 - Desctructing props and State 



## Chapter 13 - Event Handling 



## Chapter 14 - Binding Event Handlers



