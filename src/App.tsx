import React, { useState } from 'react'
import { Block } from './components/Block'
import { useAppSelector } from './hooks/redux'
import { useSearchCurrencyQuery } from './store/currency/currency.api'

function App() {
  const [fromCurrency, setFromCurrency] = useState('RUB')
  const [toCurrency, setToCurrency] = useState('USD')
  // const { isError, isLoading, data } = useSearchCurrencyQuery('')

  return (
    <div className="App">
      <Block
        currency={fromCurrency}
        onChangeCurrency={(cur) => setFromCurrency(cur)}
      />
      <Block
        currency={toCurrency}
        onChangeCurrency={(cur) => setToCurrency(cur)}
      />
    </div>
  )
}

export default App
