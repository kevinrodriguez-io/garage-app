import { combineReducers } from '@reduxjs/toolkit'
import { garageReducer } from './garage'
import { themeReducer } from './theme'

const rootReducer = combineReducers({
  garageReducer,
  themeReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
