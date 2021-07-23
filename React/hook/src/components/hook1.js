import React, { useState } from  'react';

    
const UserForm = props => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmpassword, setconfirmpassword] = useState(""); 
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName,lastName, email, password ,confirmpassword};
        console.log("Welcome", newUser);
        
    };
  
    
     return(
        <form onSubmit={ createUser }>
            <div>
                <label>firstName: </label> 
                <input type="text" onChange={ (e) => setfirstName(e.target.value) } />
            </div>
            <div>
                <label>lastName: </label> 
                <input type="text" onChange={ (e) => setlastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>confirmpassword: </label> 
                <input type="password" onChange={ (e) => setconfirmpassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        
       
     );



     

};
    
export default UserForm;