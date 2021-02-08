import { FC } from 'react'
import { ThemeProvider } from '@emotion/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useSelector } from 'react-redux'

import { lightTheme, darkTheme } from 'theme'
import rootReducer from 'reducers'
import { Main } from 'views/Main'

const store = configureStore({
  reducer: rootReducer,
})

const InnerApp: FC = () => {
  const colorScheme = useSelector((s) => s.themeReducer.colorScheme)
  return (
    <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
      <Main />
    </ThemeProvider>
  )
}

export const App: FC = () => {
  return (
    <Provider store={store}>
      <InnerApp />
    </Provider>
  )
}
