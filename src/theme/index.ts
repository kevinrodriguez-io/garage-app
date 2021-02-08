import { Colors } from '@kevinrodriguez-io/pigment-core'
import { Platform, ShadowStyleIOS, TextStyle } from 'react-native'

export type Theme = typeof lightTheme

const defaultFont: TextStyle = {
  fontSize: 16,
  ...Platform.select({
    web: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: '500',
    },
    native: {
      fontFamily: 'Poppins_500Medium', // Just in case we try to move to React-Native with Expo-Google-Fonts
    },
  }),
}

const buttonFont: TextStyle = {
  fontSize: 14,
  ...Platform.select({
    web: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: '500',
    },
    native: {
      fontFamily: 'Poppins_500Medium',
    },
  }),
}

const defaultShadow: ShadowStyleIOS = {
  shadowOpacity: 0.8,
  shadowColor: '#000',
  shadowRadius: 15,
  shadowOffset: { width: 0, height: 0 },
}

const darkModeColor = Colors.flatPurple.dark
const lightModeColor = Colors.flatYellow.light

export const lightTheme = {
  colors: {
    primary: '#8f8bda',
    background: Colors.flatWhite.light,
    text: Colors.flatBlack.dark,
    darkModeColor,
    lightModeColor,
  },
  fonts: {
    default: defaultFont,
    button: buttonFont,
  },
  shadows: {
    default: defaultShadow,
  },
}

export const darkTheme: Theme = {
  colors: {
    primary: '#232064',
    background: '#171543',
    text: Colors.flatWhite.light,
    darkModeColor,
    lightModeColor,
  },
  fonts: {
    default: defaultFont,
    button: buttonFont,
  },
  shadows: {
    default: defaultShadow,
  },
}
