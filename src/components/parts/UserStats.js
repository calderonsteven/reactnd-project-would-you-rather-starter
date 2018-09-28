import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography, Avatar, Grid } from '@material-ui/core'

const styles = theme => ({
  card: {
    minWidth: 400
  },
  scoreValue: {
    float: 'right'
  },
  grow: {
    flexGrow: 1
  },
  center: {
    textAlign: 'center'
  },
  bigAvatar: {
    width: 80,
    height: 80
  }
})

const UserStats = ({ classes, user }) => (
  <Card className={classes.card}>
    <CardContent>
      <Grid container spacing={16}>
        <Grid item>
          <Avatar
            className={classes.bigAvatar}
            src={user.avatarURL}
          />
        </Grid>
        <Grid item className={classes.grow}>
          <Typography variant='subheading' gutterBottom>
            {user.name}
          </Typography>
          <Typography variant='body1' gutterBottom>
            Answers: <b className={classes.scoreValue}>{Object.keys(user.answers).length}</b>
          </Typography>
          <Typography variant='body1' gutterBottom>
            Questions: <b className={classes.scoreValue}>{user.questions.length}</b>
          </Typography>
        </Grid>
        <Grid item className={classes.center} >
          <Typography variant='subheading' gutterBottom>
            Score
          </Typography>
          <Typography>
            <b>{Object.keys(user.answers).length + user.questions.length}</b>
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
)

export default withStyles(styles)(UserStats)
