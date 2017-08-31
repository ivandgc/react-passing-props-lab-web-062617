import React from 'react';

const FilteredFruitList = props => {
  const list = (props.filter === 'all' || !props.filter) ? props.fruit : props.fruit.filter(i => i.fruit_type === props.filter);
  return (
    <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  );
}

export default FilteredFruitList;

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: 'all'
}
