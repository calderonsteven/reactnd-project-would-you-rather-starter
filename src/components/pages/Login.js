import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import {
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Avatar
} from '@material-ui/core'

import { handleGetUsers, handleUserLogin } from './../../actions/users'

const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  avatar: {
    marginRight: 5,
    display: 'inline-block'
  }
})

class Login extends Component {
  state = {
    selectedUser: ''
  }

  componentDidMount = () => {
    const { dispatch } = this.props
    dispatch(handleGetUsers())
  }

  SignInUser = () => {
    const { dispatch, users: { users } } = this.props
    const user = users[this.state.selectedUser]
    if (user) {
      dispatch(handleUserLogin(user))
    }
  }

  render = () => {
    const { classes, users: { users } } = this.props
    const usersInApp = Object.keys(users).map((key) => users[key])

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant='headline' component='h2'>
            {'Welcome to Would You Rather App?'}
          </Typography>
          <Typography component='p'>
            {'Please select you user and click on the sign in button'}
          </Typography>
        </CardContent>
        <CardActions>
          <FormControl className={classes.formControl} >
            <InputLabel htmlFor='login-select'>{'Select an user'}</InputLabel>
            <Select
              value={this.state.selectedUser}
              onChange={(event) => { this.setState({selectedUser: event.target.value}) }}
              inputProps={{
                name: 'user',
                id: 'login-select',
              }}
            >
              {usersInApp.map(user => (
                <MenuItem value={user.id} key={user.id}>
                  <Avatar className={classes.avatar} src={user.avatarURL} />
                  {user.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </CardActions>
        <CardActions>
          <Button
            variant='outlined'
            color='primary'
            className={classes.grow}
            onClick={this.SignInUser}
          >
            {'Sign In'}
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default connect((state) => ({
  users: state.users
}))(withStyles(styles)(Login))
