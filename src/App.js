import React from 'react';
import CardList from './components/card/CardList';
import { robots } from './components/card/robots'

class App extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         robots: robots
      }
   }

   render() {
      return (
         <div className='tc'>
            <h1>RoboFriends</h1>
            <CardList robots={this.state.robots} />
         </div>
      );
   }
}
export default App;
