import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Button, Card, CardActions, CardContent, Typography, CardHeader, Avatar, Grid } from '@material-ui/core'

const styles = theme => ({
  card: {
    minWidth: 400,
  },
  grow: {
    flexGrow: 1
  },
  bigAvatar: {
    width: 80,
    height: 80
  }
});

const QuestionOverview = ({classes, createdBy, question}) => (
  <Card className={classes.card}>
    <CardHeader title={`${createdBy.name} ask:`} />
    <CardContent>
      <Grid container spacing={16}>
        <Grid item>
          <Avatar
            className={classes.bigAvatar}
            src={createdBy.avatarURL}
          />
        </Grid>
        <Grid item>
          <Typography gutterBottom variant='subheading' component='h3'>
            Would You Rather?
          </Typography>
          <Typography gutterBottom component='p'>
            {`...${question.optionOne.text}...`}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
    <CardActions>
      <Button
        className={classes.grow}
        component={Link}
        to={`/questions/${question.id}`}
        variant='outlined'
        color='primary'
      >
        View poll
      </Button>
    </CardActions>
  </Card>
);

export default withStyles(styles)(QuestionOverview)
