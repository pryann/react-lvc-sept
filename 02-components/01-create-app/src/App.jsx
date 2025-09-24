import { useEffect, useState } from 'react'
import MainNavigation from './components/MainNavigation'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'

function App() {
  // const title = 'Main Navigation'
  const [title, setTitle] = useState('Main Navigation')

  useEffect(() => {
    const timer = setTimeout(() => {
      setTitle('React App')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <SiteHeader />
      <MainNavigation />
      <SiteFooter />
    </>
  )
}

export default App
