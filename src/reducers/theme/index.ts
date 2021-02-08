import { createSlice } from '@reduxjs/toolkit'
import { Appearance } from 'react-native'

const initialState = {
  colorScheme: Appearance.getColorScheme() ?? 'light',
}

const theme = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.colorScheme = state.colorScheme === 'dark' ? 'light' : 'dark'
    },
    setToDark(state) {
      state.colorScheme = 'dark'
    },
    setToLight(state) {
      state.colorScheme = 'light'
    },
  },
})

export const { toggleTheme, setToDark, setToLight } = theme.actions

export const themeReducer = theme.reducer
