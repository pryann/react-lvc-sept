import { useState } from 'react'

function InputField(props) {
  const { handleInput } = props

  const { value, setValue } = useState('')

  function handleChange(event) {
    const newValue = event.target.value
    setValue(newValue)
    handleInput(newValue)
  }

  return <input type="text" placeholder="Type here..." value={value} onChange={handleChange} />
}

export default InputField
