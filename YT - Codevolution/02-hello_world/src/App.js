import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import GreetUser from './components/GreetUser';
import WelcomeUser from './components/WelcomeUser';
import Message from './components/Message';
import Counter from './components/Counter';
import GreetDestructureEg from './components/GreetDestructureEg';
import GreetDestructureFuncBody from './components/GreetDestructureFuncBody';
import WelcomeUserDestructureProps from './components/WelcomeUserDestructureProps';
import FunctionalClick from './components/FunctionalClick';


function App() {
  return (
    <div className="App">

      <h1> Chapter 2 - Hello World </h1>

      {/* <h1> Chapter 5 - Functional Components </h1> */}
      <Greet/>

      {/* <h1> Chapter 6 - Class Components </h1> */}
      <Welcome/>

      {/* <h1> Chapter 8 - JSX </h1> */}
      <Hello/>

      {/* <h1> Chapter 9 - Props with Functional Components </h1> */}
      <GreetUser name="Bruce" heroName="Batman"> THis is a test element </GreetUser>
      <GreetUser name="Clark" heroName="Superman">
        <button>Action</button>
      </GreetUser>
      <GreetUser name="Diana" heroName="Wonder Woman"/>


      {/* <h1> Chapter 9 - Props with Class Components</h1> */}
      <WelcomeUser name="Bruce" heroName="Batman"> THis is a test element </WelcomeUser>
      <WelcomeUser name="Clark" heroName="Superman">
        <button>Action</button>
      </WelcomeUser>
      <WelcomeUser name="Diana" heroName="Wonder Woman"/>


      {/* <h1> Chapter 10 - State </h1> */}
      <Message> </Message>
      
      {/* <h1> Chapter 11 - setState </h1> */}
      <Counter></Counter>

      {/* <h1> Chapter 12 - Destructuring Props and state (functions)</h1> */}
      <GreetDestructureEg name="Diana" heroName="Wonder Woman"></GreetDestructureEg>
      
      {/* <h1> Chapter 12 - Destructuring Props and state (functions)</h1> */}
      <GreetDestructureFuncBody name="Diana" heroName="Wonder Woman"></GreetDestructureFuncBody>
      
      {/* <h1> Chapter 12 - Destructuring Props and state (Class) </h1> */}
      <WelcomeUserDestructureProps name="Bruce" heroName="Batman"> THis is a test element </WelcomeUserDestructureProps>

      <FunctionalClick></FunctionalClick>

    </div>
  ); 
}

export default App;
