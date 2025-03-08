import React, { useEffect, useState } from 'react'
import logo from "../Images/policybazaar-logo.svg"
import Download from "../Images/download-icon.svg"
import Call from "../Images/calling-icon.svg"
import headphone from "../Images/headphone-icon.svg"
import telephone from "../Images/telePhoneIcon.svg"
import GlobalCall from "../Images/global-call-icon.svg"
import { useDetectClickOutside } from 'react-detect-click-outside';

const Header = () => {
    const [isActive, setIsActive] = useState(false)
    const ExpertShow = () =>{
        setIsActive(current => !current)
    }
    const ExpertClose = () =>{
        setIsActive(false)
    }
    const ref = useDetectClickOutside({ onTriggered: ExpertClose });
  return (
    <div className='Header'>
        <div className='logo'>
            <img src="https://static.pbcdn.in/e2e-cdn/assets/logos/policybazaar-logo.svg" alt="logo" />
        </div>
        <div class="rightMenu">
            <div>
                <a className='downloadLink'>
                <img src={Download} alt="Download Icon" />
                Download Brochure
                </a>
            </div>
            <div>
                <a className='downloadLink'>
                <img src={Download} alt="Download Icon" />
                Download Benefit Illustrations
                </a>
            </div>
            <div onClick={ExpertShow} ref={ref}>
                <a className='talkToExpert'>
                <img src={Call} alt="Download Icon" />
                Talk to an Expert
                </a>
            </div>
            <div className={isActive ? 'talkExpertPopUpBody show': 'talkExpertPopUpBody'}>
                <div className='topBox'>
                You can reach us directly on the below toll-free numbers
                </div>
                <div className='list'>
                    <ul>
                        <li>
                        <img src={headphone} alt="phone icon" />
                        <div className='list-text'>
                            <p>Have Not Paid Yet (Sales)</p>
                            <a href='tel:1800-419-7717'>1800-419-7717</a>
                        </div>
                        </li>
                        <li>
                        <img src={telephone} alt="phone icon" />
                        <div className='list-text'>
                            <p>Have Already Paid (Service)</p>
                            <a href='tel:1800-258-5970'>1800-258-5970</a>
                        </div>
                        </li>
                        <li>
                        <img src={GlobalCall} alt="phone icon" />
                        <div className='list-text'>
                            <p>For NRI’s</p>
                            <a href='tel:+91 124-6656507'>+91 124-6656507</a>
                        </div>
                        </li>
                    </ul>
                </div>
                <div className='bottomBox'>
                Office Hours - 10:00 AM to 09:00 PM (IST)<br/> Use Registered No. Only*
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header