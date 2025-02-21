import React from 'react'
import './input.css'

const Input = ({inputName, onChangeInput, inputRequired}) => {

  if(inputRequired === true) {
    return (
      <div className='flex justify-center input-container'>
        <input type="text" name={inputName} onChange={onChangeInput} placeholder='Ingrese su nombre' className='mt-4 mb-4 p-4 shadow-md' required/>
      </div>
    )
  }else{
    return (
      <div className='flex justify-center input-container'>
        <input type="text" name={inputName} onChange={onChangeInput} placeholder='Ingrese su nombre' className='mt-4 mb-4 p-4 shadow-md'/>
      </div>
    )
  }
}

export default Input
