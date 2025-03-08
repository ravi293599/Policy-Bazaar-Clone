import React from 'react'
import "./BottomSection.css"
import upsideMarket from "../../Images/upsideMarket.svg"
import lifeCover from "../../Images/lifeCover.svg"
import taxSaving from "../../Images/taxSaving.svg"
import ageInvesting from "../../Images/ageInvesting.svg"
import minimumInvest from "../../Images/minimumInvest.svg"
import numberYears from "../../Images/numberYears.svg"
import regularPay from "../../Images/regularPay.svg"
import limitedPay from "../../Images/limitedPay.svg"

const BottomSection = () => {
  return (
    <>
    <div className='BottomSection'>
        <div className="card-section">
            <div className='Heading'>
                <h2>Benefits available under this plan</h2>
                <div className='Heading-Border'></div>
            </div>
            <div className="card-wrapper">
                <div className='card'>
                    <div className='card-icon'>
                        <img src={upsideMarket} alt="Market" />
                    </div>
                    <div className='card-content'>
                        <h3>Market Upside</h3>
                        <p>Get benefit of market linked returns</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-icon'>
                        <img src={lifeCover} alt="Life cover" />
                    </div>
                    <div className='card-content'>
                        <h3>Inbuilt Life Cover</h3>
                        <p>12 L life cover throughout the policy duration</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-icon'>
                        <img src={taxSaving} alt="tax saving" />
                    </div>
                    <div className='card-content'>
                        <h3>Tax Benefits</h3>
                        <p>You get tax benefits under Section 80C and no tax on returns under Section 10(10D)</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="card-section">
            <div className='Heading'>
                <h2>Investment Criteria</h2>
                <div className='Heading-Border'></div>
            </div>
            <div className="card-wrapper">
                <div className='card'>
                    <div className='card-icon'>
                        <img src={ageInvesting} alt="Investment" />
                    </div>
                    <div className='card-content'>
                        <h3>Age to start investing</h3>
                       <div>
                       <div className='list'>
                            <div className='List-title'>
                            Minimum
                            </div>
                            <div className='List-value'>  
                            18 years
                            </div>
                        </div>
                        <div className='list'>
                            <div className='List-title'>
                            Maximum:
                            </div>
                            <div className='List-value'>  
                            60 years
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-icon'>
                        <img src={minimumInvest} alt="Minimum investment" />
                    </div>
                    <div className='card-content'>
                        <h3>Minimum amount to invest</h3>
                        <div>
                       <div className='list'>
                            <div className='List-title'>
                            Monthly
                            </div>
                            <div className='List-value'>  
                            <span className='rupee-symbol'>&#8377;</span>4,000
                            </div>
                        </div>
                        <div className='list'>
                            <div className='List-title'>
                            Quarterly
                            </div>
                            <div className='List-value'>  
                            <span className='rupee-symbol'>&#8377;</span>12,000
                            </div>
                        </div>
                        <div className='list'>
                            <div className='List-title'>
                            Half Yearly
                            </div>
                            <div className='List-value'>  
                            <span className='rupee-symbol'>&#8377;</span>24,000
                            </div>
                        </div>
                        <div className='list'>
                            <div className='List-title'>
                            Annually
                            </div>
                            <div className='List-value'>  
                            <span className='rupee-symbol'>&#8377;</span>48,000
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-icon'>
                        <img src={numberYears} alt="Year to Mature" />
                    </div>
                    <div className='card-content'>
                        <h3>Number of years after which your investment will mature</h3>
                        <div>
                       <div className='list'>
                            <div className='List-title'>
                            Minimum
                            </div>
                            <div className='List-value'>  
                            10 years
                            </div>
                        </div>
                        <div className='list'>
                            <div className='List-title'>
                            Maximum:
                            </div>
                            <div className='List-value'>  
                            30 years
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="card-section">
            <div className='Heading'>
                <h2>Number of years you can invest</h2>
                <div className='Heading-Border'></div>
            </div>
            <div className="card-wrapper">
                <div className='card'>
                    <div className='card-icon'>
                        <img src={regularPay} alt="Regular Pay" />
                    </div>
                    <div className='card-content'>
                        <h3>Regular Pay</h3>
                        <p>You invest throughout the policy duration.</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-icon'>
                        <img src={limitedPay} alt="Limited Pay" />
                    </div>
                    <div className='card-content'>
                        <h3>Limited Pay</h3>
                        <p>Invest for a few years and stay invested for the entire policy duration Choose from 5,7 ,10, 15 and 20 Years</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='Footer'>
        <div>
            <p>Policybazaar Insurance Brokers Private Limited (formerly known as Policybazaar Insurance Web Aggregator Private Limited)</p>
            <p>CIN: U74999HR2014PTC053454 | Registered Office - Plot No.119, Sector - 44, Gurgaon, Haryana – 122001</p>
            <p>Policybazaar is now registered as a Direct Broker</p>
            <a href='https://www.policybazaar.com/legal-and-admin-policies/#license' target="_blank">Registration No. 742, Registration Code No. IRDA/ DB 797/ 19, Valid till 09/06/2024, License category- Direct Broker (Life & General)</a>
            <p>Visitors are hereby informed that their information submitted on the website may be shared with insurers.</p>
            <p>Product information is authentic and solely based on the information received from the insurers.</p>
            <p>©️ Copyright 2008-2023 policybazaar.com. All Rights Reserved.</p>
        </div>
    </div>
    </>
  )
}

export default BottomSection