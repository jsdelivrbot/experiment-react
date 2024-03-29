import React from 'react';

function VideoListItem({video, onVideoSelect}) {
  //{video} is the same as a variable with props.video
  //{onVideoSelect} is the same as a variable with props.onVideoSelect

  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;

  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem