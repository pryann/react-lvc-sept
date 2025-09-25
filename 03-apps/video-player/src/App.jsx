import { useEffect, useState } from 'react'
import { defaultParams, youtubeApi } from './apis/youtubeApi'
import Searchbar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetails from './components/VideoDetails'

function App() {
  const [videos, setVideos] = useState(null)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  async function searchVideos(query = 'Reactjs') {
    try {
      const response = await youtubeApi.get('/search', {
        params: {
          ...defaultParams,
          q: query,
        },
      })

      if (response.status !== 200) {
        throw new Error('Network error!')
      }

      const { items } = response.data

      if (items?.length !== 0) {
        setVideos(items)
        setSelectedVideo(items[0])
      }
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  useEffect(() => {
    searchVideos()
  }, [])

  return (
    <>
      <header>
        <div className="container">
          <Searchbar onSearch={searchVideos} />
        </div>
      </header>
      <main>
        {videos && (
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <VideoDetails video={selectedVideo} />
              </div>
              <div className="col-lg-4">
                <VideoList videos={videos} onSelectVideo={setSelectedVideo} />
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  )
}

export default App
