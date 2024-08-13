import React, { useCallback, useEffect, useRef, useState } from 'react';
import "./Question.css";
import TelegramIcon from '@mui/icons-material/Telegram';
import Drawer from '@mui/material/Drawer';

function Question({ question, onAns, answers, sendToParent }) {

  // ref for the last element
  const lastElement = useRef(null);

  // handling the sigle ans input value
  const [inputValue, setInputValue] = useState('');

  // state for handling multiple answers
  const [selectedOptions, setSelectedOptions] = useState([]);

  // state for handling the multi-select options container open or close state
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    console.log('I am being clicked'); 
    setIsOptionsOpen(newOpen); 
  };


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

  // consoling the answers
  console.log(answers)

  // handle scroll at the end of the page
  useEffect(() => {
    if (lastElement.current) {
      lastElement.current.scrollTop = lastElement.current.scrollHeight;
    }
  }, [answers, question])

  console.log(isOptionsOpen)

  // function to toggle the option container open / close state
  const toggleOptionContainer = () => {
    console.log('this is clicked');
    setIsOptionsOpen(true);
  }
  // function to handle answers
  // const renderInputs = useCallback(() => {
  //   switch (question.type) {
  //     case "single-answer":
  //       return (
  //         <div className='input-section-wrapper'>
  //           {/* <input type='text' className='single-ans-input' placeholder='Type Your ans' /> */}
  //           <textarea
  //             className='single-ans-input'
  //             placeholder='Type your ans...'
  //             rows='1' // Initial height
  //             value={inputValue}
  //             onChange={(e) => handleInputChange(e)}
  //           />
  //           <button className='input-submit-button'  >
  //             {/* <TelegramIcon onClick={() => {onAns(inputValue); setInputValue('')}} sx={{fontSize: '50px'}} /> */}
  //             <TelegramIcon
  //               sx={{
  //                 fontSize: '50px',
  //                 cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
  //                 color: inputValue.trim() ? '#000' : '#ccc',
  //                 transition: 'all 0.3s ease',
  //                 '&:hover': {
  //                   color: inputValue.trim() ? 'green' : '#ccc'
  //                 }
  //               }}
  //               onClick={(e) => {
  //                 e.preventDefault();
  //                 if (inputValue.trim()) {
  //                   onAns(inputValue);
  //                   setInputValue('');
  //                 }
  //               }}
  //             />

  //           </button>
  //         </div>
  //       )
  //     case "mcq":
  //       return question.options.map((option, indx) => (
  //         <div>
  //           <div key={indx} onClick={() => onAns(option)} className='ans-buttons'>{option}</div>
  //         </div>
  //       ));
  //     case 'mcq-multi':
  //       return (
  //         <>
  //           <button className='see-options-button' onClick={toggleDrawer(true)}>See Options</button>

  //           <Drawer open={open} onClose={toggleDrawer(false)} anchor='bottom'>
  //             <div className='' style={{width: '100vw', height: '100vh'}}>Hey</div>
  //           </Drawer>

  //           {/* <div className='option-container' style={{ transform: isOptionsOpen ? 'translateY(0%)' : 'translateY(100%)', transition: 'transform 0.3s ease-in-out' }}>
  //                 <div className='option-grid'>
  //                   {question.options.map((option, indx) => (
  //                     <div
  //                       key={indx}
  //                       onClick={() => toggleOption(option)}
  //                       className={`ans-buttons ${selectedOptions.includes(option) ? 'selected' : ''}`}
  //                     >
  //                       {option}
  //                     </div>
  //                   ))}
  //                 </div>
  //                 <div className='option-actions'>
  //                   <button onClick={() => { onAns(selectedOptions); setIsOptionsOpen(false); }}>Done</button>
  //                   <button onClick={() => setIsOptionsOpen(false)}>Cancel</button>
  //                 </div>
  //               </div> */}

  //         </>
  //       );

  //   }
  // }, [question, inputValue, selectedOptions, onAns, open]); 
  const renderInputs = () => {

    switch (question.type) {
      case "single-answer":
        return (
          <div className='input-section-wrapper'>
            {/* <input type='text' className='single-ans-input' placeholder='Type Your ans' /> */}
            <textarea
              className='single-ans-input'
              placeholder='Type your ans...'
              rows='1' // Initial height
              value={inputValue}
              onChange={(e) => handleInputChange(e)}
            />
            <button className='input-submit-button'  >
              {/* <TelegramIcon onClick={() => {onAns(inputValue); setInputValue('')}} sx={{fontSize: '50px'}} /> */}
              <TelegramIcon
                sx={{
                  fontSize: '50px',
                  cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
                  color: inputValue.trim() ? '#000' : '#ccc',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: inputValue.trim() ? 'green' : '#ccc'
                  }
                }}
                onClick={(e) => {
                  e.preventDefault();
                  if (inputValue.trim()) {
                    onAns(inputValue);
                    setInputValue('');
                  }
                }}
              />

            </button>
          </div>
        )
      case "mcq":
        return question.options.map((option, indx) => (
          <div>
            <div key={indx} onClick={() => onAns(option)} className='ans-buttons'>{option}</div>
          </div>
        ));
      case 'mcq-multi':
        return (
          <>
        <button onClick={() => toggleDrawer(true)}>See Options</button>
          
          <div className='mcq-multi-wrapper' style={{height: isOptionsOpen ? '80vh' : '0vh'}}>
            {question.options.map((option, indx) => (
              <div
                key={indx}
                onClick={() => toggleOption(option)}
                className={`ans-buttons ${selectedOptions.includes(option) ? 'selected' : ''}`}
              >
                {option}
              </div>
            ))}
            <button
              className='input-submit-button'
              onClick={() => { onAns(selectedOptions); setSelectedOptions([]); }}
              disabled={selectedOptions.length === 0}
            >
              <TelegramIcon
                sx={{
                  fontSize: '50px',
                  cursor: selectedOptions.length > 0 ? 'pointer' : 'not-allowed',
                  color: selectedOptions.length > 0 ? '#000' : '#ccc',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: selectedOptions.length > 0 ? 'green' : '#ccc'
                  }
                }}
              />
            </button>
          </div>
          </>
        )

    }



  }



  // function to handle answers for all types of data(signle input, multiple choice, multiple type etc). 
  const renderAnswer = (answer) => {
    console.log(answer, "this is inside renderAnswers")
    if (typeof answer === 'string') {
      return <div className='ans-div'>{answer}</div>
    } else if (Array.isArray(answer)) {
      return answer.map((itm, indx) => (
        <div key={indx} className='ans-div'>{itm}</div>
      ))
    } else {
      return null;
    }
  }


  // sending the render inputs to the parent element
  useEffect(() => {
    sendToParent(renderInputs)
  }, [inputValue, question, selectedOptions]);



  // function to handle the input value
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }


  // function to handle multiple select type questions
  const toggleOption = (option) => {
    setSelectedOptions((prevSelectedOption) =>
      prevSelectedOption.includes(option) ? prevSelectedOption.filter((o) => o !== option) : [...prevSelectedOption, option]
    )
  }



  return (
    <div className='question-wrapper' ref={lastElement}>
      {answers.map((qa, indx) => (
        <>
          {renderQuestions(qa.question)}
          <div className='ans-div-wrapper'><div>{renderAnswer(qa.ans)}</div></div>
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

export default Question;






// <div className='mcq-multi-wrapper'>
//   {question.options.map((option, indx) => (
//     <div
//       key={indx}
//       onClick={() => toggleOption(option)}
//       className={`ans-buttons ${selectedOptions.includes(option) ? 'selected' : ''}`}
//     >
//       {option}
//     </div>
//   ))}
//   <button
//     className='input-submit-button'
//     onClick={() => { onAns(selectedOptions); setSelectedOptions([]); }}
//     disabled={selectedOptions.length === 0}
//   >
//     <TelegramIcon
//       sx={{
//         fontSize: '50px',
//         cursor: selectedOptions.length > 0 ? 'pointer' : 'not-allowed',
//         color: selectedOptions.length > 0 ? '#000' : '#ccc',
//         transition: 'color 0.3s ease',
//         '&:hover': {
//           color: selectedOptions.length > 0 ? 'green' : '#ccc'
//         }
//       }}
//     />
//   </button>
// </div>