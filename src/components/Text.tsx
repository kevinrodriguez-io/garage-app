import styled from '@emotion/native'

export const RegularText = styled.Text(({ theme }) => ({
  ...theme.fonts.default,
  color: theme.colors.text,
}))

export const TitleText = styled(RegularText)({
  fontSize: 30,
  fontWeight: '600',
})
