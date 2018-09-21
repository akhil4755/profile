import React, { Component } from 'react';
import './App.css';
import {user} from './users';
import Logged from './logged';

const initialstate=
{
      signinusername : '',
      signinpassword : '',
      error: false,
      route : 'login'
}

class App extends Component {

constructor()
{
  super();
  this.state = initialstate; 
}

onUserNameChange = (event) => {
  this.setState({ signinusername : event.target.value })
}

onPasswordChange = (event) => {
  this.setState({ signinpassword : event.target.value })
}

onSubmit = () => {
  for (var i=0;i<=2;i++)
  {
    if(this.state.signinusername === user[i].name && this.state.signinpassword === user[i].password)
      { this.setState({route: 'logged'});  console.log(this.state.route); break; }
     
     this.setState({error: true});    
  }
}
 


  render() {
    let err;
    if(this.state.error)
    {
       err = "Check username and password";
    }
    if(this.state.route==='login')
    {
          return (
          
          <div>
             <p> {err} </p>
              <h2> Login </h2>
              Username : <input type='text' name='Username' onChange={this.onUserNameChange} />  <br/> <br/>
              Password :  <input type='Password' name='Password' onChange={this.onPasswordChange} />  <br/>
              <input type='Submit' value='Login' onClick={this.onSubmit} /> <br/>
             
              <a href=''> New User ? </a>

          </div>
          );
    }
    if(this.state.route==='logged')
    {
        return(
            <Logged />
          );
    }
  }
}

export default App;
