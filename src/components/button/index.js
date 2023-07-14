import React from 'react';

export const Button = ({ name, onClick }) => {
  return (
    <button onClick={onClick} className={"buttons"} name={name} > {name} </button>
  )
}