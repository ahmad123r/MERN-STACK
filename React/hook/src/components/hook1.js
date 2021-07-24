import React, { useState } from  'react';

    
const UserForm = props => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [firstNameError, setfirstNameError] = useState("");
    const [lastNameError, setlastNameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [passwordError, setpasswordError] = useState("");
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmpassword, setconfirmpassword] = useState(""); 
    
    const createUser = (e) => {
        e.preventDefault();
        setfirstName('');
        const newUser = { firstName,lastName, email, password ,confirmpassword};
       
        console.log("Welcome", newUser);
        
    };
    /***************************************************************************** VALIDTION */
      const handlefirstName = (e) => {
        setfirstName(e.target.value);
        if(e.target.value.length < 1) {
            setfirstNameError("Title is required!");
        } else if(e.target.value.length < 3) {
            setfirstNameError("Title must be 3 characters or longer!");
        }
        else{
            setfirstNameError("");
        }
    }

    const handlelastName = (e) => {
        setlastName(e.target.value);
        if(e.target.value.length < 1) {
            setlastNameError("Title is required!");
        } else if(e.target.value.length < 3) {
            setlastNameError("Title must be 3 characters or longer!");
        }
        else{
            setlastNameError("");
        }
    }


    const handleemail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setemailError("Title is required!");
        } else if(e.target.value.length < 3) {
        setemailError("Title must be 3 characters or longer!");
        }
        else{
            setemailError("");
        }
    }

    const handlepassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setpasswordError("Title is required!");
        } else if(e.target.value.length < 3) {
        setpasswordError("Title must be 3 characters or longer!");
        }
        else{
            setpasswordError("");
        }
    }
    
  /****************************************************************************END OF VALIDATION */
    
     return(
        <form onSubmit={ createUser }>
            <div>
                <label>firstName: </label> 
                <input type="text" value={firstName}  onChange={ (e) => handlefirstName(e) } />
                <p>{firstNameError}</p>
            </div>
            <div>
                <label>lastName: </label> 
                <input type="text" onChange={ (e) =>handlelastName(e) } />
                <p>{lastNameError}</p>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => handleemail(e) } />
                <p>{emailError}</p>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => handlepassword(e) } />
                <p>{passwordError}</p>
            </div>
            <div>
                <label>confirmpassword: </label> 
                <input type="text" onChange={ (e) => setconfirmpassword(e.target.value) } />
            </div>
            <h1>Your Form Data</h1>
      <p>FirstName: {firstName}</p>
      <p>lastName: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
 <button type="submit" >submit</button>
        </form>
        
       
     );



     

};
    
export default UserForm;