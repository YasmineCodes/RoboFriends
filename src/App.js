import React, { Component } from 'react'; 
import CardList from './CardList';
import { robots } from './robots'; 
import SearchBox from './SearchBox'; 
import './App.css'; 

 

export default class App extends Component { 
    constructor(props) { 
        super(props); 
        this.state = { 
            robots: robots,
            searchfield: ''
        }
    }

    onSearch = (event) => {
        this.setState({ searchfield: event.target.value }); 
    }

    render() { 
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); 
        })
        return (
            <div className='tc'>
                <h1 className='f1'> RoboFriends</h1>
                <SearchBox searchChange={this.onSearch }/>
                <CardList robots={filteredRobots} />
            </div>
        ); 
    }
}

