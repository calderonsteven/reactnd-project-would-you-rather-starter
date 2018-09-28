import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardContent, CardActions, Typography, CardHeader, Avatar, Button } from '@material-ui/core'

import { PollVoteStats } from './'

const styles = theme => ({
  card: {
    minWidth: 345,
  },
  grow: {
    flexGrow: 1
  }
})

const PollStats = ({ classes, question, createdBy, currentUser }) => (
  <Card className={classes.card}>
    <CardHeader
      title={`'Asked by ${createdBy.name}`}
      avatar={<Avatar src={createdBy.avatarURL} />}
    />
    <CardContent>
      <Typography gutterBottom variant='subheading' component='h3'>
        Results:
      </Typography>
      <PollVoteStats
        option={question.optionOne}
        totalVotes={question.optionOne.votes.length + question.optionTwo.votes.length}
        currentUser={currentUser}
      />
      <PollVoteStats
        option={question.optionTwo}
        totalVotes={question.optionOne.votes.length + question.optionTwo.votes.length}
        currentUser={currentUser}
      />
    </CardContent>
    <CardActions>
      <Button
        className={classes.grow}
        component={Link}
        to='/'
        variant='outlined'
        color='primary'
      >
        Back to home
      </Button>
    </CardActions>
  </Card>
)

export default withStyles(styles)(PollStats)
