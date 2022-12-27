import React from 'react'
import { Block } from './components/Block'
import { useAppSelector } from './hooks/redux'

function App() {
  const { currency } = useAppSelector((state) => state.currency)

  return (
    <div className="App">
      <h1>Мой currency: {currency}</h1>
      <Block />
    </div>
  )
}

export default App
