import axios from 'axios'

// DO NOT STORE YOUR API KEY IN A PUBLIC REPO
const key = 'AIzaSyDdgToeZVSJkl4TOr8MXMzo8hxJxjrB4Qc'

export const defaultParams = {
  part: 'snippet',
  maxResults: 12,
  key,
}

export const youtubeApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
})
