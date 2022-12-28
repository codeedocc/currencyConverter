import React, { useState } from 'react'
import { Block } from './components/Block'
import { useActions } from './hooks/actions'
import { useAppSelector } from './hooks/redux'
import { useSearchCurrencyQuery } from './store/currency/currency.api'

function App() {
  const [fromCurrency, setFromCurrency] = useState('RUB')
  const [toCurrency, setToCurrency] = useState('USD')
  // const { isError, isLoading, data } = useSearchCurrencyQuery('')

  const { fromPrice, toPrice } = useAppSelector((state) => state.currency)
  const { setFromPrice, setToPrice } = useActions()

  const onChangeFromPrice = (val: number | string) => {
    setFromPrice(val)
  }

  const onChangeToPrice = (val: number | string) => {
    setToPrice(val)
  }

  return (
    <div className="App">
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={(cur) => setFromCurrency(cur)}
        onChangeValue={onChangeFromPrice}
      />
      <Block
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={(cur) => setToCurrency(cur)}
        onChangeValue={onChangeToPrice}
      />
    </div>
  )
}

export default App
