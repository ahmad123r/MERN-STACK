import React, { Component } from 'react'

class PersonCard extends Component {
    render() {
        const {firstname,lastname,age,hairColor}=this.props;
        return (
            <div >
                <h1> {firstname}, {lastname} </h1>
                <p>age: {age}</p>
                <p> hair color:{hairColor}</p>
            </div>
        )
    }
}

export default PersonCard
