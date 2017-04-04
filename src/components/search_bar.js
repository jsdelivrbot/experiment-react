import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = { term: '' };
  }  

  handleChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchBar;