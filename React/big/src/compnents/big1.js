import React from 'react'

const big1 = (props) => {
    return (
    
               <div >
                <h1> {props.firstname}, {props.lastname} </h1>
                <p>age: {props.age}</p>
                <p> hair color:{props.hairColor}</p>
                
            </div>
            
        
    )
}

export default big1
