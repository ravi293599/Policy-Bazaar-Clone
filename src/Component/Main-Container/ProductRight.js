import React, {useEffect, useState} from 'react'
import InputElement from '../InputElement'
import whatsapp from "../../Images/whatsapp-icon.svg"

const ProductRight = () => {
  const [isVisible, setIsVisible] = useState(false);
    const listenToScroll = () =>{
        let heightToHidden = 200;
        const winScroll = 
        document.body.scrollTop || document.documentElement.scrollTop;
        console.log(winScroll);
        if(winScroll > heightToHidden){
          setIsVisible(true)
        }else{
          setIsVisible(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    });
  return (
    <div>
        <div className='multiStepForm'>
            Your Details
        </div>
        <div className='Right-container'>
          <div className='custom-wrapper'>
            <div className='Investing-for'>
              <label>You are investing for</label>
              <span className='question-mark'>?</span>
            </div>
            <label className='radio-custom'>
              <input type="radio" name="investingFor" />
              <span className='radio-label'>Yourself</span>
            </label>
            <label className='radio-custom'>
              <input type="radio" name="investingFor" />
              <span className='radio-label'>Join Life</span>
            </label>
          </div>
          <InputElement type="Input" label="Your Full Name" placeholder="Your Full Name" />
          <br/>
          <InputElement type="Radio" label="Gender" fieldValue1="Male" fieldValue2="Female" />
          <InputElement type="Date" label="Date Of Birth" placeholder="Your Full Name" />
          <InputElement type="Number" label="Mobile Number" placeholder="Mobile Number" />
          <InputElement type="Email" label="Email Address" placeholder="Email Address" />
          <InputElement type="Input" label="Residential Status" placeholder="Residential Status" />
          <div className='whatsapp-update'>
            <img src={whatsapp} alt="whatsapp icon" />
            <p>Get Updates on Whatsapp</p>
            <label className='switch'>
              <input type="checkbox" />
              <span className='slider-switch'></span>
            </label>
          </div>
          <div className='checkbox-label'>
            <label className='custom-checkbox'>
            <input type="checkbox" />
            <span className='checkbox'></span>
            <span className='checkbox-content'>
            I hereby voluntarily choose to bypass the suitability module as I have understood the benefits, terms, and conditions of the product/plan chosen by me and I further declare that the product/plan selected by me suits my requirements.
            </span>
            </label>
          </div>
        </div>
        <div className='stickyBtn'>
          <div className={!isVisible ? "total-amt-btn-wrapper": "total-amt-btn-wrapper sticky-amt-btn"}>
            <div className='total-left'>
              <div className='amount-info'>
                <div className='amount-content'>Total Maturity Amount</div>
                <div className='amount-value'><span className='rupee'>&#8377;</span> 91.7 L <span className='moreinfo'><span className='custominfo'>i</span>More info</span></div>
              </div>
              <div className='amount-smallText'>
              *Based upon point to point returns of 10 years
              </div>
            </div>
            <div className='total-right'>
              <button className='btn btn-primary'>Proceed</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductRight