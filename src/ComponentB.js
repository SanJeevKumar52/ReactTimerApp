import React from "react";

class ComponentB extends React.Component{
    constructor(){
        super();

        this.state ={
            name:"ComponentB",
            data:[]
        }
        console.log("ComponentB constructor")

    }
    
    static getDerivedStateFromProps(){
        console.log("ComponentB getDerivedStateFromProps ");
        return null;
    }

    /* https://jsonplaceholder.typicode.com/users */

    componentDidMount(){
        console.log("ComponentB componentDidMount ");
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data =>this.setState({data}))

    }

    render(){
        console.log("ComponentB render")
        console.log(this.state.data);
        return(
            <>
            <h2>{this.state.name}</h2>
            <ul>
                {this.state.data.map((d)=>{
                    return(<li>{d.username}</li>)
                })}
            </ul>

           
            </>
            
        );
    }
}

export default ComponentB;
