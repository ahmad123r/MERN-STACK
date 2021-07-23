import React from 'react'
 
const show =props=> {
    const {firstName,lastName,email,password,confirmpassword}=props.data;
    return (
        <div>
            <h1>Result</h1>
            <p>firstName :{firstName }</p>
            <p>lastName :{ lastName }</p>
            <p>email :{ email }</p>
            <p>password :{ password }</p>
            <p>confirmpassword :{ confirmpassword }</p>
        </div>
    )
}

export default show
