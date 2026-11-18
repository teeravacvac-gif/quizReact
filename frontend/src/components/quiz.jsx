import { useState } from "react";
import Result from "./result";

function Quiz() {
  const questionBank = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "London", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which language is used for web apps?",
      options: ["PHP", "Python", "Javascript", "All"],
      answer: "All",
    },
    {
      question: "Who is the current CEO of Tesla?",
      options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
      answer: "Elon Musk",
    },
      {
    question: "How many continents are there?",
    options: ["Five", "Six", "Seven", "Eight"],
    answer: "Seven",
  },
  {
    question: "Which animal is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
    answer: "Blue Whale",
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2",
  },
  {
    question: "Which country is famous for inventing pizza?",
    options: ["France", "Greece", "Italy", "Spain"],
    answer: "Italy",
  },
  {
    question: "What is the main gas that plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide"],
    answer: "Carbon Dioxide",
  },
  ];
  const initialAnswers = [null,null,null]
  const [userAnswers,setUserAnswers] = useState(initialAnswers)
  const [currentQuestion,setCurrentQuestion] = useState(0)
  const selectedAnswer = userAnswers[currentQuestion]

  
  function handleSelect(option){
    const newUserAnswers = [...userAnswers]
    newUserAnswers[currentQuestion]=option
    setUserAnswers(newUserAnswers)
    console.log(newUserAnswers)
  }

  function goToNext(){
    setCurrentQuestion(currentQuestion+1)
  }
  function goToPrev(){
    setCurrentQuestion(currentQuestion-1)
  }
  
  if (currentQuestion === questionBank.length ) {
    return <Result userAnswers={userAnswers} questionBank={questionBank}/>
  }

  return (
    <div>
      <h2>Question {currentQuestion+1}/{questionBank.length}</h2>
      <p className="question">{questionBank[currentQuestion].question}</p>
        {questionBank[currentQuestion].options.map((option)=>(
            <button 
            onClick={()=>handleSelect(option)}
            className={"option"+ (option === selectedAnswer ? " selected":"")}
            >{option}</button>
        ))}
        
        <div className="nav-buttons">
            <button onClick={goToPrev} disabled={currentQuestion === 0}>Prev</button>
            <button onClick={goToNext} disabled={!selectedAnswer}>Next</button>
        </div>
        
    </div>
  );
}

export default Quiz;
