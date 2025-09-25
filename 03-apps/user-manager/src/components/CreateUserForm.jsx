import React from 'react'
import { useState } from 'react'

export default function CreateUserForm() {
  const initialState = {
    firstName: '',
    lastName: '',
    emailAddress: '',
  }

  const [newUser, setNewUser] = useState(initialState)

  return (
    <form>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" required minLength="2" value={newUser.firstName} />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" required minLength="2" value={newUser.lastName} />
      </div>
      <div className="form-group">
        <label htmlFor="emailAddress">Email address</label>
        <input type="email" id="emailAddress" name="emailAddress" required value={newUser.emailAddress} />
      </div>
    </form>
  )
}
