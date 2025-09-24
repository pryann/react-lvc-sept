import { useState } from 'react'
import InputField from './InputField'

function UserForm() {
  // firstname min 2 chars
  // lastname min 2 chars
  // email must be valid email format, use minimal regex

  const initialState = {
    firstName: '',
    lastName: '',
    emailAddress: '',
  }

  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState('')

  // MINIMAL VALIDATION
  function isValidForm() {
    setErrors('')

    const formErrors = []

    if (formData.firstName.trim().length < 2) {
      formErrors.push('First name must be at least 2 characters long')
    }

    if (formData.lastName.trim().length < 2) {
      formErrors.push('Last name must be at least 2 characters long')
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.emailAddress)) {
      formErrors.push('Please enter a valid email address')
    }

    setErrors(formErrors.join(', '))

    return !formErrors.length > 0
  }

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // first validate data
  // if not valid, show error messag
  function submitForm(event) {
    event.preventDefault()
    if (!isValidForm()) return
    console.log(JSON.stringify(formData))
    setFormData(initialState)
  }

  return (
    <form onSubmit={submitForm}>
      <InputField
        label="First Name:"
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <InputField
        label="Last Name:"
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <InputField
        label="Email Address:"
        type="email"
        id="emailAddress"
        name="emailAddress"
        value={formData.emailAddress}
        onChange={handleChange}
      />
      {errors && <div className="error">{errors}</div>}
      <button type="submit">Submit</button>
    </form>
  )
}

export default UserForm
