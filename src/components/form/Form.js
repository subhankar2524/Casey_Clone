import React, { useState, useEffect } from 'react';
import './Form.css';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';
import ToggleButton from './ToggleButton';

function Form() {
  const [promptText, setPromptText] = useState('');
  const [images, setImages] = useState([]);
  const [responseType, setResponseType] = useState('text');
  const [options, setOptions] = useState([{ text: '', weightage: 0 }]);
  const [showTextField, setShowTextField] = useState(false);
  const [isDoneDisabled, setIsDoneDisabled] = useState(true);
  const [formData, setFormData] = useState({});

  const handleSave = (event) => {
    event.preventDefault();
    const newFormData = {
      caseName: document.querySelector('.form-main input[type="text"]').value, // Extract case name
      promptText,
      images: images.map(image => ({ src: image.src, title: image.title })), // Map image data
      responseType,
      options,
      // Add critical text if applicable
      criticalText: showTextField ? document.querySelector('.form-main input[type="text"][placeholder="Enter critical text"]').value : '',
    };
    setFormData(newFormData);
    console.log('Form Data:', newFormData); // Print form data to console

    // Make API call (replace with your actual endpoint)
//     fetch('/api/save-form', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newFormData)
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('API   
//  r  esponse:', data); // Handle success or error messages
//     })
//     .catch(error => {
//       console.error('Error saving data:', error); // Handle errors
//     });
  };


  useEffect(() => {
    // Check if any option's weightage is 0
    const hasZeroWeightage = options.some(option => option.weightage === 0);
    setIsDoneDisabled(hasZeroWeightage);
  }, [options]);

  const handleTextareaChange = (event) => {
    setPromptText(event.target.value);
    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        setImages(prevImages => [...prevImages, { src: reader.result, title: '' }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleTitleChange = (index, newTitle) => {
    const updatedImages = images.map((img, imgIndex) =>
      imgIndex === index ? { ...img, title: newTitle } : img
    );
    setImages(updatedImages);
  };

  const handleDeleteImage = (index) => {
    const confirmed = window.confirm('Are you sure you want to delete this image?');
    if (confirmed) {
      setImages(images.filter((_, imgIndex) => imgIndex !== index));
    }
  };

  const handleResponseTypeChange = (event) => {
    setResponseType(event.target.value);
  };

  const handleOptionChange = (index, field, value) => {
    const updatedOptions = options.map((option, optIndex) => 
      optIndex === index ? { ...option, [field]: value } : option
    );
    setOptions(updatedOptions);
  };

  const addOption = () => {
    setOptions([...options, { text: '', weightage: 0 }]);
  };

  const removeOption = (index) => {
    setOptions(options.filter((_, optIndex) => optIndex !== index));
  };

  return (
    <div className='form-wrapper'>
      <form className='form-main'>
        <div className='form-titles'>Case name</div>
        <input 
          placeholder='Enter case name here' 
          maxLength={100} 
          className='input-field' 
          type="text"
        /> <br />
        <div className='form-titles'>Prompt</div>
        <textarea 
          className='input-field auto-resize'
          rows={2}
          maxLength={2000} 
          value={promptText}
          onChange={handleTextareaChange}
          placeholder="Enter prompt here..."
        /> <br />
        <div style={{width: '250px', cursor:'pointer', color: 'green', display:'flex', alignItems: 'center'}}>
          <AddPhotoAlternateIcon style={{margin :'0px 10px 0px 0px'}}/>
          <input 
            type="file" 
            accept="image/*" 
            multiple
            onChange={handleImageChange} 
            style={{display: 'none'}} 
            id="imageInput"
          />
          <label htmlFor="imageInput" style={{cursor: 'pointer'}}>Add image</label>
        </div>
        <div className='images'>
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img 
                src={image.src} 
                alt={`Selected ${index}`} 
              />
              <DeleteIcon 
                className="delete-icon" 
                onClick={() => handleDeleteImage(index)} 
              />
              <input 
                type="text" 
                placeholder="Enter image title" 
                value={image.title}
                onChange={(e) => handleTitleChange(index, e.target.value)}
                style={{ display: 'block', width:'200px', marginTop: '10px', border: '1px solid green', padding: '5px', borderRadius: '4px'}}
              />
            </div>
          ))}
        </div>
        <div className='form-titles'>Response Type</div>
        <select className='input-field' value={responseType} onChange={handleResponseTypeChange}>
          <option value="text">text</option>
          <option value="numeric">numeric</option>
          <option value="MCQS">MCQS</option>
          <option value="MCQM">MCQM</option>
        </select><br />
        
        {responseType === 'MCQS' && (
          <div>
            <div className='form-titles'>Options</div>
            {options.map((option, index) => (
              <div key={index} style={{display: 'flex', marginBottom:'10px'}}>
                <input 
                  type="text" 
                  placeholder="Enter option text" 
                  value={option.text}
                  onChange={(e) => handleOptionChange(index, 'text', e.target.value)}
                  className='input-field'
                  style={{}}
                />
                <div style={{ flex: 1, marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
                  <input 
                    type="range" 
                    min="0" 
                    max="5" 
                    step="1"
                    value={option.weightage}
                    onChange={(e) => handleOptionChange(index, 'weightage', e.target.value)}
                    className='slider'
                  />
                  <span style={{ marginLeft: '10px' }}>{option.weightage}</span>
                </div>
                <button className='button' type="button" onClick={() => removeOption(index)} > Delete </button>
              </div>
            ))}
            <button type="button" className='button' onClick={addOption}>Add Option</button>
            <button type="button" className='button active'  disabled={isDoneDisabled}>Done</button>
          </div>
        )}
        {responseType === 'MCQM' && (
          <div>
            <div className='form-titles'>Options</div>
            {options.map((option, index) => (
              <div key={index} style={{display: 'flex', marginBottom:'10px'}}>
                <input 
                  type="text" 
                  placeholder="Enter option text" 
                  value={option.text}
                  onChange={(e) => handleOptionChange(index, 'text', e.target.value)}
                  className='input-field'
                  style={{}}
                />
                <div style={{ flex: 1, marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
                  <input 
                    type="range" 
                    min="0" 
                    max="5" 
                    step="1"
                    value={option.weightage}
                    onChange={(e) => handleOptionChange(index, 'weightage', e.target.value)}
                    className='slider'
                  />
                  <span style={{ marginLeft: '10px' }}>{option.weightage}</span>
                </div>
                <button className='button' type="button" onClick={() => removeOption(index)} style={{ marginLeft: '10px', }}>Delete </button>
              </div>
            ))}
            <span style={{display:'flex', alignContent:'center',}}>Critical
              <ToggleButton 
                onToggle={(isToggled) => {
                  setShowTextField(!isToggled);
                }}
              />
            </span>
              {showTextField && (
                <input 
                  className='input-field'
                  type="text" 
                  placeholder="Enter critical text" 
                  style={{ marginTop:'10px'}}
                />
              )}
              <br/>
            <button type="button" className='button' onClick={addOption}>Add Option</button>
            <button type="button" className='button active'  disabled={isDoneDisabled}>Done</button>
          </div>
        )}
        
        <button className='button'>Next Prompt</button>
        <button className='button active' onClick={handleSave}>Save</button>
      </form>
    </div>
  );
}

export default Form;
