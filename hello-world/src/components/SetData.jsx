import React from 'react'
import { useState } from 'react' //altera estados no HTML (DOM) 

const SetData = () => {

    const [numero, setNumber] = useState(1)

    function soma() {
        setNumber(numero + 1)
    }

    function diminuirNumero() {
        if (setNumber == 1) {
            numero = 1   
        } else {
            setNumber
        }
    }

  return (
    <div>
        <h1>{numero}</h1>
        <button onClick={diminuirNumero}>-</button>
        <input 
            type="number"
            value={numero}
            onChange={(e) => setNumber(Math.floor(e.target.value))} 
        />
        <button onClick={soma}>+</button>
    </div>
  )
}

export default SetData