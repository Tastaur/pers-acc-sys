import React from 'react'
import s from './People.module.css'
import Person from '../Person/Person'

const People = (props) => {
  const first = props.people.filter(p => p.company.rota === props.rota && p.company.vzvod === props.vzvod[0]).map(p => <Person
      family={p.family}
      name={p.name}
      key={p.personalId}
      patronymic={p.patronymic}
      position={p.position}
      rank={p.rank}
      personalId={p.personalId}
      url={'/person'}

  />)
  const second = props.people.filter(p => p.company.rota === props.rota && p.company.vzvod === props.vzvod[1]).map(p => <Person
      family={p.family}
      name={p.name}
      key={p.personalId}
      patronymic={p.patronymic}
      position={p.position}
      rank={p.rank}
      personalId={p.personalId}
      url={'/person'}

  />)
  const third = props.people.filter(p => p.company.rota === props.rota && p.company.vzvod === props.vzvod[2]).map(p => <Person
      family={p.family}
      name={p.name}
      key={p.personalId}
      personalId={p.personalId}
      patronymic={p.patronymic}
      position={p.position}
      rank={p.rank}
      url={'/person'}

  />)
  const fourth = props.people.filter(p => p.company.rota === props.rota && p.company.vzvod === props.vzvod[3]).map(p => <Person
      family={p.family}
      name={p.name}
      key={p.personalId}
      patronymic={p.patronymic}
      position={p.position}
      rank={p.rank}
      personalId={p.personalId}
      url={'/person'}

  />)
  return <div>
    <h2>{props.podrazdelenie} </h2>
    <div className={s.container}>
      <div>{props.vzvod[0]}
        <ul>
          {first}
        </ul>
      </div>
      {props.vzvod[1] && <div>  {props.vzvod[1]}
        <ul>
          {second}
        </ul>
      </div>}
      {props.vzvod[2] && <div>{props.vzvod[2]}
        <ul>
          {third}
        </ul>
      </div>}
      {props.vzvod[3] && <div>{props.vzvod[3]}
        <ul>

          {fourth}
        </ul>
      </div>}
    </div>
  </div>
}

export default People
