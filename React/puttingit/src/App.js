import React,{Component} from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

class App extends Component{
  render(){ 
  return (
    <div className="App">
      <PersonCard firstname={"Doe"} lastname ={"Jane"} age = {45} hairColor={"black"} / >

      <PersonCard firstname= {"Smith"} lastname = {"John"} age = {88} hairColor = {"Brown"} / >

     
    </div>
  );}
}

export default App;