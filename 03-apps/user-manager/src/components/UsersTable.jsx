import React from 'react'
import { removeUser } from '../apis/usersApi'

export default function UsersTable({ users, setUsers }) {
  async function handleDeleteClick(userId) {
    // NEVER EVER DO THIS IN REAL APPS : window.confirm !!!
    const confirmDelete = window.confirm('Are you sure you want to delete this user?')
    if (confirmDelete) {
      await removeUser(userId)
      setUsers(users.filter((user) => user.id !== userId))
    }
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.emailAddress}</td>
            <td>
              <button type="button" className="btn btn-danger" onClick={() => handleDeleteClick(user.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
