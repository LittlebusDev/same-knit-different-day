import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import App from './components/App'
import KnittingList from './components/KnittingList'
import SinglePattern from './components/SinglePattern'
import MainPage from './components/MainPage'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<MainPage />} />
    <Route path="/knitting" element={<KnittingList />} />
    <Route path="/knitting/:id" element={<SinglePattern />} />

    {/* <Route path="/knitting/:id" element={<KnittingPattern/>}/> */}
  </Route>
)

export const router = createBrowserRouter(routes)
