import React from 'react'
import { render } from '@testing-library/react'
import { Main } from '.'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from 'reducers'
import { Provider } from 'react-redux'
import { darkTheme } from 'theme'
import { ThemeProvider } from '@emotion/react'

test('Renders "Garage Controller" correctly', () => {
  const { getByText } = render(
    <ThemeProvider theme={darkTheme}>
      <Provider
        store={configureStore({
          reducer: rootReducer,
        })}
      >
        <Main />
      </Provider>
    </ThemeProvider>,
  )
  const headerElement = getByText(/Garage Controller/i)
  expect(headerElement).toBeTruthy()
})
