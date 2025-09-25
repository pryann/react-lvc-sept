import { apiClient } from '../utils/apiClient'

const urlFragment = 'users'

// use error handling in real apps
export async function getUsers() {
  const response = await apiClient.get(urlFragment)
  return response.data
}

export async function removeUser(userId) {
  await apiClient.delete(`${urlFragment}/${userId}`)
}

export async function createUser(user) {
  console.log('user to create:', user)
  const response = await apiClient.post(urlFragment, user)
  return response.data
}
