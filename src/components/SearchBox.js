import React from 'react';

const SearchBox = ({searchChange}) => {

  return (
    <div>
      <input
        className = 'pa2 ma2 bg-lightest-blue'
        placeholder = 'Search Robots'
        onChange = {searchChange}
        />
    </div>
  );
}

export default SearchBox;
