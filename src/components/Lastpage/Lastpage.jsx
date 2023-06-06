import React from 'react'
import './Lastpage.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from  'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'

const Lastpage = () => {
  return (
    <section className="l-wrapper">
        <div className="l-container paddings innerWidth flexCenter">
            <div className="l-left flexColStart">
                  <span className='first'>Our Contacts</span>
                  <span className='second'>Easy to contact us</span>
                  <span className='third'>We always ready to help  providing the best services</span>
               
               <div className="contactmode">
                <div className=" flexStart row">
                    <div className="flexColStart mode">
                        <div className="flexStart">
                            <div className="flexColStart Icon">
                                <MdCall size={25} />

                            </div>

                            <div className=" flexColStart detail">
                                <span className='T1'>Call</span>
                                <span className='T2'>123 456 789</span>
                            </div>
                            
                
                        </div>
                        <div className="flexCenter b1">Call Now</div>
                    </div>

                    
                    <div className="flexColStart mode">
                        <div className="flexStart">
                            <div className="flexCenter Icon">
                            <BsFillChatDotsFill size={25}/>

                            </div>

                            <div className=" flexColStart detail">
                                <span className='T1'>Chat</span>
                                <span className='T2'>123 456 789</span>
                            </div>
                            
                
                        </div>
                        <div className="flexCenter b1">Chat Now</div>
                    </div>
            
                </div>
               </div>

               <div className=" flexStart row">
                    <div className="flexColStart mode">
                        <div className="flexStart">
                            <div className="flexCenter Icon">
                                <AiOutlineWhatsApp size={25} />

                            </div>

                            <div className=" flexColStart detail">
                                <span className='T1'>Whatsapp</span>
                                <span className='T2'>123 456 789</span>
                            </div>
                            
                        </div>
                        <div className="flexCenter b1">Text Here</div>
                    </div>

                    
                    <div className="flexColStart mode">
                        <div className="flexStart">
                            <div className="Icon">
                                <AiOutlineInstagram size={25} />

                            </div>

                            <div className=" flexColStart detail">
                                <span className='T1'>Instagram   </span>
                                <span className='T2'>San_Pastry</span>
                            </div>
                           
                        </div>
                        <div className="flexCenter b1">Follow Me</div>
                    </div>
                
                </div>

            </div>

            <div className="l-right">
                <div className="image">
                    <img src="lastpic.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Lastpage
