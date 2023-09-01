//import data and map over to display hobby.name in h3 for button label.
//make a path to go to `/${hobby.name}`

import { Link } from 'react-router-dom'

export default function HobbyBtn() {
  return (
    <div className="hobby-btn">
      <Link to="/knitting">
        <h3>Knitting</h3>
      </Link>
    </div>
  )
}
