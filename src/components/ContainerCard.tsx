import styled from '@emotion/native'
import { ViewProps } from 'react-native'

export type ContainerCardVariant = 'PRIMARY' | 'YELLOW' | 'PURPLE'

const getColorForContainerCardVariant = (variant: ContainerCardVariant) => {
  switch (variant) {
    case 'PRIMARY':
      return 'rgba(102, 94, 255, 255)'
    case 'YELLOW':
      return '#FFB157'
    case 'PURPLE':
      return '#9E34FD'
    default:
      throw new Error('Unknown variant')
  }
}

export type ContainerCardProps = ViewProps & {
  variant: ContainerCardVariant
}

export const ContainerCard = styled.View<ContainerCardProps>(
  ({ variant, theme }) => ({
    padding: 14,
    borderRadius: 12,
    height: 200,
    width: 200,
    backgroundColor: getColorForContainerCardVariant(variant),
    ...theme.shadows.default,
  }),
)
