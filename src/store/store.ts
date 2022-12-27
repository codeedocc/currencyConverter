import { currencySlice } from './currency/currency.slice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  currency: currencySlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
