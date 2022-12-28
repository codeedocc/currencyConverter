import { currencyApi } from './currency/currency.api'
import { currencySlice } from './currency/currency.slice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  [currencyApi.reducerPath]: currencyApi.reducer,
  currency: currencySlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(currencyApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
