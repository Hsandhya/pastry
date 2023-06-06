import React, {useState} from 'react'
import './Middle.css'
import { Accordion,AccordionItem,AccordionItemButton,AccordionItemPanel,AccordionItemState,AccordionItemHeading } from 'react-accessible-accordion';
import{MdOutlineArrowDropDown} from 'react-icons/md';
import 'react-accessible-accordion/dist/fancy-example.css';
import data from '../../utils/accordion';

const Middle = () => {
  return (
    <section className='m-wrapper'>
        <div className="m-container flexCenter paddings innerWidth">
            <div className="m-left">
              <div className="img-container"> 
              <img src="Middlepic1.jpg" alt="" />
              </div> 
            </div>
            <div className="m-right flexColStart">
            <span className="pinkText">
                            Our Value
                </span>
                <span className='Text'>
                            Value we give to you
                </span>
                    <span className='Text2'>
                            We believe a good place to live can make your life better<br />
                            We always ready to help by providing the best services for you!!!
                    </span>
                    <Accordion className='accordion'
          allowMultipleExpanded={false}
          preExpanded={[0]}>
            {
              data.map((item,i) => {
                const [className, setClassName] = useState(null)
                return(
                  <AccordionItem className='accordionItem' key={i} uuid={i}>
                    <AccordionItemHeading>
                     
                      <AccordionItemButton className='flexCenter accordionButton'>

                    <AccordionItemState>
                      {({expanded})=>expanded ? setClassName("expanded") : setClassName("collapsed")}
                    </AccordionItemState>



                    <div className="flexCenter icon">{item.icon}</div>

                    <span className="primaryText">
                      {item.heading}
                    </span>
                    <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                    </div>
                    </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryText">
                        {item.detail}
                      </p>
                    </AccordionItemPanel>


                  </AccordionItem>
                )
              })
            }
          </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Middle
