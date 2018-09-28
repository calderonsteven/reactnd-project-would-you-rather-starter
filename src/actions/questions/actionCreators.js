import {
  GET_QUESTIONS_REQUEST,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_ERROR,
  SAVE_QUESTION_ANSWER_REQUEST,
  SAVE_QUESTION_ANSWER_SUCCESS,
  SAVE_QUESTION_ANSWER_ERROR,
  SAVE_QUESTION_ERROR,
  SAVE_QUESTION_REQUEST,
  SAVE_QUESTION_SUCCESS,
} from './actionTypes'

export function getQuestionsRequest() {
  return {
    type: GET_QUESTIONS_REQUEST,
  }
}

export function getQuestionsSuccess(payload) {
  return {
    type: GET_QUESTIONS_SUCCESS,
    payload,
  }
}

export function getQuestionsError() {
  return {
    type: GET_QUESTIONS_ERROR,
  }
}

export function saveQuestionAnswerRequest() {
  return {
    type: SAVE_QUESTION_ANSWER_REQUEST,
  }
}

export function saveQuestionAnswerSuccess(payload) {
  return {
    type: SAVE_QUESTION_ANSWER_SUCCESS,
    payload,
  }
}

export function saveQuestionAnswerError() {
  return {
    type: SAVE_QUESTION_ANSWER_ERROR,
  }
}

export function saveQuestionRequest() {
  return {
    type: SAVE_QUESTION_REQUEST,
  }
}

export function saveQuestionSuccess(payload) {
  return {
    type: SAVE_QUESTION_SUCCESS,
    payload,
  }
}

export function saveQuestionError(payload) {
  return {
    type: SAVE_QUESTION_ERROR,
    payload,
  }
}
