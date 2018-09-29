import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { Grid } from '@material-ui/core'

import { Header } from './parts'
import { Login, Home, NewQuestion, Question, LeaderBoard } from './pages'

const App = ({ users : { currentUser } }) => (
  <Fragment>
    <Header />
    <Grid container direction='column' justify='flex-start' alignItems='center' >
      {!currentUser.id && <Login />}
      {
        currentUser.id &&
          <Fragment>
            <Route exact path='/' component={Home} />
            <Route exact path='/add' component={NewQuestion} />
            <Route exact path='/questions/:questionId' component={Question} />
            <Route exact path='/leaderboard' component={LeaderBoard} />
          </Fragment>
      }
    </Grid>
  </Fragment>
)

export default withRouter(
  connect((state) => ({
    users: state.users
  }))(App)
)
