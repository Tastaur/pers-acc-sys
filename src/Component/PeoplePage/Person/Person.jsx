import React from 'react'
import s from './Person.module.css'

const Person = (props)=>{
  return <div className={s.container}>
    <li>
      <p>{props.position} </p>
      <p>{props.rank} {props.family} {props.name} {props.patronymic}</p>
    </li>
  </div>
}

export default Person
