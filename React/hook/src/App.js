
import React , { useState} from 'react';
import './App.css';
import Big1 from './components/hook1';
import Show12 from './components/show';


const App = () => {
  const [state, setState] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmpassword:""


  });
  return (
    
    <div className="App">
    <Big1 inputs={state} setinputs={setState}/>
<Show12  data={state} />
 



  </div>
  );
}

export default App;
