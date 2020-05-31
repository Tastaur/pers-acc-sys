const initialState = {
  people: [
    {
      family: 'Иванов',
      name: 'Иван',
      patronymic: 'Иванович',
      birthDate: {
        year: 1991,
        month: 'Май',
        day: 10,
      },
      personalId: '114455',
      personalNum: '63-5555',
      position: 'Инспектор ДПС',
      rank: 'лейтенант полиции',
      isSupervisor: false,
      company: {
        rota : 1,
        vzvod: 1,
      },
    },
    {
      family: 'Петров',
      name: 'Петр',
      patronymic: 'Петрович',
      birthDate: {
        year: 1994,
        month: 'Август',
        day: 13,
      },
      personalId: '336655',
      personalNum: '63-1111',
      position: 'Инспектор ДПС',
      rank: 'лейтенант полиции',
      isSupervisor: false,
      company: {
        rota : 2,
        vzvod: 2,
      },    },
    {
      family: 'Ильин',
      name: 'Илья',
      patronymic: 'Ильич',
      birthDate: {
        year: 1992,
        month: 'Январь',
        day: 22,
      },
      personalId: '554477',
      personalNum: '63-6355',
      position: 'Инспектор ДПС',
      rank: 'старший лейтенант полиции',
      isSupervisor: false,
      company: {
        rota : 3,
        vzvod: 2,
      },    },
    {
      family: 'Сергеев',
      name: 'Сергей',
      patronymic: 'Сергеевич',
      birthDate: {
        year: 1992,
        month: 'Январь',
        day: 22,
      },
      personalId: '554487',
      personalNum: '63-6355',
      position: 'Инспектор ДПС',
      rank: 'старший лейтенант полиции',
      isSupervisor: false,
      company: {
        rota : 1,
        vzvod: 2,
      },    },
    {
      family: 'Петрова',
      name: 'Марина',
      patronymic: 'Владимировна',
      birthDate: {
        year: 1989,
        month: 'Декабрь',
        day: 12,
      },
      personalId: '966544',
      personalNum: '63-6355',
      position: 'Инспектор ИАЗ',
      rank: 'капитан полиции',
      isSupervisor: false,
      company: {
        rota : 'ИАЗ',
        vzvod: 'Дознание  ',
      },
    },
  ],
}

const personalReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default personalReducer
