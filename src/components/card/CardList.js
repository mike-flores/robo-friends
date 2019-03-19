import React from 'react';
import Card from './Card';
import { robots } from './robots';

class CardList extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         robots: robots
      };
   }
   render() {
      return (
         <div>
            {this.state.robots.map(robot => {
               return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />;
            })}
         </div>
      );
   }
   componentDidMount() {
      console.log(this.state.robots);
   }
}
export default CardList;
