import React from 'react'
import {Link , useLocation} from 'react-router-dom'
import './Homemainbar.css'
import QuestionsList from './QuestionsList'

const Homemainbar = () => {
  // const location = useLocation()
  // const user = 1;
  // const navigate = useNavigate()

  // const questionsList = useSelector(state => state.questionsReducer)
  // console.log(questionsList)
  var questionsList = [{ 
      _id: 1,
      Votes: 3,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongo db", "express js"],
      userPosted: "mano",
      userId: 1,
      askedOn: "jan 1",
      answer: [{
          answerBody: "Answer",
          userAnswered: 'kumar',
          answeredOn: "jan 2",
          userId: 2,
      }]
  },{ 
      _id: 2,
      Votes: 0,
      noOfAnswers: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mano",
      askedOn: "jan 1",
      userId: 1,
      answer: [{
          answerBody: "Answer",
          userAnswered: 'kumar',
          answeredOn: "jan 2",
          userId: 2,
      }]
  },{ 
      _id: 3,
      Votes: 1,
      noOfAnswers: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "mano",
      askedOn: "jan 1",
      userId: 1,
      answer: [{
          answerBody: "Answer",
          userAnswered: 'kumar',
          answeredOn: "jan 2",
          userId: 2,
      }]
  }]
  const location =useLocation();

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
      {
        location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
      }
      <Link to='/AskQuestions' className='ask-btn'>Ask Questions</Link>
      </div>
      <div>
        {
        questionsList === null ?
        <h1>Loading....</h1>:
        <>
        <p>{questionsList.length} Questions</p>
           <QuestionsList questionsList={questionsList}/>
        </>
       }
      </div>
    </div>
  )
}

export default Homemainbar
