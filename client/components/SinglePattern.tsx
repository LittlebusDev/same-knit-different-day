import { useParams } from 'react-router-dom'
import type { Pattern } from '../../models/patterns'

const SinglePattern = () => {
  const { id } = useParams()

  return (
    <div>
      Details for pattern ID: {id}
      <p>Name: </p>
    </div>
  )
}

export default SinglePattern
