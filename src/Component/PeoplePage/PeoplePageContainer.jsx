import React from 'react'
import PeoplePage from './PeoplePage'
import {connect} from 'react-redux'

const PeoplePageContainer = (props) =>{
  return <div>
    <PeoplePage {...props}/>
  </div>
}

const mapStateToProps = (state) => {
  return {
    people: state.personalPage.people,
  }
}

export default connect(mapStateToProps, {})(PeoplePageContainer)
