import React from 'react'
import "./About.css"

const Langcards = ({nameOfProgram,imageOfProgram}) => {
  return (
    <div className='languagecard'>
      <img src={imageOfProgram} alt="foto" />
      <p>{nameOfProgram}</p>
      </div>
  )
}

export default Langcards