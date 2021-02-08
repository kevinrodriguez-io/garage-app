import styled from '@emotion/native'

export const AppBar = styled.View(
  {
    padding: 10,
    zIndex: 1,
    elevation: 15,
    shadowOpacity: 0.8,
    shadowColor: '#000',
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 0 },
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.primary,
    color: theme.colors.text,
    ...theme.shadows.default,
  }),
)
