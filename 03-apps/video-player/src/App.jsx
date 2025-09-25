import { useEffect, useState } from 'react'
import { defaultParams, youtubeApi } from './apis/youtubeApi'
import Searchbar from './components/SearchBar'

function App() {
  const [videos, setVideos] = useState([])
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

  // useEffect(() => {
  //   searchVideos()
  // }, [])

  return (
    <>
      <header>
        <div className="container">
          <Searchbar onSearch={searchVideos} />
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">Video placeholder</div>
            <div className="col-lg-4">Video list placeholder</div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
