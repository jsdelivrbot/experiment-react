import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyC6oAQfQ74JKv-D3NQvuBlXL9gjiMq5SqA';

// Create a new component. Produce some HTML
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      // this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <div className="row">
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take the component and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));