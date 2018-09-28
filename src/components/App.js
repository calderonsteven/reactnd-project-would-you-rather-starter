import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { Grid } from '@material-ui/core'

import { Header } from './parts'
import { Login, Home, NewQuestion, Question, LeaderBoard } from './pages'

class App extends Component {
  render() {
    const { users : { currentUser } } = this.props

    return (
      <Fragment>
        <Header />
        <Grid container direction='column' justify='flex-start' alignItems='center' >
          {!currentUser.id && <Login />}
          {
            currentUser.id &&
              <Fragment>
                <Route exact path='/' render={() => <Home /> } />
                <Route exact path='/add' render={() => <NewQuestion /> } />
                <Route exact path='/questions/:questionId' render={props => <Question {...props} /> } />
                <Route exact path='/leaderboard' render={() => <LeaderBoard /> } />
              </Fragment>
          }
        </Grid>
      </Fragment>
    )
  }
}

export default withRouter(
  connect((state) => ({
    users: state.users
  }))(App)
)
