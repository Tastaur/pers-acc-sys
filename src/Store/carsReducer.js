const SET_CAR_INFO = 'cars/SET_CAR_INFO'

const initialState = {
  cars: [
    {
      carMake: 'Лада',
      model: 'Веста',
      carNumber: {
        prefix: 'A',
        serialNumber: '3411',
        cityNumber: '63',
      },
      company: 1,
    },
    {
      carMake: 'Шкода',
      model: 'Октавия',
      carNumber: {
        prefix: 'A',
        serialNumber: '3455',
        cityNumber: '63',
      },
      company: 2,
    },
    {
      carMake: 'Лада',
      model: 'Гранта',
      carNumber: {
        prefix: 'A',
        serialNumber: '3422',
        cityNumber: '63',
      },
      company: 3,
    },
  ],
  carInfo: [{
    carMake: 'Лада',
    model: 'Веста',
    carNumber: {
      prefix: 'A',
      serialNumber: '3422',
      cityNumber: '63',
    },
    company: 3,
  }],
}

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAR_INFO: {
      return {
        state,
        carInfo: state.cars.filter(c=> c.carNumber.serialNumber===action.serialNumber),
        }
    }
    default:
      return state
  }
}
export const setCarInfo = (serialNumber) => ({type: SET_CAR_INFO, serialNumber})

export default carsReducer
