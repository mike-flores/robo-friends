import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/card/CardList';
import SearchBox from '../components/common/SearchBox';
import Scroll from '../components/common/Scroll';
import { setSearchField, getRobots } from '../actions';
import './App.css';

const mapStateToProps = state => {
   return {
      searchField: state.searchRobots.searchField,
      robots: state.getRobots.robots,
      isPending: state.getRobots.isPending,
      error: state.getRobots.error
   };
};

const mapDispatchToProps = dispatch => {
   return {
      handleSearchChange: event => dispatch(setSearchField(event.target.value)),
      handleGetRobots: () => dispatch(getRobots())
   };
};

class App extends React.Component {
   render() {
      const filteredRobots = this.props.robots.filter(robot => {
         return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
      });

      if (!this.props.robots.length) {
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
      this.props.handleGetRobots();
   }
}
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(App);
