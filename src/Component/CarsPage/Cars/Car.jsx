import React from 'react'
import s from './Car.module.css'
import {NavLink} from 'react-router-dom'

const Car = (props)=>{
  return <NavLink className={s.container} to={`${props.url}/${props.serialNumber}`}>
    <li> <div>
    <p>{props.carMake} {props.model} - {props.prefix} <strong>{props.serialNumber}</strong> {props.cityNumber}</p>
    </div>
    </li>
  </NavLink>
}

export default Car
