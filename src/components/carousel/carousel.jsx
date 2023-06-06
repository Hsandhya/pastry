import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import data from '../../utils/slider.json'
import { slidersettings } from '../../utils/common'
import './carousel.css'

const Carousel = () => {
  return (
    <section className='c-wrapper'>
      <div className="c-container paddings innerWidth flexCenter">
         <div className="c-head flexColCenter">
           <span className='c1'>Best Choice </span>
           <span className='c2'>Our Special Dishes</span>
           
         </div>

         <Swiper {...slidersettings}>
              {
                data.map((card,i)=>(
                   <SwiperSlide key={i}>
                     <div className="c-card flexColStart">
                      <img src={card.image} alt="" />
                     
                      <span className='c-price  flexColStart'>
                      <span>
                        <span style={{color:"pink"}}>$</span>{card.price}
                        </span>
                      </span>

                      <span className='col-1'>{card.name}</span>
                      <span className='col-2'>{card.detail}</span>
                      </div>     




                   </SwiperSlide>

                ))
              }
         </Swiper>


      </div>
    </section>
  )
}

export default Carousel
