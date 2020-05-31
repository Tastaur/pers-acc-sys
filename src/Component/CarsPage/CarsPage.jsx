import React from 'react'
import s from './CarsPage.module.css'
import CarHeader from './CarsHeader/CarHeader'
import {BrowserRouter, Route} from 'react-router-dom'
import Cars from './Cars/Cars'
import CarInfoPageContainer from './CarInfoPage/CarInfoPageContainer'

const CarsPage = (props) => {
  return <div className={s.container}>
    <CarHeader startUrl={'/car'}/>
      <BrowserRouter basename={'/car'}>
      <Route path={'/1rota'} render={() => <div><Cars {...props} rota={1}/></div>}/>
      <Route path={'/2rota'} render={() => <div><Cars {...props} rota={2}/></div>}/>
      <Route path={'/3rota'} render={() => <div><Cars {...props} rota={3}/></div>}/>
        <Route path={`/item/:serialNumber?`} render={() => <CarInfoPageContainer />}/>

      </BrowserRouter>

  </div>
}

export default CarsPage
