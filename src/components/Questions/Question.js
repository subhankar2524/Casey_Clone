import React, { useEffect, useRef } from 'react';
import "./Question.css";
import TelegramIcon from '@mui/icons-material/Telegram';

function Question({ question, onAns, answers, sendToParent }) {

  // ref for the last element
  const lastElement = useRef(null); 

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

  // handle scroll at the end of the page
  useEffect(() =>  { 
    if(lastElement.current){ 
      lastElement.current.scrollTop = lastElement.current.scrollHeight; 
    }
  }, [answers, question])


  // function to handle question 
  const renderInputs = () => {

    switch (question.type) {
      case "single-answer":
        return (
          <div className='input-section-wrapper'>
            <input type='text' className='single-ans-input' placeholder='Enter Text' />
            <button className='input-submit-button' onClick={() => onAns(document.querySelector('.single-ans-input').value)} ><TelegramIcon /></button>
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
    <div className='question-wrapper' ref={lastElement}>
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

      {/* <div ref={lastElement} style={{height: '0px'}}></div> */}

    </div>
  )
}

export default Question