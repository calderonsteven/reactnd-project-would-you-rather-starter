import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Button, Typography, Avatar, AppBar, Toolbar } from '@material-ui/core'

import { handleUserLogout } from './../../actions/users'

const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  accountContainer: {
    marginLeft: 'auto',
    display: 'flex'
  },
  userName: {
    alignSelf: 'center',
    paddingRight: 20
  },
  header: {
    marginBottom: 20
  }
})

class Header extends Component {
  logOut = () => {
    const { dispatch, history } = this.props
    dispatch(handleUserLogout())
    history.push('/')
  }

  renderUserInfo = (currentUser) => {
    const { classes } = this.props

    return (
      <div className={classes.accountContainer} >
        <Typography component='span' color='inherit' className={classes.userName}>
          Hi!, {currentUser.name}
        </Typography>
        <Avatar src={currentUser.avatarURL} />
        <Button onClick={this.logOut} color='inherit'>log out</Button>
      </div> )
  }

  render = () => {
    const { classes, users: { currentUser } } = this.props

    return (
      <AppBar position='static' className={classes.header}>
        <Toolbar>
          <Typography variant='title' color='inherit'>
            Would You Rather?
          </Typography>
          <Button component={Link} to='/' color='inherit'>Home</Button>
          <Button component={Link} to='/add' color='inherit'>New Question</Button>
          <Button component={Link} to='/leaderboard' color='inherit'>Leader Board</Button>

          { currentUser.id && this.renderUserInfo(currentUser) }
        </Toolbar>
      </AppBar>
    )
  }
}

export default withRouter(
  connect((state) => ({
    users: state.users
  }))(withStyles(styles)(Header))
)
