import { ServerResponce } from './../../model/models'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const currencyApi = createApi({
  reducerPath: 'currency/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.apilayer.com/currency_data/',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchCurrency: build.query<ServerResponce, string>({
      query: () => ({
        url: `live`,
        params: {
          apikey: process.env.REACT_APP_SECRET_KEY,
          source: 'USD',
        },
      }),
    }),
  }),
})

export const { useSearchCurrencyQuery } = currencyApi
