import carsReducer from './carsReducer'

const initialState = {
  infoTable: [
    {
      family: 'Иванов',
      name: 'Иван',
      patronymic: 'Иванович',
      position: 'Инспектор',
      telephoneNumber: '55-77-66',
      roomNumber: 110,
      company: 'Розыск',
    },
    {
      family: 'Смирнова',
      name: 'Евгения',
      patronymic: 'Семеновна',
      position: 'Начальник',
      telephoneNumber: '22-11-33',
      roomNumber: 132,
      company: 'ИАЗ',
    },
    {
      family: 'Козлов',
      name: 'Иван',
      patronymic: 'Степанович',
      position: 'Старший инспектор',
      telephoneNumber: '55-77-66',
      roomNumber: 14,
      company: 'Дознание',
    },
  ],
}

const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
export default infoReducer
