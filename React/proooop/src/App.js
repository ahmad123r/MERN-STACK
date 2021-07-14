
import './App.css';
import PersonCard from './componants/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstname={"Doe"} lastname ={"Jane"} age = {45} hairColor={"black"} / >
      <PersonCard firstname= {"Smith"} lastname = {"John"} age = {88} hairColor = {"Brown"} / >
      <PersonCard firstname= {"Fillmore"} lastname = {"Millard"} age = {50} hairColor = {"Brown"} / >
      <PersonCard firstname= {"Smith"} lastname = {"Maria"} age = {62} hairColor = {"Brown"} / >
    </div>
  );
}

export default App;
