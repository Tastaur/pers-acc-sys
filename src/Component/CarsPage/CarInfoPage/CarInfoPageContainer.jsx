import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {setCarInfo} from '../../../Store/carsReducer'
import CarInfoPage from './CarInfoPage'

class CarInfoPageContainer extends React.Component {
  refreshCarInfo = () => {
    let serialNumber = this.props.match.params.serialNumber
    this.props.setCarInfo(serialNumber)
  }
  componentDidMount() {
    this.refreshCarInfo()
  }
  render() {
    return <div>
      <CarInfoPage carInfo={this.props.carInfo}/>
    </div>

  }
}

const mapStateToProps = (state) => {
  return {
    cars: state.carsPage.cars,
    carInfo: state.carsPage.carInfo,
  }
}
export default compose(
    connect(mapStateToProps, {setCarInfo}),
    withRouter,
)(CarInfoPageContainer)

