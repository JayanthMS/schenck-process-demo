import { useState } from 'react'
import Arrow from '../../assets/images/arrow.svg'
import './Accordion.scss'

const Accordion = ({ title, children, showIndicator, click }) => {
  const [isActive, setIsActive] = useState(false)

  const closeAccordion = () => {
    setIsActive(!isActive)
    if (click) {
      click()
    }
  }

  return (
    <div className="accordion-item">
      <div className="accordion-section" onClick={() => closeAccordion()}>
        <label>{title}</label>
        <div>
          {showIndicator}
          {isActive ? <img className="rotated" alt="" fill="#ce1224" src={Arrow} /> : <img src={Arrow} alt=""/>}
        </div>
      </div>
      {isActive && <div className='menuList'>{children}</div>}
    </div>
  )
}

export default Accordion
