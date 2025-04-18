import React from 'react'
import InputElement, { CustomRadio, RadioElement } from '../InputElement'

const FirstPage = ({nameInvesting,nameName,nameGender,nameDOB,nameMobile,nameEmail,nameResdStatus,investing,Fullname,gender,DOB,mobile,email,resdStatus,handleSubmit,handleInputChange}) => {
  return (
    <div>
          <div className='custom-wrapper'>
            <div className='Investing-for'>
              <label>You are investing for</label>
              <span className='question-mark'>?</span>
            </div>
            <CustomRadio fieldValue="Yourself" name={nameInvesting} func={handleInputChange} />
            <CustomRadio fieldValue="Join Life" name={nameInvesting} func={handleInputChange} />
          </div>
          <InputElement type="Input" value={Fullname} name={nameName} label="Your Full Name" placeholder="Your Full Name" func={handleInputChange} />
          <br/>
          <div>
            <label className='floating-text'>Gender</label>
            <RadioElement fieldValue="Male" name={nameGender} func={handleInputChange} />
            <RadioElement fieldValue="Female" name={nameGender} func={handleInputChange} />
          </div>
          <InputElement type="Date" label="Date Of Birth" placeholder="Your Full Name" name={nameDOB} value={DOB} func={handleInputChange} />
          <InputElement type="Input" label="Mobile Number" placeholder="Mobile Number" name={nameMobile} value={mobile} func={handleInputChange} />
          <InputElement type="Email" label="Email Address" placeholder="Email Address" name={nameEmail} value={email} func={handleInputChange} />
          <InputElement type="Input" label="Residential Status" placeholder="Residential Status" name={nameResdStatus} value={resdStatus} func={handleInputChange} />
          <div className='whatsapp-update'>
            <img src="https://static.pbcdn.in/e2e-cdn/assets/icons/icon-whatsapp-solid.svg" alt="whatsapp icon" />
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
  )
}

export default FirstPage