function VideoList({ videos }) {
  return (
    <>
      {videos.map((video) => (
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={video.snippet.thumbnails.meduim.url} alt={video.snippet.title} />
            </div>
            <div className="col-6">
              <h3>{video.snippet.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default VideoList
