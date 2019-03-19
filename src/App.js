import React from 'react';
import CardList from './components/card/CardList';

class App extends React.Component {
   render() {
      return (
         <div className='tc'>
            <h1>RoboFriends</h1>
            <CardList />
         </div>
      );
   }
}
export default App;
