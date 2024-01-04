import logo from './logo.svg';
import './App.css';
// import Navbar from './Navbar';
import {Heading, Paragraph, Body} from './components/Heading'
import Counter from './components/Counter'
import FunctionCounter from './components/FunctionCounter';
import HooksDemo from './components/Hooks';
import ApiCalling from './components/ApiCalling';

function App() {
  return (
    
    <div className="App"> 
       <h1> Hello World!</h1>
      
      <Heading title={"hello"} />
      <Paragraph title={"My name is shubhank"}/>
      <Paragraph title= {"Now I am working"}/>
      <Body title = {"All Well"}></Body>
      {/* <Counter/>
      <FunctionCounter/> */}
      <HooksDemo/>
      <ApiCalling/>

    </div>
  );
}


export default App;
