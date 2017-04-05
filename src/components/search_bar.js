import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = { term: '' };
  }  

  handleChange(term) {
    this.setState({
      term: term
    });

    this.props.onSearchChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.handleChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;