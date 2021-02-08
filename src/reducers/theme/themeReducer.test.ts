import { setToDark, setToLight, themeReducer, toggleTheme } from '.'

describe('theme reducer', () => {
  it('should return the initial state', () => {
    expect(themeReducer(undefined, {} as any)).toEqual({
      colorScheme: 'light',
    })
  })

  it('should toggle from light to dark correctly', () => {
    expect(themeReducer({ colorScheme: 'light' }, toggleTheme())).toEqual({
      colorScheme: 'dark',
    })
  })

  it('should toggle from dark to light correctly', () => {
    expect(themeReducer({ colorScheme: 'dark' }, toggleTheme())).toEqual({
      colorScheme: 'light',
    })
  })

  it('should always set to light when setToLight is called', () => {
    expect(themeReducer({ colorScheme: 'light' }, setToLight())).toEqual({
      colorScheme: 'light',
    })
    expect(themeReducer({ colorScheme: 'dark' }, setToLight())).toEqual({
      colorScheme: 'light',
    })
  })

  it('should always set to dark when setToDark is called', () => {
    expect(themeReducer({ colorScheme: 'light' }, setToDark())).toEqual({
      colorScheme: 'dark',
    })
    expect(themeReducer({ colorScheme: 'dark' }, setToDark())).toEqual({
      colorScheme: 'dark',
    })
  })

})
