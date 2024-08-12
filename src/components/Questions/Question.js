import React, {useEffect} from 'react';
import "./Question.css";
import TelegramIcon from '@mui/icons-material/Telegram';

function Question({ question, onAns, answers, sendToParent }) {

  // function to handle question prompts
  const renderQuestions = (question) => {
    return question.prompts.map((prompt, indx) => {
      switch (prompt.type) {
        case 'text':
          return (<div className='questions-div'><p key={indx}>{prompt.content}</p></div>)
        case 'image':
          return <img key={indx} src={prompt.content} alt={indx} />
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
            <input type='text' className='single-ans-input' placeholder='Enter Text' />
            <button className='input-submit-button' ><TelegramIcon onClick={() => onAns(document.querySelector('.single-ans-input').value)} /></button>
          </div>
        )
      case "mcq":
        return question.options.map((option, indx) => (
          <div>
            <div key={indx} onClick={() => onAns(option)} className='ans-buttons'>{option}</div>
          </div>
        ));
    }

  }

// sending the render inputs to the parent element
  useEffect(() => { 
    sendToParent(renderInputs)
  }, [sendToParent]); 
  return (
    <div className='question-wrapper'>
      {answers.map((qa, indx) => (
        <>
          {renderQuestions(qa.question)}
          <div className='ans-div-wrapper'><div className='ans-div'>{qa.ans}</div></div>
        </>

      ))}

      {renderQuestions(question)}
      {/* <div className='ans-wrapper'>
        {renderInputs()}
      </div> */}

    </div>
  )
}

export default Question