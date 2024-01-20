import React, { useState } from 'react'

const Lista = () => {

    const [meses] = useState([
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ])

  return (
    <div>
        <select>
            {
                meses.map((item, i) => (
                <option key={i}>{item}</option>
                ))
            }
        </select>
    </div>
  )
}

export default Lista