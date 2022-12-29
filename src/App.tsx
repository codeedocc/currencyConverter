import React, { useEffect, useState } from 'react'
import { Block } from './components/Block'
import { useActions } from './hooks/actions'
import { useAppSelector } from './hooks/redux'
import { useSearchCurrencyQuery } from './store/currency/currency.api'

function App() {
  const [fromCurrency, setFromCurrency] = useState('RUB')
  const [toCurrency, setToCurrency] = useState('USD')
  const { fromPrice, toPrice } = useAppSelector((state) => state.currency)
  const { setFromPrice, setToPrice } = useActions()
  const { data } = useSearchCurrencyQuery('')

  const onChangeFromPrice = (val: any) => {
    const price = val / data?.rates[fromCurrency]
    const result = price * data?.rates[toCurrency]
    setToPrice(result.toFixed(2))
    setFromPrice(val)
  }

  const onChangeToPrice = (val: any) => {
    const result = (data?.rates[fromCurrency] / data?.rates[toCurrency]) * val
    setFromPrice(result.toFixed(2))
    setToPrice(val)
  }

  useEffect(() => {
    onChangeFromPrice(fromPrice)
  }, [fromCurrency])

  useEffect(() => {
    onChangeToPrice(toPrice)
  }, [toCurrency])

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
