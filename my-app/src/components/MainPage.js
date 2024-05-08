import React from 'react'
import FancySubmitButton from './FancySubmitButton'
import './/css/button.css'; // Import your CSS file for styling

export default function MainPage() {
  return (

    <div>
      <p className='title-font'>
        <h1>Portable PT</h1>
      </p>

      <p className='ubuntu-mono-regular'>
        <h3>Want some advice on your workout?</h3>
      </p>
      <FancySubmitButton className='ubuntu-mono-regular' />
    </div>
  )
}
