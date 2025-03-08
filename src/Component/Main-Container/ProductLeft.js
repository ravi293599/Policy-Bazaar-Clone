import React, { useState } from 'react';
import knowPlan from "../../Images/know-your-plan.svg";
import clientLogo from "../../Images/bajajLogo.png";
import calender_icon from "../../Images/calender_icon.svg";
import loyalty from "../../Images/loyalty.svg";
import taxSaving from "../../Images/tax-saving.svg";
import five_star_icon from "../../Images/five-star-partner-icon.png";
import InputElement from '../InputElement';

const ProductLeft = () => {
    
  return (
    <div className='Master-div'>
        <div class="top-box">
            <div className='logo'>
                <img src="https://static.pbcdn.in/e2e-cdn/assets/logos/bajaj-allianz-life-logo.svg" width="100" alt="client logo" />
            </div>
            <div className='planName'>
                <h3>Smart Wealth Goal</h3>
                <a href="#">
                    <img src={knowPlan} alt="notepad" />
                    Know Your Plan in 2 mins
                </a>
            </div>
        </div>
        <div className='plan-details-wrapper'>
            <form>
                <InputElement type="Input" label="Investment Amount" />
                <InputElement type="Select" label="Pay For" />
                <InputElement type="Select" label="Withdraw After" />
            </form>
            <div className='plan-benefits'>
                <div className='plan-feature'>
                    <div className='icon'>
                        <img src={calender_icon} alt="feature icon" />
                    </div>
                    <div className='feature-content'>
                        <h4>30 Days</h4>
                        <p>Easy Refund Policy</p>
                    </div>
                </div>
                <div className='plan-feature'>
                    <div className='icon'>
                        <img src={loyalty} alt="feature icon" />
                    </div>
                    <div className='feature-content'>
                        <h4>12 L Life Cover</h4>
                        <p>Inbuilt Life Cover<sup>*</sup></p>
                    </div>
                </div>
                <div className='plan-feature'>
                    <div className='icon'>
                        <img src={taxSaving} alt="feature icon" />
                    </div>
                    <div className='feature-content'>
                        <h4>Tax Savings<sup>#</sup></h4>
                        <p>Under Section 80C And Sec 10(10 D)</p>
                        <p className='smallText'><sup>#</sup>Tax benefits are subject to change in tax laws</p>
                    </div>
                </div>
            </div>
            <div className='plan-benefits'>
                <div className='platinum-partner'>
                    <img width="45" src={five_star_icon} alt="feature icon" />
                    <div className='feature-content'>
                        <h4> Policybazaar is Platinum Partner for Bajaj Allianz Life ⓘ </h4>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default ProductLeft