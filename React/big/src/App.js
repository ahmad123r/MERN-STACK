import React from 'react';
import './App.css';
import Big1 from './compnents/big1';

const App = () => {
  return (
    <div className="App">
    <Big1 firstname={"Doe"} lastname ={"Jane"} age = {45} hairColor={"black"} />


    <Big1 firstname= {"Smith"} lastname = {"John"} age = {88} hairColor = {"Brown"} />
    <Big1 firstname= {"Fillmore"} lastname = {"Millard"} age = {50} hairColor = {"Brown"} />
    <Big1 firstname= {"Smith"} lastname = {"Maria"} age = {62} hairColor = {"Brown"} />
  </div>
  );
}

export default App;
