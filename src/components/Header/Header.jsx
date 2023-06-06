import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <section className='h-wrapper'>
       <div className='h-container paddings flexCenter innerWidth'>
    
        <img className='img' src="Logo.png" alt="" />
        <div className='h-list flexCenter'>
            <a href="">Home</a>
            <a href="">Cakes</a>
            <a href="">Donuts</a>
            <a href="">Cookies</a>
            <button className='button'>Contact us</button>
            
        </div>
        </div>
                
    </section>
  )
}

export default Header
