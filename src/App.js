import React from 'react';
import CardList from './components/card/CardList';
import { robots } from './components/card/robots';
import SearchBox from './components/common/SearchBox';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         robots: robots,
         filteredRobots: robots,
         searchString: ''
      };
   }

   render() {
      return (
         <div className="tc">
            <h1>RoboFriends</h1>
            <SearchBox onSearchChange={this.handleSearchChange} />
            <CardList robots={this.state.filteredRobots} />
         </div>
      );
   }

   handleSearchChange = event => {
      this.setState({ searchString: event.target.value }, () => {
         this.filterRobots();
      });
   };

   filterRobots = () => {
      let filteredRobots = robots.filter(robot => {
         return robot.name.toLowerCase().includes(this.state.searchString.toLowerCase());
      });
      this.setState({ filteredRobots: filteredRobots });
   };
}
export default App;
