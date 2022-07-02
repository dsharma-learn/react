import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">

      <h1> Chapter 2 - Hello World </h1>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br></br>
            HELLO WORLD!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <h1> Chapter 5 - Functional Components </h1>
      <Greet/>

      <h1> Chapter 6 - Class Components </h1>
      <Welcome/>


    </div>
  ); 
}

export default App;
