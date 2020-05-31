import React from 'react'
import PeoplePage from './PeoplePage'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'

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

export default compose(connect(mapStateToProps, {}),withRouter)(PeoplePageContainer)
