import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const currencyApi = createApi({
  reducerPath: 'currency/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://openexchangerates.org/api/',
  }),
  endpoints: (build) => ({
    searchCurrency: build.query({
      query: () => ({
        url: 'latest.json',
        params: {
          app_id: process.env.REACT_APP_SECRET_KEY,
        },
      }),
    }),
  }),
})

export const { useSearchCurrencyQuery } = currencyApi
