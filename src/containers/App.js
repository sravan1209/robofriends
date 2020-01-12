import React, {Component} from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry.js'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      robots: [],
      SearchField : ''
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(users => this.setState({robots:users}))
  }

  onSearchChange = (event) => {
    this.setState({SearchField : event.target.value})
  }


  render() {
    const { robots, SearchField } = this.state;
    const filteredRobots = robots.filter(robot=>{
      return robot.name.toLowerCase().includes(SearchField.toLowerCase())
    })

    if (!robots.length) {
      return (
        <div> Loading </div>
      );
    } else {
      return (
        <div className='tc'>
          <h1 className='f2'>ROBOFRIENDS</h1>
          <SearchBox searchChange = {this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
  }

}
export default App;
