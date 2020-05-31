import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {setProfile} from '../../../Store/personalReducer'
import PersonProfile from './PersonProfile'

class PersonProfileContainer extends React.Component {
  refreshPerson = () => {
    let personalId = this.props.match.params.personalId
    this.props.setProfile(personalId)
  }

  componentDidMount() {
    this.refreshPerson()
  }

  render() {
    return <PersonProfile profile={this.props.profile}/>
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.personalPage.people,
    profile: state.personalPage.profile,
  }
}
export default compose(
    connect(mapStateToProps, {setProfile}),
    withRouter,
)(PersonProfileContainer)

