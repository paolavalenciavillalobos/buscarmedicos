import { GetSpecialties, UpdateSpecialties } from '@/config/specialities'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const EditSpecialties = () => {
  const { id } = useParams()

  const [name, setName] = useState('')
  const [enabled, setEnabled] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetSpecialties(id)

        if (response) {
          setName(response.name)
          setEnabled(response.enabled)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
        setIsError(true)
      }
    }

    fetchData()
  }, [id])

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await UpdateSpecialties(id, { name, enabled })
    } catch (error) {
      console.error('Error updating data:', error)
    }
  }

  if (isError) {
    return <p>Error loading data.</p>
  }

  return (
    <div>
      <h3>Edit Specialtie</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="enabled">Enabled:</label>
          <input
            type="checkbox"
            id="enabled"
            checked={enabled}
            onChange={e => setEnabled(e.target.checked)}
          />
        </div>
        <div>
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  )
}
