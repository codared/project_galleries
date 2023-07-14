import { useState } from 'react';
import { Button } from './button';
import { SearchIcon } from './searchIcon';
import './Head.css'

const Head = ({onSubmit}) => {
  const  [input, setInput] = useState('');

  const  [result, setResult] = useState('');

  const handleFormSubmit = (event) => {
    if(input !== ""){
      event.preventDefault();
      onSubmit(input);
      setResult(input);
    }
  }

  const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  }

  const handleClick = (value) => {
    setInput(value);
    setResult(value);
    onSubmit(value);
  }

  return  (
    <div className="search-container">
      <div className="snap-shot">
        SnapShot 
      </div>
      
      <div className="input">
        <div className="form-container">
          <form onSubmit={handleFormSubmit} >
            <input placeholder="Search..." value={input} onChange={handleChange} className="search" />
          </form>
        </div>

        <div>
          <button onClick={handleFormSubmit} className='icon-container'>
            <SearchIcon />
          </button>
        </div>
      </div>

      <div className="button-container">
        <Button onClick={() => handleClick("Mountain")} name="Mountain"/>
        <Button onClick={() => handleClick("Beaches")} name="Beaches"/>
        <Button onClick={() => handleClick("Birds")} name="Birds"/>
        <Button onClick={() => handleClick("Food")} name="Food"/>
      </div>
  
      <div className="pics-alt">
        {result} Pictures
      </div>
      
    </div>
  )
}

export default Head;