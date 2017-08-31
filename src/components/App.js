import React from 'react';
import FruitBasket from './FruitBasket';

class App extends React.Component {
  state = {
    filters: [],
    currentFilter: 'all',
    fruit: []
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruits = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  componentWillMount(){
    this.fetchFilters()
    this.fetchFruits()
  }

  render(){
    return(
      <FruitBasket
        updateFilterCallback={this.handleFilterChange}
        currentFilter={this.state.currentFilter}
        filters={this.state.filters}
        fruits={this.state.fruit}
      />
    )
  }

}

export default App;
