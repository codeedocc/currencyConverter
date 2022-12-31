import React from 'react'

const defaultCurrencies = ['RUB', 'USD', 'EUR', 'CNY']

interface IBlock {
  currency: string | number
  onChangeCurrency: (cur: string) => void
  value: number
  onChangeValue: (val: any) => void
}

export const Block = ({
  currency,
  onChangeCurrency,
  value,
  onChangeValue,
}: IBlock) => {
  return (
    <div className="block">
      <ul className="currencies">
        {defaultCurrencies.map((cur) => (
          <li
            className={currency === cur ? 'active' : ''}
            key={cur}
            onClick={() => onChangeCurrency(cur)}
          >
            {cur}
          </li>
        ))}
      </ul>
      <input
        type="number"
        placeholder="0"
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </div>
  )
}
