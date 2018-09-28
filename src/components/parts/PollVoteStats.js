import React from 'react'
import { Typography, LinearProgress } from '@material-ui/core'

const PollVoteStats = ({ option, totalVotes, currentUser }) => (
  <div>
    <Typography variant="body2" gutterBottom>
      Would You Rather {option.text}?
    </Typography>
    <LinearProgress
      variant="determinate"
      value={option.votes.length * 100 / totalVotes}
    />
    {
        option.votes.includes(currentUser.id) &&
          <Typography variant="body1" gutterBottom>
            <span role='img' aria-label='star'>🌟</span>
            {'you voted this!'}
          </Typography>
    }
    <Typography variant="body1" gutterBottom>
      {`${option.votes.length} out of ${totalVotes} votes`}
    </Typography>
    <Typography variant="body1" gutterBottom>
      {`${Math.floor(option.votes.length * 100 / totalVotes)}% voted this option`}
    </Typography>
  </div>
)

export default PollVoteStats
