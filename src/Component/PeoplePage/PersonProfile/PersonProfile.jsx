import React, {useState} from 'react'
import {Button} from 'react-bootstrap'

const PersonProfile = (props) => {
  const [editMode, setEditMode] = useState(false)
  return <div>
    <div>
      <p>Должность: {props.profile[0].position} </p>
      <p>Рота: {props.profile[0].company.rota} </p>
      <p>Взвод: {props.profile[0].company.vzvod} </p>
      <p>Звание: {props.profile[0].rank}</p>
    </div>
    <div>
      <p>Фамилия: {props.profile[0].family}</p>
      <p>Имя: {props.profile[0].name}</p>
      <p>Отчество: {props.profile[0].patronymic}</p>
    </div>
    <div>
      <p>Дата рождения: {props.profile[0].birthDate.day} {props.profile[0].birthDate.month} {props.profile[0].birthDate.year}</p>
    </div>
    <div>
      <p>Нагрудный знак: {props.profile[0].personalNum} </p>
    </div>
    <Button onClick={()=>setEditMode(!editMode)}> Изменить данные</Button>
  </div>
}

export default PersonProfile
