import styled from '@emotion/native'

export const RegularText = styled.Text(({ theme }) => ({
  ...theme.fonts.default,
}))

export const TitleText = styled(RegularText)({
  fontSize: 20,
})
