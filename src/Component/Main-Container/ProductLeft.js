import React from 'react';
import InputElement from '../InputElement';
import { years } from '../Utils/Constants';

const ProductLeft = ({nameInvestAmt,namePayFor,nameWithdraw,investAmt,payFor,withdrawAfter,handleInputChange}) => {
    
  return (
    <div className='Master-div'>
        <div className="top-box">
            <div className='logo'>
                <img src="https://static.pbcdn.in/e2e-cdn/assets/logos/bajaj-allianz-life-logo.svg" width="100" alt="client logo" />
            </div>
            <div className='planName'>
                <h3>Smart Wealth Goal</h3>
                <a href="https://www.policybazaar.com/">
                    <img src="https://static.pbcdn.in/e2e-cdn/assets/icons/icon-know-your-plan.svg" alt="notepad" />
                    Know Your Plan in 2 mins
                </a>
            </div>
        </div>
        <div className='plan-details-wrapper'>
            <form>
                <InputElement type="Input" label="Investment Amount" name={nameInvestAmt} value={investAmt} func={handleInputChange} />
                <InputElement type="Select" optionData={years} label="Pay For" name={namePayFor} value={payFor} func={handleInputChange} />
                <InputElement type="Select" optionData={years} label="Withdraw After" name={nameWithdraw} value={withdrawAfter} func={handleInputChange} />
            </form>
            <div className='plan-benefits'>
                <div className='plan-feature'>
                    <div className='icon'>
                        <img src="https://static.pbcdn.in/e2e-cdn/assets/icons/icon-calender-solid.svg" alt="feature icon" />
                    </div>
                    <div className='feature-content'>
                        <h4>30 Days</h4>
                        <p>Easy Refund Policy</p>
                    </div>
                </div>
                <div className='plan-feature'>
                    <div className='icon'>
                        <img src="https://static.pbcdn.in/e2e-cdn/assets/icons/kyp/icon-loyalty.svg" alt="feature icon" />
                    </div>
                    <div className='feature-content'>
                        <h4>12 L Life Cover</h4>
                        <p>Inbuilt Life Cover<sup>*</sup></p>
                    </div>
                </div>
                <div className='plan-feature'>
                    <div className='icon'>
                        <img src="https://static.pbcdn.in/e2e-cdn/assets/icons/kyp/icon-tax-saving.svg" alt="feature icon" />
                    </div>
                    <div className='feature-content'>
                        <h4>Tax Savings<sup>#</sup></h4>
                        <p>Under Section 80C And Sec 10(10 D)</p>
                        <p className='smallText'><sup>#</sup>Tax benefits are subject to change in tax laws</p>
                    </div>
                </div>
            </div>
            <div className="certified-partner">
                <div className="five-star-image">
                    <img  src="https://static.pbcdn.in/e2e-cdn/assets/icons/icon-5-star-partner.svg" alt="5 Star Icon" width="80" height="80" />
                </div>
                <div className="certified-partner-info">
                    <div className="trust-txt">
                        <span>trust</span>
                    </div>
                        Policybazaar is Premium Partner for Bajaj Allianz Life 
                    <div className="view-btn">
                        View certificate
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductLeft