import { Colors } from '@kevinrodriguez-io/pigment-core'
import { Platform, TextStyle } from 'react-native'

export type Theme = typeof lightTheme

const defaultFont: TextStyle = {
  fontSize: 16,
  ...Platform.select({
    web: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: '400',
    },
    native: {
      fontFamily: 'Poppins_400Regular', // Just in case we try to move to React-Native with Expo-Google-Fonts
    },
  }),
}

export const lightTheme = {
  colors: {
    primary: Colors.flatBlue.light,
    background: Colors.flatWhite.dark,
    text: Colors.flatBlack.dark,
  },
  fonts: {
    default: defaultFont,
  },
}

export const darkTheme: Theme = {
  colors: {
    primary: Colors.flatNavyBlue.dark,
    background: Colors.flatBlack.dark,
    text: Colors.flatWhite.light,
  },
  fonts: {
    default: defaultFont,
  },
}
