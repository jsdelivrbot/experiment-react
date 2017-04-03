import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC6oAQfQ74JKv-D3NQvuBlXL9gjiMq5SqA';

// Create a new component. Produce some HTML
const App = function() {
  
  return (
    <div>
      <SearchBar />
    </div>
  );

}

// Take the component and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));