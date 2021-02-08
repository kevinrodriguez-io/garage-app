import { FC } from 'react'
import { ThemeProvider } from '@emotion/react'
import { View, useColorScheme } from 'react-native'

import { lightTheme, darkTheme } from 'theme'
import { RegularText } from './Text'

export const App: FC = () => {
  const colorScheme = useColorScheme()
  return (
    <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
      <View>
        <RegularText>Aliqua nisi Lorem proident adipisicing nisi laborum duis.</RegularText>
      </View>
    </ThemeProvider>
  )
}
