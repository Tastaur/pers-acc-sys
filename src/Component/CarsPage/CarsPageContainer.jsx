import React from 'react'
import CarsPage from './CarsPage'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'

const CarsPageContainer =(props)=> {

  return <div>
    <CarsPage {...props}/>
  </div>
}

const mapStateToProps = (state) => {
  return {
    carsPage: state.carsPage.cars
  }
}

export default compose(connect(mapStateToProps, {}),withRouter)(CarsPageContainer)
