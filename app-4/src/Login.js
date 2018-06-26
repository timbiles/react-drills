import React, {Component} from 'react';
import './App.css';

class Login extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: ''
        }

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(val){
        this.setState({username:val})
    }

    handleChange2(val){
        this.setState({password:val})
    }

    handleLogin(){
        alert(`Username: ${this.state.username} Password ${this.state.password}`);
    }

    render(){
        return(
            <div>
                <input
                    type='text'
                    placeholder='Username'
                    onChange={e => this.handleChange(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='Password'
                    onChange={e => this.handleChange2(e.target.value)}
                />
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}


export default Login;