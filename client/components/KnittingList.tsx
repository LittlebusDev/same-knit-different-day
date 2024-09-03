import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { fetchAllKnitting } from '../apis/apiClient'
import type { Pattern } from '../../models/patterns'

export default function KnittingList() {
  const {
    data: knitting,
    error,
    isLoading,
  } = useQuery(['knitting'], fetchAllKnitting)
  console.log(knitting)
  // const queryClient = useQueryClient()

  if (error) {
    return <p>Whoops! Something went wrong!</p>
  }

  if (!knitting || isLoading) {
    return <p>Loading items...</p>
  }

  return (
    <>
      <h2>Knitting</h2>
      <ul>
        {knitting.map((pattern: Pattern) => (
          <li key={pattern.id}>
            <Link to={`/knitting/${pattern.id}`}>
              Pattern name: {pattern.name}, Made in Year: {pattern.year}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
