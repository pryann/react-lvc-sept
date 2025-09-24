function InputField({ label, ...inputAttr }) {
  return (
    <div>
      <label htmlFor={inputAttr.id}>{label}</label>
      <input {...inputAttr} />
    </div>
  )
}

export default InputField
