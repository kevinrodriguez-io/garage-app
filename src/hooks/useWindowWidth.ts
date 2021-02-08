import { useCallback, useEffect, useState } from 'react'
import { Dimensions, ScaledSize } from 'react-native'

/**
 * This hook returns the current width of the window
 * and reacts to it's resize events, proper for pseudo
 * media query usage on react native components.
 */
export const useWindowWidth = () => {
  const [state, setState] = useState(Dimensions.get('window').width)

  const onDimensionChange = useCallback(
    (state: { window: ScaledSize; screen: ScaledSize }) => {
      setState(state.window.width)
    },
    [setState],
  )

  useEffect(() => {
    Dimensions.addEventListener('change', onDimensionChange)
    return () => Dimensions.removeEventListener('change', onDimensionChange)
  }, [onDimensionChange])

  return state
}
