import React, {useState} from 'react'
import {Button} from 'react-bootstrap'

const CarInfoPage = (props) => {
  debugger
  const [editMode, setEditMode] = useState(false)
  return <div>
    <div>
      <p>Марка: {props.carInfo[0].carMake}</p>
      <p>Модель: {props.carInfo[0].model}</p>
      <p>Номер: {props.carInfo[0].carNumber.prefix} {props.carInfo[0].carNumber.serialNumber} {props.carInfo[0].carNumber.cityNumber}</p>
      <p>Закреплен за: {props.carInfo[0].company} ротой</p>
    </div>
    <Button onClick={() => setEditMode(!editMode)}> Изменить данные</Button>
  </div>

}

export default CarInfoPage
