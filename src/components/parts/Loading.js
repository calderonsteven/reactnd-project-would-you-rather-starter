import React from 'react'
import { CircularProgress, Typography } from '@material-ui/core'

const Loading = () => (
  <div>
    <Typography variant='headline' color='inherit'>
      Loading...
    </Typography>
    <CircularProgress/>
  </div>
)

export default Loading
