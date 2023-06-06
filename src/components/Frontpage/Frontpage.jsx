import React from 'react'
import './Frontpage.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'

const Frontpage = () => {
  return (
   <section className='front-wrapper'>
     <div className="front-container paddings flexCenter ">
        <div className="flexColStart front-left">
          <div className="front-head">
            <div className="pink-block"></div>
            <h1>Discover <br/> our Pastries</h1>

          
          </div>
            <div className="front-des flexColStart">
                <span>A HomeMade Home-Baked and Hand crafted cake.</span>
                <span>Makes any occasion feel more Joyful.</span>
                <span>The Best cake you've ever tasted!!!</span>
            </div>

            <div className="search-bar flexCenter">
                <HiLocationMarker color='white' size={25}/>
                <input type="text" />
                <button className='button'>Search</button>
            </div>

            <div className="stats flexCenter">
              <div className="stat flexColCenter">
                <span>
                  <CountUp start={40} end={80} duration={4}/> <span>+</span>
                </span>

                <span className='secondaryText'>
                    Happy Customers
                </span>
              </div>
              <div className="stat flexColCenter">
                <span>
                <CountUp start={80} end={100} duration={4}/> <span>+</span>
                </span>
                <span className='secondaryText'>
                  Pastry Varieties
                </span>
              </div>
              <div className="stat flexColCenter">
                <span>
                <CountUp start={0} end={10} duration={4}/> <span>+</span>
                </span>
                <span className='secondaryText'>
                  Awards Winnings
                </span>
              </div>
              
            </div>
        </div>

        <div className="front-right">
        <div className="image-container">
                <img src="frontPic.jpg" alt="" />
            </div>
        </div>


     </div>


   </section>
  )
}

export default Frontpage
