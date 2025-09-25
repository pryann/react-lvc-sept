import { useState } from 'react'

function Searchbar({ onSearch }) {
  const [query, setQuery] = useState('')

  function handleChange(event) {
    setQuery(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSearch(query)
  }

  return (
    <form className="form my-3" onSubmit={handleSubmit}>
      <div className="form-group d-flex justify-content-center">
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search..."
          className="form-control form-control-lg w-75"
          value={query}
          onChange={handleChange}
        />
      </div>
    </form>
  )
}

export default Searchbar
