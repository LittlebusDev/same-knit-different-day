import { useState, useEffect } from 'react'
// import { addPattern } from '../apis/'
import { useNavigate } from 'react-router-dom'
import { Pattern } from '../../models/patterns.ts'

// const initialPatternData: Pattern = {
//   id: 12,
//   name: '',
//   year: 1900,
//   image: '',
//   hobby: '',
// }

// const PostPattern: React.FC = () => {
//   const [formData, setFormData] = useState<Pattern>(initialPatternData)
//   const navigate = useNavigate()

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     const data = {
//       name: formData.name,
//       year: formData.year,
//       image: formData.image,
//       hobby: formData.hobby,
//     }
//     await addPattern(data)
//   }

//   const afterPosting = () => {
//     setFormData({ ...initialPatternData })
//     navigate('/patterns')
//   }

//   return (
//     <>
//       <h3>Add Pattern</h3>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="body">Body:</label>
//           <input
//             type="text"
//             id="body"
//             name="body"
//             value={formData.body}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   )
// }

// export default PatternForm
