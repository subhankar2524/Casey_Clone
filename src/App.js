import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Question from './components/Questions/Question';
import "./App.css";
import Drawer from '@mui/material/Drawer';
import TelegramIcon from '@mui/icons-material/Telegram';
// static qs data
import { QUESTIONS } from './util/questions';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

function App() {

  const [open, setOpen] = useState(false);
  // state for checking the question index
  const [currentQuestionIndex, setCurrectQuestionIndex] = useState(0);
  const [allDone, setAllDone] = useState(false);
  // const [answers, setAnswers] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  // state management for render function handle
  const [childRenderFunction, setChildRenderFunction] = useState(null);


  // handle ans and showing the data locally
  const [answers, setAnswers] = useState([]);


  // for handling ans we can change it if we need to check the ans are correct or wrong. . .
  const handleAns = (ans) => {

    console.log(currentQuestionIndex);
    if (currentQuestionIndex >= QUESTIONS.length) {
      return;
    }

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrectQuestionIndex(currentQuestionIndex + 1);
    }

    if(Array.isArray(ans).length === 0){ 
      return; 
    }

    setAnswers([...answers, { question: QUESTIONS[currentQuestionIndex], ans }])
  }
  console.log(currentQuestionIndex)

  // const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    console.log('I am being clicked');
    setOpen(newOpen);
  };


  // currently not needed
  const handleRenderFunction = (childFunction) => {
    setChildRenderFunction(childFunction)
  }

  const renderInputs = () => {
    const question = QUESTIONS[currentQuestionIndex];

    switch (question.type) {
      case "single-answer":
        return (
          <div className=''style={{width: '100%'}}>
            <div style={{color: 'rgb(0, 80, 0)', fontWeight: '700', fontSize: '20px', marginBottom: '1rem', backgroundColor: 'white'}}>Accept ALL texts and numbers. &nbsp;pressing "Enter" DOES NOT submit answer.</div>
          <div className='input-section-wrapper show'>
            <textarea
              className='single-ans-input'
              placeholder='Type your ans...'
              rows='1'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className='input-submit-button'>
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
                    handleAns(inputValue);
                    setInputValue('');
                  }
                }}
              />
            </button>
          </div>
          </div>
        )
      case "mcq":
        return question.options.map((option, indx) => (
          <div className='show' key={indx}>
            <div onClick={() => handleAns(option)} className='ans-buttons'>{option}</div>
          </div>
        ));
      case 'mcq-multi':
        return (
          <>
            <button className='see-options-button' onClick={toggleDrawer(true)}>See Options</button>

            <Drawer open={open} anchor='bottom'>
              <div className='drawer-header'>
                <div onClick={toggleDrawer(false)} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'green', width: 'fit-content' }}><ExpandMoreRoundedIcon />Collapse </div>
                <div className='drawer-header-text'>Which Data Should the team gather for this purpose ?</div>
                <div className='draywer-header-border'></div>
              </div>
              <div className='option-container' style={{ zIndex: 1000 }}>
                <div className='option-grid'>
                  {question.options.map((option, indx) => (
                    <div
                      key={indx}
                      onClick={() => toggleOption(option)}
                      className={`ans-buttons ${selectedOptions.includes(option) ? 'selected' : ''} multi-select`}
                    >
                      {option}
                    </div>
                  ))}
                </div>
                <div className='option-actions'>
                  <button onClick={() => setSelectedOptions([])} className='option-action-button'>Clear Selection</button>
                  <button onClick={() => { handleAns(selectedOptions); setOpen(false); setSelectedOptions([]) }} className='option-action-button'>Done</button>
                </div>
              </div>
            </Drawer>



          </>
        );


      default:
        return null;
    }
  }

  const toggleOption = (option) => {
    setSelectedOptions((prevSelectedOption) =>
      prevSelectedOption.includes(option) ? prevSelectedOption.filter((o) => o !== option) : [...prevSelectedOption, option]
    )
  }
  console.log(childRenderFunction);
  return (
    <div className='outer-margin'>
      <div className='hor-border right'></div>
      <div className='app-wrapper'>
        <div className='app-items-nav'><Navbar /></div>
        <div className='app-items-questions'><Question question={QUESTIONS[currentQuestionIndex]} onAns={handleAns} allAnswered={allDone} answers={answers} sendToParent={handleRenderFunction} /></div>
        <div className='app-itesm-ans'>
          {renderInputs()}
        </div>
      </div>
      <div className='hor-border left'></div>
    </div>

  )
}

export default App