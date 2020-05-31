
const initialState = {
  cars: [
    {
      carMake: 'Лада',
      model: 'Веста',
      carNumber: {
        prefix: 'A',
        serialNumber: '3411',
        cityNumber: '63'
      },
      company: 1,
    },
    {
      carMake: 'Лада',
      model: 'Веста',
      carNumber: {
        prefix: 'A',
        serialNumber: '3455',
        cityNumber: '63'
      },
      company: 2,
    },
    {
      carMake: 'Лада',
      model: 'Веста',
      carNumber: {
        prefix: 'A',
        serialNumber: '3422',
        cityNumber: '63'
      },
      company: 3,
    },
  ],
}

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
export default carsReducer
