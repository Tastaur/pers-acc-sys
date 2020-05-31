import React from 'react'
import {connect, Provider} from 'react-redux'
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import store from './Store/Store'
import s from './App.module.css'
import {compose} from 'redux'
import PeoplePageContainer from './Component/PeoplePage/PeoplePageContainer'
import Header from './Component/Header/Header'
import CarsPageContainer from './Component/CarsPage/CarsPageContainer'


class App extends React.Component {
  render() {
    return (
        <div className={s.main}>
          <div>
            <Header startUrl={'/pers-acc-sys'}/>
          </div>
          <div className={s.wrapper}>
            <Route path='/people' render={()=> <div>
              <PeoplePageContainer startUrl={'/pers-acc-sys'}/>
            </div>}/>
            <Route path='/car' render={()=> <div>
              <CarsPageContainer  startUrl={'/pers-acc-sys'}/>
            </div>}/>
            <Route path='/info' render={()=> <div>
              info
            </div>}/>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (props) =>{
return {}
}
const AppContainer = compose(withRouter,connect(mapStateToProps,{}))(App)

const PersAccSys = (props)=>{
  return(
      <BrowserRouter basename={'/pers-acc-sys'}>
        <Provider store={store}>
          <AppContainer/>
        </Provider>
      </BrowserRouter>
  )
}

export default PersAccSys;
