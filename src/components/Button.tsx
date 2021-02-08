import styled from '@emotion/native'
import { FC } from 'react'
import { TouchableOpacityProps } from 'react-native'

const BaseButton = styled.TouchableOpacity(
  {
    height: 52,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 60,
  },
  ({ disabled }) => ({
    backgroundColor: disabled
      ? 'rgba(120, 132, 158, 41)'
      : 'rgba(102, 94, 255, 255)',
  }),
)

const ButtonText = styled.Text<{ disabled?: false }>(
  {
    textAlign: 'center',
  },
  ({ theme, disabled }) => ({
    ...theme.fonts.button,
    color: disabled ? 'rgba(69, 79, 99, 255)' : 'rgba(255, 255, 255, 255)',
  }),
)

export const Button: FC<TouchableOpacityProps> = ({ children, ...props }) => {
  return (
    <BaseButton {...props}>
      <ButtonText>{children}</ButtonText>
    </BaseButton>
  )
}
