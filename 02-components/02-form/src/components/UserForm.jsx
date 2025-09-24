import { useState } from 'react'
import InputField from './InputField'

function UserForm() {
  const initialState = {
    firstName: '',
    lastName: '',
    emailAddress: '',
  }

  const [formData, setFormData] = useState(initialState)

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <form>
      <InputField
        label="First Name:"
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        handleChange={handleChange}
      />
    </form>
  )
}

export default UserForm
