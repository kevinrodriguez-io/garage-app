import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstGarageOpen: false,
  secondGarageOpen: false,
}

const garage = createSlice({
  name: 'garage',
  initialState,
  reducers: {
    toggleFirstGarage(state) {
      state.firstGarageOpen = !state.firstGarageOpen
    },
    toggleSecondGarage(state) {
      state.secondGarageOpen = !state.secondGarageOpen
    },
  },
})

export const { toggleFirstGarage, toggleSecondGarage } = garage.actions

export const garageReducer = garage.reducer
