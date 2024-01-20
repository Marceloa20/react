import React from 'react'

const MeuPrimeiroComponente = () => {

    function click() {
        console.log("Clicou")
    }

  return (
    <div>
        <div>MeuPrimeiroComponente</div>
        <button onClick={click}>Clique aqui</button>
    </div>
  )
}

export default MeuPrimeiroComponente