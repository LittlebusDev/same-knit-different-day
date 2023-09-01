import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import MainPage from './MainPage'

function App() {
  return (
    <>
      <Navbar />
      {/* <MainPage /> */}
      <Outlet />
    </>
  )
}

export default App
