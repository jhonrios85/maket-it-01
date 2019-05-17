import React from 'react'

//Here is the way to create a component like a class
/*
Class Components
Components with states
Smart Components
Containers
---
This components always has a render function that should return something
- You can extends form React.Component if the import is (import React from 'react')
- You can extends form Component if the import is (import React,{Component} from 'react')
*/
class AppClass extends React.Component{
    //Each time that you modify the state
    state={
        valor:1,
        input:'',
        name:'',
        fullName:''
    }

    //With destructuring I can recieve {target} for only get the target object of the 'event'
    handler=(event)=>{
        //Get the 'name' property o the object that execute the event 
        const key=event.target.name;

        //Get the value of the input
        const value=event.target.value;

        /*this senteces modify one property of the 'state' object or 'this.state.name'
        this.setState({name:event.target.value})*/
        this.setState({[key]:value});
    }

    saveUser=(event)=>{
        event.preventDefault()

        const {name}=this.state;
        
        this.setState({fullName:name})
    }
        //This render will execute always that I change any property of the object 'state'
        render(){
        return (<div><form onSumit={this.saveUser}>I'm a Smart component and the value of my state is {this.state.valor}
                       <br/>This is a prop {this.props.name}
                       <br/>
                       Enter Any Text to try this event handler <input type="text" onChange={this.handler} name="name"/>
                       <br/>
                       {this.state.name}
                       <br/>
                       <button type="submit">Send</button>
                       </form>

        </div>);
    }
}

export default AppClass