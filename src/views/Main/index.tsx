import { FC } from 'react'
import { Switch, SwitchProps, View } from 'react-native'
import { useTheme } from '@emotion/react'
import styled from '@emotion/native'

import { AppBar } from 'components/AppBar'
import { RegularText, TitleText } from 'components/Text'
import { Row } from 'components/Row'
import { Button } from 'components/Button'
import { ContainerCard } from 'components/ContainerCard'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from 'reducers/theme'
import { useWindowWidth } from 'hooks/useWindowWidth'
import { toggleFirstGarage, toggleSecondGarage } from 'reducers/garage'

export const Main: FC = () => {
  const dispatch = useDispatch()
  const colorScheme = useSelector((s) => s.themeReducer.colorScheme)
  const { firstGarageOpen, secondGarageOpen } = useSelector(
    (s) => s.garageReducer,
  )
  const width = useWindowWidth()
  return (
    <>
      <AppBar>
        <Row>
          <TitleContainer>
            <TitleText>Garage Controller</TitleText>
          </TitleContainer>
          <SwitchContainer>
            <RegularText>{colorScheme === 'light' ? '☀️' : '🌙'}</RegularText>
            <ThemeSwitch
              onValueChange={() => dispatch(toggleTheme())}
              value={colorScheme === 'light'}
            />
          </SwitchContainer>
        </Row>
      </AppBar>
      <Contents>
        <GarageRow>
          <ButtonsContainer screenWidth={width}>
            <ContainerCard variant="PURPLE">
              <RegularText>
                Garage #1 ({firstGarageOpen ? 'Open' : 'Closed'})
              </RegularText>
            </ContainerCard>
            <View style={{ margin: 10 }} />
            <ContainerCard variant="YELLOW">
              <RegularText>
                Garage #2 ({secondGarageOpen ? 'Open' : 'Closed'})
              </RegularText>
            </ContainerCard>
          </ButtonsContainer>
        </GarageRow>
        <View style={{ margin: 40 }} />
        <CenterAlign>
          <ButtonsContainer screenWidth={width}>
            <Button onPress={() => dispatch(toggleFirstGarage())}>
              {firstGarageOpen ? 'Close' : 'Open'} Garage #1
            </Button>
            <View style={{ margin: 10 }} />
            <Button onPress={() => dispatch(toggleSecondGarage())}>
              {secondGarageOpen ? 'Close' : 'Open'} Garage #2
            </Button>
          </ButtonsContainer>
        </CenterAlign>
      </Contents>
    </>
  )
}

const Contents = styled.View(
  {
    flex: 1,
  },
  ({ theme }) => ({ backgroundColor: theme.colors.background }),
)

const ThemeSwitch: FC<SwitchProps> = (props) => {
  const { colors } = useTheme()
  return (
    <Switch
      thumbColor={colors.lightModeColor}
      // @ts-ignore
      trackColor={colors.lightModeColor}
      // @ts-ignore
      activeThumbColor={colors.darkModeColor}
      activeTrackColor={colors.darkModeColor}
      {...props}
    />
  )
}

const SwitchContainer = styled.View({
  width: 50,
  alignItems: 'center',
  justifyContent: 'center',
})

const GarageRow = styled.View({
  flexDirection: 'row',
  marginTop: 15,
  justifyContent: 'center',
  
})

const TitleContainer = styled.View({
  flex: 1,
  justifyContent: 'center',
  paddingLeft: 20,
})

const CenterAlign = styled.View({
  alignItems: 'center',
})

const ButtonsContainer = styled.View<{ screenWidth: number }>(
  {
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  ({ screenWidth }) => ({
    flexDirection: screenWidth > 520 ? 'row' : 'column',
  }),
)
