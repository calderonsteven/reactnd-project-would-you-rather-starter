import React from 'react'
import { List, ListItem } from '@material-ui/core'

import { QuestionOverview } from './../parts'

const QuestionsList = ({ questions, users }) => (
  <List>
    {questions.map(question => (
      <ListItem key={question.id} >
        <QuestionOverview
          question={question}
          createdBy={users[question.author]}
        />
      </ListItem>
    ))}
  </List>
)

export default QuestionsList
