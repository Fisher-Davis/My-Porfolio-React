import React from 'react'
import {FaHeart} from 'react-icons/fa'
import './Footer.css'
export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-parent'></div>
        <div className='footer-message-container'>
          <div className='footer-message'>
            <h5> Made with <FaHeart/> and Fisher</h5>
          </div>
        </div>

    </div>
  )
}
