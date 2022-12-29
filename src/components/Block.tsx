import React from 'react'

const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GBP']

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
        <li>
          <svg height="50px" viewBox="0 0 50 50" width="50px">
            <rect fill="none" height="50" width="50" />
            <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
          </svg>
        </li>
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
