import React from 'react'
import {Link} from 'react-router-dom'

const Questions = ({question}) => {
  return (
    <div className='display-question-container'>
        <div className='display-votes-ans'>
            <p>{question.Votes}</p>
            <p>Votes</p>
            <div className='display-votes-ans'>
            <p>{question.noOfAnswers}</p>
            <p>Answers</p>
            </div>
           <div className='display-question-details'>
           <Link to={`/Questions/${question.id}`} className='question-title-link'>{question.questionTitle}</Link>
           <div className='display-tags-time'>
             <div className='display-tags'>
               {
                question.questionTags.map((tags)=>(
                  <p key={tags}>{tags}</p>
                ))
               }
             </div>
             <p>
              askedOn { question.askedOn} {question.userPosted}
             </p>
           </div>
           </div>
        </div>
      
    </div>
  )
}

export default Questions
