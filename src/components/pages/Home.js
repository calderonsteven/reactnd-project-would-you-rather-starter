import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { Tabs, Tab } from '@material-ui/core'

import { QuestionsList, Loading } from './../parts'
import { handleGetQuestions } from './../../actions/questions'

const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  accountInfo: {
    float: 'right',
  }
})

class Home extends Component {
  state =  {
    tabValue: 0
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleGetQuestions())
  }

  render() {
    const {
      questions: { questions },
      questions: { loading },
      users: { currentUser },
      users: { users }
    } = this.props

    if (loading) {
      return (<Loading />)
    }

    const unansweredQuestions = Object.keys(questions)
      .filter(questionId => !Object.keys(currentUser.answers).includes(questionId))
      .map(questionId => questions[questionId])
      .sort((q1, q2) => (q2.timestamp - q1.timestamp))

    const answeredQuestions = Object.keys(currentUser.answers)
      .map(questionId => questions[questionId])
      .sort((q1, q2) => (q2.timestamp - q1.timestamp))

    return (
      <Fragment>
        <Tabs value={this.state.tabValue} onChange={(e, tabValue) => { this.setState({tabValue}) }}>
          <Tab label='Unanswered polls' />
          <Tab label='Answered polls' />
        </Tabs>
        {this.state.tabValue === 0 && <QuestionsList questions={unansweredQuestions} users={users} />}
        {this.state.tabValue === 1 && <QuestionsList questions={answeredQuestions} users={users} />}
      </Fragment>
    )
  }
}

export default connect((state) => ({
    questions: state.questions,
    users: state.users
}))(withStyles(styles)(Home))
