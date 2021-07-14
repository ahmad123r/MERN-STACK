import React from 'react'

class PersonCard extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            age: this.props.age
        }

    }
     increase =() =>{
         this.setState({age : this.state.age+1})
     }
    render() {
        const {firstname,lastname,hairColor}=this.props;
        return (
            <div >
                <h1> {firstname}, {lastname} </h1>
                <p>age: {this.state.age}</p>
                <p> hair color:{hairColor}</p>
                <button onClick= {this.increase} >brithday button for {firstname}, {lastname}</button>
            </div>
        )
    }
}

export default PersonCard