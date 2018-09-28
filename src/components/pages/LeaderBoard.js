import React, { Component } from 'react'
import { List, ListItem } from '@material-ui/core'
import { connect } from 'react-redux'

import { handleGetQuestions } from './../../actions/questions'
import { UserStats, Loading } from './../parts';

class LeaderBoard extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleGetQuestions())
  }

  render = () => {
    const { questions, users: { users } } = this.props

    if (questions.loading) {
      return (<Loading />)
    }

    return (
      <List>
        {
          Object.keys(users).map(id => users[id])
            .sort((user1, user2) => (
              (Object.keys(user2.answers).length + user2.questions.length) -
              (Object.keys(user1.answers).length + user1.questions.length)
            ))
            .map(user => {
              return (
                <ListItem key={user.id} >
                  <UserStats user={user}/>
                </ListItem>
              )
            })
        }
      </List>
    )
  }
}

export default connect((state) => ({
    questions: state.questions,
    users: state.users
}))(LeaderBoard)
