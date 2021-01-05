import React, { useState, useEffect} from 'react'; 
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'; 
import Scroll from '../components/Scroll'; 
import ErrorBoundry from '../components/ErrorBoundry'; 
import './App.css'; 

 

function App (){
    const [robots, setRobots] = useState([]); 
    const [searchfield, setSearchfield] = useState(''); 
    const onSearch = (event) => {
        setSearchfield(event.target.value);
    }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                setRobots(users);
            });
    }, []); 
   
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase()); 
    })
    return (!robots.length) ? <h1 className='tc'>Loading...</h1> : (
            <div className='tc'>
                <h1 className='f1'> RoboFriends</h1>
                <SearchBox searchChange={onSearch} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        ); 

}

export default App; 
