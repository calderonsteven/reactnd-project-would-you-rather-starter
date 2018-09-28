import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel
} from '@material-ui/core'

const styles = theme => ({
  card: {
    minWidth: 345,
  }
})

class QuestionDetail extends Component {
  state = {
    radioValue: 'optionOne'
  }

  handleVoteQuestion = () => {
    const { radioValue: answer } = this.state
    const { question } = this.props

    this.props.onAnswerQuestion(question.id, answer)
  }

  render = () => {
    const { classes, question, currentUser } = this.props

    return (
      <Card className={classes.card}>
        <CardHeader
          title={`${currentUser.name} ask.`}
          avatar={<Avatar src={currentUser.avatarURL} />}
        />
        <CardContent>
          <Typography gutterBottom variant='subheading' component='h3'>
            Would You Rather?
          </Typography>
          <FormControl component='fieldset'>
              <RadioGroup
                name='options'
                onChange={(e, radioValue) => { this.setState({radioValue}) }}
                value={this.state.radioValue}>
                <FormControlLabel
                  value='optionOne'
                  control={<Radio />}
                  label={question.optionOne.text}
                />
                <FormControlLabel
                  value='optionTwo'
                  control={<Radio />}
                  label={question.optionTwo.text}
                />
              </RadioGroup>
            </FormControl>
        </CardContent>
        <CardActions>
          <Button
            onClick={this.handleVoteQuestion}
            variant='outlined' color='primary'>
            Submit
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(QuestionDetail);
