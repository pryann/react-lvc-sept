import React from 'react'
import UsersTable from './components/UsersTable'
import { useEffect } from 'react'
import { getUsers } from './apis/usersApi'
import CreateUserForm from './components/CreateUserForm'

export default function App() {
  // const [users, setUsers] = React.useState(null)
  // BEST, IF OU USE GLOBAL STATE MANAGEMENT
  const [users, setUsers] = React.useState([])

  useEffect(() => {
    // use error handling in real apps
    getUsers().then((data) => setUsers(data))
  }, [])

  return (
    <div className="container">
      <h1 className="bg-primary text-white p-3 mb-5 text-center">User manager</h1>
      <CreateUserForm users={users} setUsers={setUsers} />
      <UsersTable users={users} setUsers={setUsers} />
    </div>
  )
}
