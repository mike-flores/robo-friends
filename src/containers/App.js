import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/card/CardList';
import SearchBox from '../components/common/SearchBox';
import Scroll from '../components/common/Scroll';
import { setSearchField } from '../actions';
import './App.css';

const mapStateToProps = state => {
   return {
      searchField: state.searchField
   }
}

const mapDispatchToProps = dispatch => {
   return  {
      handleSearchChange : event => dispatch(setSearchField(event.target.value))
   }
}

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         robots: []
      };
   }

   render() {
      const filteredRobots = this.state.robots.filter(robot => {
         return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
      });
      
      if (!this.state.robots.length) {
         return (
            <div className="tc">
               <h1 className="header f1">RoboFriends</h1>
               <h1>Loading...</h1>
            </div>
         );
      } else {
         return (
            <div className="tc">
               <h1 className="header f1">RoboFriends</h1>
               <SearchBox onSearchChange={this.props.handleSearchChange} />
               <Scroll>
                  <CardList robots={filteredRobots} />
               </Scroll>
            </div>
         );
      }
   }

   componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(users =>
            this.setState({ robots: users })
         );
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
