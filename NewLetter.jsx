import React from 'react'
import './NewsLetter.css'

const NewLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Ofeers on your Email !!</h1>
        <p>Suscribe to our newsletter and stay upadted</p>
        <div>
            <input type="email" placeholder='your email id'  />
            <button>Suscribe</button>
        </div>
      
    </div>
  )
}

export default NewLetter
