import React from 'react';

const Scroll = props => {
   return (
      <div
         style={{
            overflow: 'scroll',
            borderTop: '2px solid black',
            height: '500px'
         }}
      >
         {props.children}
      </div>
   );
};
export default Scroll;
