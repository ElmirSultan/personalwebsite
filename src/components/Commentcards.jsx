import React from 'react'
import { Link } from 'react-router-dom'
import "./Comments.css"
const Commentcards = ({nameOfPerson,imageOfPerson,commentOfPerson,instagramOfPerson,instagramName}) => {
  return (
    <div className='commentcards'>
        <div className="top-side">
        <div className="imageofPerson">
                <img src={imageOfPerson} alt="userfoto" className='imageOfPerson'  />
            </div>
            <div className="name">
                <h4>{nameOfPerson}</h4>
            </div>
            <div className='link'>
            <Link to={instagramOfPerson} target='_blank'><i className="bi bi-instagram"><p>{instagramName}</p> </i></Link>
            </div>
            
        </div>
        <div className="bottom-side">
            <p>
                {commentOfPerson}
            </p>
        </div>
    </div>
  )
}

export default Commentcards