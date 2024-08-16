import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline'; 
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Navbar() {
  const initialTime = 28 * 60 + 42; // Initial time in seconds (28:42)
  const [time, setTime] = useState(initialTime);
  const [isSessionEnd, setIsSessionEnd] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (time === 0) {
      setIsSessionEnd(true);
      return; // Stop the timer when time reaches zero
    }
  
    if (!isPaused) {
      const timer = setInterval(() => {
        setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
  
      return () => clearInterval(timer);
    }
  }, [time, isPaused]);

  const togglePause = () => {
    setIsPaused(prevState => !prevState);
  };
    

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const calculateProgress = () => {
    return (time / initialTime) * 100;
  };

  const getBarColor = () => {
    if (time <= 5 * 60) {
      return '#FF8C00'; // Orange color when less than 5 minutes
    }
    return '#2e7d32'; // Green color otherwise
  };

  const handleReset = () => {
    setTime(initialTime);
    setIsSessionEnd(false); // Reset the session end state
  };

  const closeSessionEndPopup = () => {
    setIsSessionEnd(false);
  };

  return (
    <div className='nav-bar-wrapper'>
      <div className='nav-back'>
        <span><ArrowBackIcon /></span>
      </div>
      <div className='nav-title'>
        Electric Motorcycles
      </div>
      <div className='nav-progress-bar'>
        <div 
          className='progress-bar-filled' 
          style={{
            width: `${calculateProgress()}%`, 
            backgroundColor: getBarColor()
          }}
        ></div>
      </div>
      <span className='progress-time'>{formatTime(time)}</span>
      <div className='nav-icons'>
        <span className='pause-icon' onClick={togglePause}>
          {isPaused ? <PlayCircleOutlineIcon /> : <PauseCircleOutlineIcon />} {/* Render PlayArrowIcon when paused */}
        </span>
        <span className='reset-icon' onClick={handleReset}><RestartAltIcon /></span>
      </div>

      {isSessionEnd && (
        <div className='session-end-popup'>
          <div className='popup-content'>
            <p>Session end</p>
            <button onClick={closeSessionEndPopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;