function InputField({ label, type, id, name, value, handleChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} value={value} onChange={handleChange} />
    </div>
  )
}

export default InputField
