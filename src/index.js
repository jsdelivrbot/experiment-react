import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC6oAQfQ74JKv-D3NQvuBlXL9gjiMq5SqA';

// Create a new component. Produce some HTML
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSelect = this.videoSelect.bind(this);

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  videoSelect(selectedVideo) {
    console.log(selectedVideo);
    this.setState({ selectedVideo });
  }

  render() {
    return (
      <div className="container">
        <header className="row">
          <SearchBar />
        </header>
        <section className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.videoSelect}
          />
        </section>
      </div>
    );
  }
}

// Take the component and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.root'));