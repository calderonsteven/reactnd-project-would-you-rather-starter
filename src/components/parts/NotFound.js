import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div>
    <Typography gutterBottom variant='subheading'>
      404 Not Found
    </Typography>
    <Button
      component={Link}
      to='/'
      variant='outlined' color='primary'>
      Go to home
    </Button>
  </div>
)

export default NotFound
