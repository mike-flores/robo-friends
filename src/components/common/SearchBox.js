import React from 'react';

const SearchBox = props => {
   return (
      <div>
         <input type='search' onChange={props.onSearchChange} />
      </div>
   );
};
export default SearchBox;
