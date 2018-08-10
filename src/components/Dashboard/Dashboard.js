import React, { Component } from 'react';

export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            search:"",
            list:"",
            posts: []
        }

        this.handleSearchChange = this.handleSearchChange.bind(this)
    }

    handleSearchChange(e){
        this.setState({
            search: e.target.value
        })
    }
    render(){s
        return (
        <div>
            <input type="text" placeholder="search" value={this.state.search} onChange={this.handleSearchChange}/>
            <button>Search</button>
            <button>Reset</button>
            <div>
            </div>
        </div>
        )
    }
}