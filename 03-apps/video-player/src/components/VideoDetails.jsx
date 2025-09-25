import React from 'react'

export default function VideoDetails({ video }) {
  const baseSrc = 'https://www.youtube.com/embed'
  const videoSrc = video.id.videoId
    ? `${baseSrc}/${video.id.videoId}`
    : `${baseSrc}/videoseries?list=${video.id.playlistId}`

  return (
    <div className="video-details">
      <div className="ratio ratio-16x9">
        <iframe src={videoSrc} sandbox="allow-same-origin allow-scripts allow-presentation" />
      </div>
      <div className="mt-3">
        <h2 className="h4">{video.snippet.title}</h2>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}
