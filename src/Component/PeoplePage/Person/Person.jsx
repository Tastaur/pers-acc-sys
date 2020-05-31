import React from 'react'
import s from './Person.module.css'
import {NavLink} from 'react-router-dom'

const Person = (props)=>{
  return <NavLink to={`${props.url}/${props.personalId}`} className={s.container}>
    <li>
      <p>{props.position} </p>
      <p>{props.rank} {props.family} {props.name} {props.patronymic}</p>
    </li>
  </NavLink>
}

export default Person
