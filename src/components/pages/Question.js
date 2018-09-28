import React, { Component } from 'react'
import { connect } from 'react-redux'

import { QuestionDetail, PollStats, NotFound, Loading } from './../parts'
import { handleSaveQuestionAnswer, handleGetQuestions } from './../../actions/questions'


class Question extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleGetQuestions())
  }

  handleOnAnswerQuestion = (questionId, answer) => {
    const { dispatch } = this.props
    dispatch(handleSaveQuestionAnswer(questionId, answer))
  }

  render = () => {
    const {
      match,
      questions,
      users: { currentUser },
      users: { users },
    } = this.props

    if (questions.loading) {
      return (<Loading />)
    }

    const { questionId } = match.params
    const question = questions.questions[questionId]
    const answer = currentUser.answers[questionId]

    if (!question) {
      return (<NotFound />)
    }

    return (
      answer ?
        <PollStats
          question={question}
          currentUser={currentUser}
          createdBy={users[question.author]}
        /> :
        <QuestionDetail
          question={question}
          currentUser={currentUser}
          onAnswerQuestion={this.handleOnAnswerQuestion}
        />
    )
  }
}

export default connect((state) => ({
    questions: state.questions,
    users: state.users
}))(Question)
