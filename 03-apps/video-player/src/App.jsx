import { useEffect } from 'react'
import { defaultParams, youtubeApi } from './apis/youtubeApi'

function App() {
  async function serachVideos(query = 'Reactjs') {
    const response = await youtubeApi.get('/search', {
      params: {
        ...defaultParams,
        q: query,
      },
    })
    console.log(response.data.items)
  }

  useEffect(() => {
    serachVideos()
  }, [])

  return (
    <>
      <header>
        <div className="container">Searchbar placeholder</div>
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
