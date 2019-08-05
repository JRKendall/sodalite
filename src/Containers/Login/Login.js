import React from 'react';
import './Login.css';
import { throwStatement } from '@babel/types';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            message: '',
        }
    }

    login(){
        if(this.state.username == 'Bill' && this.state.password == 'Smith'){
            this.props.history.push("/user");
            alert("Login Successful")
        } else if(this.state.username == '001' && this.state.password == '123'){
            this.props.history.push("/store")
            alert("Login Successful")
        } else{
            this.setState({message: 'Login Failed!'})
        }
    }
    render(){
    
        return(
            <div className="login">
                <div className="jumbotron">
                    <input className="form-control" type="text" placeholder="Username" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
                    <input className="form-control" type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
                    <button className="btn btn-accent text-center"onClick={() => this.login()}>LOGIN</button>
                    <p style={{color: 'red'}}>{this.state.message}</p>
                </div>

            </div>
        )
    }
}

export default Login;