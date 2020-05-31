import React from 'react'
import CarsPage from './CarsPage'
import {connect} from 'react-redux'

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

export default connect(mapStateToProps, {})(CarsPageContainer)
