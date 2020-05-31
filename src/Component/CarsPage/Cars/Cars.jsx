import React from 'react'
import s from './Car.module.css'
import Car from './Car'

const Cars = (props) => {

  let allCar = props.carsPage.filter(m=>props.rota===m.company).map(m => <Car serialNumber={m.carNumber.serialNumber}
                                            model={m.model}
                                            company={m.company}
                                            key={m.carNumber.serialNumber}
                                            prefix={m.carNumber.prefix}
                                            cityNumber={m.carNumber.cityNumber}
                                            carMake={m.carMake}
  />)
  return <div className={s.container}>
    <div>
      <ol>
      {allCar}
      </ol>
    </div>
  </div>
}

export default Cars
