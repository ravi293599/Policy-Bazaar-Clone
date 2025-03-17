import React, { useState } from 'react'
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
        <div className="rightMenu">
            <div>
                <span className='downloadLink' >
                <img src="https://static.pbcdn.in/e2e-cdn/assets/icons/icon-download.svg" alt="Download Icon" width={13} height={13} />
                Download Brochure
                </span>
            </div>
            <div>
                <span className='downloadLink'>
                <img src="https://static.pbcdn.in/e2e-cdn/assets/icons/icon-download.svg" alt="Download Icon" width={13} height={13} />
                Download Benefit Illustrations
                </span>
            </div>
            <div onClick={ExpertShow} ref={ref}>
                <span className='talkToExpert'>
                <img src="https://static.pbcdn.in/e2e-cdn/assets/icons/icon-calling.svg" alt="Calling Icon" width={16} height={16} />
                Talk to an Expert
                </span>
            </div>
            <div className={isActive ? 'talkExpertPopUpBody show': 'talkExpertPopUpBody'}>
                <div className='topBox'>
                You can reach us directly on the below toll-free numbers
                </div>
                <div className='list'>
                    <ul>
                        <li>
                        <img src="https://static.pbcdn.in/e2e-cdn/assets/icons/icon-headset.svg" alt="phone icon" />
                        <div className='list-text'>
                            <p>Have Not Paid Yet (Sales)</p>
                            <a href='tel:1800-419-7717'>1800-419-7717</a>
                        </div>
                        </li>
                        <li>
                        <img src="https://static.pbcdn.in/e2e-cdn/assets/icons/icon-telephone.svg" alt="phone icon" />
                        <div className='list-text'>
                            <p>Have Already Paid (Service)</p>
                            <a href='tel:1800-258-5970'>1800-258-5970</a>
                        </div>
                        </li>
                        <li>
                        <img src="https://static.pbcdn.in/e2e-cdn/assets/icons/icon-global.svg" alt="phone icon" />
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