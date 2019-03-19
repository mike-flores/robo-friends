import React from 'react';
import CardList from '../components/card/CardList';
import SearchBox from '../components/common/SearchBox';
import Scroll from '../components/common/Scroll';
import './App.css';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         robots: [],
         filteredRobots: [],
         searchString: ''
      };
   }

   render() {
      if (!this.state.robots.length) {
         return (
            <div className='tc'>
               <h1 className="header f1">RoboFriends</h1>
               <h1>Loading...</h1>
            </div>
         );
      } else {
         return (
            <div className="tc">
               <h1 className="header f1">RoboFriends</h1>
               <SearchBox onSearchChange={this.handleSearchChange} />
               <Scroll>
                  <CardList robots={this.state.filteredRobots} />
               </Scroll>
               
            </div>
         );
      }
   }
   componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(users => this.setState({ robots: users, filteredRobots: users }));
   }

   handleSearchChange = event => {
      this.setState({ searchString: event.target.value }, () => {
         this.filterRobots();
      });
   };

   filterRobots = () => {
      let filteredRobots = this.state.robots.filter(robot => {
         return robot.name.toLowerCase().includes(this.state.searchString.toLowerCase());
      });
      this.setState({ filteredRobots: filteredRobots });
   };
}
export default App;
