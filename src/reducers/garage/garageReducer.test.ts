import { garageReducer, toggleFirstGarage, toggleSecondGarage } from '.'

describe('garage reducer', () => {
  it('should return the initial state', () => {
    expect(garageReducer(undefined, {} as any)).toEqual({
      firstGarageOpen: false,
      secondGarageOpen: false,
    })
  })

  it('should turn on the first garage', () => {
    expect(garageReducer(undefined, toggleFirstGarage())).toEqual({
      firstGarageOpen: true,
      secondGarageOpen: false,
    })
  })

  it('should turn off the first garage', () => {
    expect(
      garageReducer(
        {
          firstGarageOpen: true,
          secondGarageOpen: false,
        },
        toggleFirstGarage(),
      ),
    ).toEqual({
      firstGarageOpen: false,
      secondGarageOpen: false,
    })
  })

  it('should turn on the second garage', () => {
    expect(garageReducer(undefined, toggleSecondGarage())).toEqual({
      firstGarageOpen: false,
      secondGarageOpen: true,
    })
  })

  it('should turn off the second garage', () => {
    expect(
      garageReducer(
        {
          firstGarageOpen: false,
          secondGarageOpen: true,
        },
        toggleSecondGarage(),
      ),
    ).toEqual({
      firstGarageOpen: false,
      secondGarageOpen: false,
    })
  })
})
