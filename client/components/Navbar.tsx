import { Link } from 'react-router-dom'

export default function navBar() {
  return (
    <div className="navbar">
      <div className="left-side">
        <Link to="/">
          <h5>Same Knit Different Day</h5>
        </Link>
      </div>
      <div className="right-side">
        <p>Profile</p>
        <p>Cart</p>
        <p>Favourites</p>
        <p>NZD</p>
      </div>
    </div>
  )
}
