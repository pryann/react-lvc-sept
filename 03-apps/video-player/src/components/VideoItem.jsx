function VideoItem({ video, onSelectVideo }) {
  // Can create a wrapper function
  return (
    <div
      role="button"
      tabIndex="0"
      className="container"
      onClick={() => onSelectVideo(video)}
      onKeyUp={(e) => e.key === 'Enter' && onSelectVideo(video)}>
      <div className="row mb-2">
        <div className="col-6">
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="img-fluid" />
        </div>
        <div className="col-6">
          <h3 className="h6">{video.snippet.title}</h3>
        </div>
      </div>
    </div>
  )
}

export default VideoItem
