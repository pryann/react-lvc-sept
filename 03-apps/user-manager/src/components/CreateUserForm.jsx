import React from 'react'
import { useState } from 'react'
import { createUser } from '../apis/usersApi'

export default function CreateUserForm({ users, setUsers }) {
  const initialState = {
    firstName: '',
    lastName: '',
    emailAddress: '',
  }

  const [newUser, setNewUser] = useState(initialState)

  function handleChange(event) {
    const { name, value } = event.target
    setNewUser((prev) => ({ ...prev, [name]: value }))
  }

  // BACKEND SHOULD GENERATE IDS
  function generateUserId() {
    const userIds = users.map((user) => parseInt(user.id))
    const maxId = Math.max(...userIds)
    const newId = maxId + 1
    return String(newId)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()
    try {
      const userToCreate = { ...newUser, id: generateUserId() }
      const response = await createUser(userToCreate)
      setUsers((prev) => [response, ...prev])
      setNewUser(initialState)
    } catch (error) {
      // DO NOT DO THIS IN REAL APPS
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleFormSubmit} className="mb-5">
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          className="form-control"
          type="text"
          id="firstName"
          name="firstName"
          required
          minLength="2"
          value={newUser.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          className="form-control"
          type="text"
          id="lastName"
          name="lastName"
          required
          minLength="2"
          value={newUser.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="emailAddress">Email address</label>
        <input
          className="form-control"
          type="email"
          id="emailAddress"
          name="emailAddress"
          required
          value={newUser.emailAddress}
          onChange={handleChange}
        />
      </div>
      <div className="form-group mt-3">
        <button type="submit" className="btn btn-primary">
          Save User
        </button>
      </div>
    </form>
  )
}
