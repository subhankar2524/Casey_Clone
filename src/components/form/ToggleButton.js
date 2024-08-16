import React, { useState } from 'react';
import './ToggleButton.css';

// ToggleButton.js
function ToggleButton({ onToggle }) {
  const [isToggled, setIsToggled] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleToggle = () => {
    if (!isDisabled) {
      setIsToggled(!isToggled);
      onToggle(isToggled);
    }
  };

  return (
    <div className='toggle-wrapper'>
      <div 
        className={`toggle-button ${isToggled ? 'on' : 'off'} ${isDisabled ? 'disabled' : ''}`} 
        onClick={handleToggle}
      >
        <div className="toggle-thumb"></div>
      </div>
    </div>
  );
}

export default ToggleButton;
