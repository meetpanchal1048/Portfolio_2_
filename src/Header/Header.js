import React from 'react'
import Image from './blurry-gradient-haikei.svg'
import { useState, useEffect } from 'react';
import './HeaderApp.css'


export const Header = () => {
  return (
    <div>
      <div class="card text-bg-dark">
        <img src={Image} class="card-img" alt="..."/>
          <div class="card-img-overlay">
            <h1 class="card-text">Hey,</h1>
            <p class="card-text">I am Meet Panchal</p>
            <p class="card-text"><small>The Modern Day Developer</small></p>
            <p class="card-text"><small>Want to connect <a href='#connect' className='header-links'>click here.</a></small></p>
          </div>
      </div>
    </div>
  )
}

// ---------------------------------------Styling--------------------------------------

// -----------------------------------------------------------------------------------