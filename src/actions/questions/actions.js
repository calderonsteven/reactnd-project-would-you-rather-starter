import * as API from './../../data/_DATA'
import {
  getQuestionsRequest,
  getQuestionsSuccess,
  getQuestionsError,
  saveQuestionAnswerRequest,
  saveQuestionAnswerSuccess,
  saveQuestionAnswerError,
  saveQuestionRequest,
  saveQuestionSuccess,
  saveQuestionError
} from './actionCreators'


export function handleGetQuestions() {
  return (dispatch, getState) => {
    const { questions, users } = getState()

    if (Object.keys(questions.questions).length === 0) {
        dispatch(getQuestionsRequest())
        return API._getQuestions()
          .then((questions) => {
            dispatch(getQuestionsSuccess({ questions, users }))
          })
          .catch(() => {
            dispatch(getQuestionsError())
          })
    }

    return dispatch(getQuestionsSuccess({ questions: questions.questions, users }))
  }
}

export function handleSaveQuestionAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { users } = getState()
    const { currentUser } = users

    dispatch(saveQuestionAnswerRequest())
    return API._saveQuestionAnswer({
      authedUser: currentUser.id,
      qid,
      answer
    })
      .then(() => {
        dispatch(saveQuestionAnswerSuccess({
          qid,
          answer,
          currentUserId: currentUser.id
        }))
      })
      .catch(() => {
        dispatch(saveQuestionAnswerError())
      })
  }
}

export function handleSaveQuestion({ optionOneText, optionTwoText }) {
  return (dispatch, getState) => {
    const { users } = getState()
    const { currentUser } = users

    dispatch(saveQuestionRequest())
    return API._saveQuestion({
      author: currentUser.id,
      optionOneText,
      optionTwoText,
    })
      .then((question) => {
        dispatch(saveQuestionSuccess({ question, users: users.users }))
      })
      .catch((err) => {
        dispatch(saveQuestionError(err))
      })
  }
}
