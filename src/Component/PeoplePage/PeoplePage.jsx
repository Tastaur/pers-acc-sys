import React from 'react'
import s from './PeoplePage.module.css'
import PersonHeader from './PersonHeader/PersonHeader'
import {BrowserRouter, Route} from 'react-router-dom'
import People from './People/People'

const PeoplePage = (props) => {
  return <div className={s.container}>
    <PersonHeader startUrl={'/people'}/>
      <BrowserRouter basename={'/people'}>
      <Route path={'/1rota'} render={() => <div><People podrazdelenie={'1 рота'} rota={1} vzvod={[1,2]} {...props}/></div>}/>
      <Route path={'/2rota'} render={() => <div>2 рота</div>}/>
      <Route path={'/3rota'} render={() => <div>3 рота</div>}/>
      <Route path={'/iaz'} render={() => <div>ИАЗ</div>}/>
      <Route path={'/slugba'} render={() => <div>Служба</div>}/>
      <Route path={'/kadri'} render={() => <div>Кадры</div>}/>
      <Route path={'/mto'} render={() => <div>Тех.часть</div>}/>
      <Route path={'/dg'} render={() => <div>Дежурка</div>}/>
    </BrowserRouter>

  </div>
}

export default PeoplePage
