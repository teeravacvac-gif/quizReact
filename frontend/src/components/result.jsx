import React from 'react'

function Result({questionBank,userAnswers}) {
  
  function getScore() {
    let finalScore = 0
    userAnswers.forEach((answer,index) => {
      if (answer ===questionBank[index].answer){
        finalScore++
      }
    })    
    return finalScore
  }
  const score = getScore()

  return (
    <div>
        <h2>quiz completed</h2>
        <p>your score: {score}/{questionBank.length}</p>
    </div>
  ) 
}

export default Result