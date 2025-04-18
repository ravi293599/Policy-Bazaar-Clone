import React, {useEffect, useState} from 'react'
//import InputElement, { CustomRadio, RadioElement } from '../InputElement'
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

const ProductRight = ({nameInvesting,nameName,nameGender,nameDOB,nameMobile,nameEmail,nameResdStatus,nameOccupation,nameEducation,namePincode,nameAnnualIncome,investing,Fullname,gender,DOB,mobile,email,resdStatus,Occupation,Education,Pincode,AnnualIncome,handleSubmit,handleInputChange,pageID}) => {
  const [isVisible, setIsVisible] = useState(false);
    const listenToScroll = () =>{
        let heightToHidden = 200;
        const winScroll = 
        document.body.scrollTop || document.documentElement.scrollTop;
        // console.log(winScroll);
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
          {
            pageID !== 1 ? 
            <FirstPage nameInvesting={nameInvesting} nameName={nameName} nameGender={nameGender} nameDOB={nameDOB} nameMobile={nameMobile} nameEmail={nameEmail} nameResdStatus={nameResdStatus} investing={investing} Fullname ={Fullname} gender={gender} DOB={DOB} mobile={mobile} email={email} resdStatus={resdStatus} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />:
          <SecondPage nameOccupation={nameOccupation} nameEducation={nameEducation} namePincode={namePincode} nameAnnualIncome={nameAnnualIncome} Occupation={Occupation} Education={Education} Pincode={Pincode} AnnualIncome={AnnualIncome} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
          }
        </div>
        <div className='stickyBtn'>
          <div className={!isVisible ? "total-amt-btn-wrapper": "total-amt-btn-wrapper sticky-amt-btn"}>
            <div className='total-left'>
              <div className='amount-info'>
                <div className='amount-content'>Total Maturity Amount</div>
                <div className='amount-value'><span className='rupee'></span> 91.7 L <span className='moreinfo'><img src="https://static.pbcdn.in/e2e-cdn/assets/icons/icon-info-regular.svg" alt="Info" width="16" height="18" />More info</span></div>
              </div>
              <div className='amount-smallText'>
              *Based upon point to point returns of 10 years
              </div>
            </div>
            <div className='total-right'>
              <button className='btn btn-primary' onClick={handleSubmit}>{pageID === 1? "Review Details": "Proceed"}</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductRight