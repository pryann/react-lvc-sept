import { useEffect, useState } from 'react'
import MainNavigation from './components/MainNavigation'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import InputField from './components/InputField'

function App() {
  // const title = 'Main Navigation'
  const [title, setTitle] = useState('Main Navigation')

  function handleInput(value) {
    console.log('Input changed to:', value)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTitle('React App')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <SiteHeader />
      <MainNavigation title={title} />
      <main>
        <InputField handleInput={handleInput} />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
