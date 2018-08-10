import React, { Component } from 'react';
import axios from 'axios'
// import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {getUser} from '../../redux/reducer';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state={
            username: "",
            password: ""
        }

        this.handleUsernameInput = this.handleUsernameInput.bind(this)
        this.handlePasswordInput = this.handlePasswordInput.bind(this)
        this.handleRegisterClick = this.handleRegisterClick.bind(this)
        this.handleLoginClick = this.handleLoginClick.bind(this)

    }


    handleUsernameInput(e) {
        this.setState({
            username: e.target.value
        })
    }

    handlePasswordInput(e){
        this.setState({
            password: e.target.value
        })
    }

    handleRegisterClick() {
        let username = this.state.username;
        let password = this.state.password;
        let obj = {username, password}
        axios.post('/api/user', obj).then(response => {

            this.props.getUser(response.data[0].id, response.data[0].username,response.data[0].profile_pic)
            this.props.history.push("/dashboard")

        })
    }

    handleLoginClick() {
        let username = this.state.username;
        let password = this.state.password;
        let obj = {username, password}
        axios.post('/api/login', obj).then(response => {
            this.props.getUser(response.data[0].id, response.data[0].username,response.data[0].profile_pic)
            this.props.history.push("/dashboard")
        })
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="username" value={this.state.username} onChange={this.handleUsernameInput}/>
                <input type="text" placeholder="password" value={this.state.password} onChange={this.handlePasswordInput}/>
                <button className="buttons" onClick={this.handleLoginClick}>Log In</button>
                <button className="buttons" onClick={this.handleRegisterClick}>Register</button>
            </div>
        )
    }
}

export default connect(null, {getUser})(Auth)