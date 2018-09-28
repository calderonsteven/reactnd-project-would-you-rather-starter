import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  CardHeader,
  TextField
} from '@material-ui/core'

import { handleSaveQuestion } from './../../actions/questions';

const styles = theme => ({
  card: {
    minWidth: 400,
  },
  center: {
    textAlign: 'center'
  },
  textField: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  }
})

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
  }

  createQuestion = () => {
    const { dispatch, history } = this.props
    const { optionOneText, optionTwoText } = this.state

    dispatch(handleSaveQuestion({ optionOneText, optionTwoText }))
    history.push('/')
  }

  render = () => {
    const { classes } = this.props
    const { optionOneText, optionTwoText } = this.state

    return (
      <Card className={classes.card}>
        <CardHeader title='Create New Question' />
        <CardContent>
          <Typography gutterBottom variant='body1'>
            Complete the question
          </Typography>
          <Typography gutterBottom variant='subheading'>
            Would You Rather?
          </Typography>
          <TextField
            onChange={(event) => { this.setState({optionOneText: event.target.value}) }}
            className={classes.textField}
            id='standard-name'
            label='Enter Option One Text Here'
            margin='normal'
            value={optionOneText}
          />
          <TextField
            onChange={(event) => { this.setState({optionTwoText: event.target.value}) }}
            className={classes.textField}
            id='standard-name'
            label='Enter Option Two Text Here'
            margin='normal'
            value={optionTwoText}
          />
        </CardContent>
        <CardActions>
          <Button
            disabled={optionOneText.trim() === '' || optionTwoText.trim() === ''}
            onClick={this.createQuestion}
            variant='outlined'
            color='primary'
            className={classes.grow}
          >
            Create Question
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default withRouter(
  connect((state) => ({
    users: state.users
  }))(withStyles(styles)(NewQuestion))
)
