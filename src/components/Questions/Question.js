import React from 'react';
import "./Question.css"

function Question({ question, onAns, answers, allAnswered }) {

  // function to handle question prompts
  const renderQuestions = (question) => {
    return question.prompts.map((prompt, indx) => {
      switch (prompt.type) {
        case 'text':
          return <p key={indx}>{prompt.content}</p>
        case 'image':
          return <img key={indx} src={prompt.content} alt={indx} />
        case allAnswered:
          return "hi";
        default:
          return null;
      }
    })
  }


  console.log(answers)


  // function to handle question 
  const renderInputs = () => {

    switch (question.type) {
      case "single-answer":
        return (
          <div className='input-section-wrapper'>
            <input type='text' className='single-ans-input' placeholder='Enter Text'/>
            <button className='input-submit-button' onClick={() => onAns(document.querySelector('.single-ans-input').value)} >Submit</button>
          </div>
        )
      case "mcq":
        return question.options.map((option, indx) => (
          <button key={indx} onClick={() => onAns(option)}>{option}</button>
        ));
    }

  }
  return (
    <div className='question-wrapper'>
      {answers.map((qa, indx) => (
        <>
          {renderQuestions(qa.question)}
          {qa.ans}
        </>

      ))}

      {renderQuestions(question)}
      <div className='ans-wrapper'>
        {renderInputs()}
      </div>

    </div>
  )
}

export default Question