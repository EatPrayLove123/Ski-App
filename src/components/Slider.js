import React from 'react';
import {Button} from './Button';
import { MdOutlineSnowboarding } from 'react-icons/md';
import './Slider.css';
import '../App.css';

function Slider() {
    
    const today = new Date();
    const day = today.getDate();
    let month = today.toLocaleString('default', { month: 'long' });
    month = month.charAt(0).toLocaleUpperCase() + month.slice(1);

   
    return (
      <div className='hero-container'>
            <video src='/videos/winter.mp4' autoPlay loop muted />
            <h1>ADVENTURE BEGINS  </h1>
            <p> YOU WILL FIND THE PERFECT LOCATION </p>
            <h3 className='h3'>Today: {day} {month} </h3>
      </div>
    );
  }
  
  export default Slider;
  