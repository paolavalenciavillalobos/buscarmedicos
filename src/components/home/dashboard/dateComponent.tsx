import { useState, useEffect } from 'react'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

export const ActualDay = () => {
  const [date, setDate] = useState('')

  useEffect(() => {
    const date = new Date()

    const dateFormated = format(date, "d 'de' MMMM 'de' y", {
      locale: ptBR
    })

    setDate(dateFormated)
  }, [])

  return (
    <div>
      <p> {date}</p>
    </div>
  )
}
