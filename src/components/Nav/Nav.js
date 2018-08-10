import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {getUser, returnToDefault} from '../../redux/reducer'
import axios from 'axios'


class Nav extends Component {
    constructor(props){
        super(props)
    }

handleLogout = () => {
    axios.post('/api/auth/logout').then(response => {
        this.props.returnToDefault();
})}

componentDidMount(){
    axios.get('/api/auth/me/').then(response => {
        this.props.getUser(response.data[0].id, response.data[0].username,response.data[0].profile_pic)
    })
}

render(){

        return(
        <div>
            <Link to="/dashboard"><button>Home</button></Link>
            <Link to="/new"><button>New Post</button></Link>
            <Link to="/"><button onClick ={this.handleLogout}>Logout</button></Link>
            <img src={this.props.profile_pic} alt=""/>
            <p>{this.props.username}</p>
        </div>
    )
}
}



let mapStateToProps = state => {
    return {
        username: state.username,
        profile_pic: state.profile_pic
    }
}

export default connect(mapStateToProps, {getUser, returnToDefault})(Nav);
