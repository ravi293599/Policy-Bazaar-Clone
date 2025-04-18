import { useDispatch, useSelector } from "react-redux"
import Header from "../Header"
import "./ReviewPage.css"
import { addData } from "../Store/FormSlice";
import { useEffect, useState } from "react";

const ReviewPage = () =>{
    const dispatch = useDispatch();
    const [addDetailActive, setAddDetailActive] = useState(false);
    const [declarActive, setDeclarActive] = useState(false);
    let myData = useSelector(state => state.UserData);
    if(myData === null){
        const savedData = localStorage.getItem("userData")
        dispatch(addData(savedData));
        console.log(savedData);
    }
    useEffect(()=>{
        
    },[myData])
    //myData = useSelector(state => state.UserData);
    console.log(myData);
    return(
        <>
        <Header />
        {
            myData!==null &&
            <div className="review-wrapper">
            <div className="review-header">
                <div className="clientLogo mobileNone">
                    <img src="https://static.pbcdn.in/e2e-cdn/assets/logos/bajaj-allianz-life-logo.svg" alt="Client Logo" />
                </div>
                <div className="clientPrdName">
                Smart Wealth Goal
                </div>
            </div>
            <div className="review-body">
                <div className="review-title">
                    <h2>Review below details before proceeding</h2>
                    <p>These cannot be changed at a later stage</p>
                </div>
                <div className="detail-section">
                    <div className="details">
                        <div className="review-field">
                            <span className="detail-label">Name</span>
                            <h3 className="detail-text">{myData.Fullname}</h3>
                        </div>
                    </div>
                    <div className="details">
                        <div className="review-field">
                            <span className="detail-label">Date of Birth</span>
                            <h3 className="detail-text">{myData.DOB}</h3>
                        </div>
                    </div>
                    <div className="details">
                        <div className="review-field">
                            <span className="detail-label">Email</span>
                            <h3 className="detail-text">{myData.email}</h3>
                        </div>
                    </div>
                    <div className="details">
                        <div className="review-field">
                            <span className="detail-label">Mobile Number</span>
                            <h3 className="detail-text">{myData.mobile}</h3>
                        </div>
                    </div>
                </div>
                {/* <!--Additional Details section added--> */}
                <div className="accordion-box secondary-accordion-box" id="additionalDetails" onClick={()=>setAddDetailActive(!addDetailActive)}>
                    <div className="accordion-head">
                        <h2>Additional Details</h2>
                        <img src="https://static.pbcdn.in/e2e-cdn/assets/icons/icon-arrow-down-grey.svg" alt="arrow-gray" />
                    </div>
                   {addDetailActive &&
                     <div className="accordion-body">
                     <div className="reviewAllDetails">
                         <div className="d-flex align-items-center">
                             <div className="reviewTitle">
                                 Personal Info
                             </div>
                         </div>
                         <div className="reviewFormDetails">
                             <ul>
                                 <li>
                                     <div className="reviewFormLeftDetail">Occupation</div>
                                     <div className="reviewFormRightDetail">{myData.Occupation}</div>
                                 </li>
                                 <li>
                                     <div className="reviewFormLeftDetail">Education</div>
                                     <div className="reviewFormRightDetail">{myData.Education}</div>
                                 </li>
                                 <li>
                                     <div className="reviewFormLeftDetail">PIN Code</div>
                                     <div className="reviewFormRightDetail">{myData.Pincode}</div>
                                 </li>
                                 {/* <li>
                                     <div className="reviewFormLeftDetail">City</div>
                                     <div className="reviewFormRightDetail">Delhi</div>
                                 </li> */}
                                 <li>
                                     <div className="reviewFormLeftDetail">Nationality</div>
                                     <div className="reviewFormRightDetail">{myData.resdStatus}</div>
                                 </li>
                             </ul>
                         </div>
                     </div>
                     <div className="reviewAllDetails">
                         <div className="d-flex align-items-center">
                             <div className="reviewTitle">
                                 Profile Details
                             </div>
                         </div>
                         <div className="reviewFormDetails">
                             <ul>
                                 <li>
                                     <div className="reviewFormLeftDetail">Gender</div>
                                     <div className="reviewFormRightDetail">{myData.gender}</div>
                                 </li>
                                 {/* <li>
                                     <div className="reviewFormLeftDetail">Tobacco User</div>
                                     <div className="reviewFormRightDetail">No</div>
                                 </li> */}
                             </ul>
                         </div>
                     </div>
                     <div className="reviewAllDetails">
                         <div className="d-flex align-items-center">
                             <div className="reviewTitle">
                                 Plan Info
                             </div>
                         </div>
                         <div className="reviewFormDetails">
                             <ul>
                                 <li>
                                     <div className="reviewFormLeftDetail">Policy Term</div>
                                     <div className="reviewFormRightDetail">{myData.withdrawAfter}</div>
                                 </li>
                                 <li>
                                     <div className="reviewFormLeftDetail">Pay for</div>
                                     <div className="reviewFormRightDetail">{myData.payFor}</div>
                                 </li>
                             </ul>
                         </div>
                     </div>
                 </div>
                   }
                </div>
                {/* <!--Additional Details section End--> */}
                <div className="accordion-box" onClick={() => setDeclarActive(!declarActive)}>
                    <div className="accordion-head">
                        <h2>Declarations</h2>
                        <img src="https://static.pbcdn.in/e2e-cdn/assets/icons/icon-arrow-down-grey.svg" alt="arrow-gray" />
                    </div>
                    {   
                        declarActive &&
                        <div className="accordion-body">
                        <ul className="checkoutTermsCondition detailsTermsCondition">
                            <li>
                                <span className="radioBtnAnswerTxt">
                                    <img src="https://static.pbcdn.in/e2e-cdn/assets/icons/icon-arrow-next.svg" alt="arrow" width="11" height="9" className="gray-color" /><span> I agree to opt for Auto Debit for all the future premium payments of this policy</span>
                                </span>
                            </li>
                            <li>
                                <span className="radioBtnAnswerTxt">
                                    <img src="https://static.pbcdn.in/e2e-cdn/assets/icons/icon-arrow-next.svg" alt="arrow" width="11" height="9" className="gray-color" /><span>Get Updates on <img src="https://static.pbcdn.in/e2e-cdn/assets/icons/icon-whatsapp.svg" alt="Whatsapp Icon" className="mCS_img_loaded" /> WhatsApp</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                    }
                </div>
                <div className="mt-2 checkBox declaration">
                    <label className="checkbox-label">
                        <input type="checkbox" className="hidden" />
                        <span className="checkbox-tick"></span>
                        <span className="radioBtnAnswerTxt">I Agree to the <a href="https://buylifeinsurance.policybazaar.com/Emailer/terms-conditions.html" rel="noreferrer" target="_blank">terms and conditions</a></span>
                    </label>
                </div>
            </div>
            <div className="review-total">
                <div className="total-premium">
                    <div className="totalAmountPayble">
                        Total Premium
                    </div>
                    <div className="totalAmtPremium">
                    <span className="rupee"></span>&nbsp;<span>1,531</span>&nbsp;<span className="premiumPaymentMode mop">&nbsp;Monthly</span>
                    </div>
                </div>
                <div className="btn-wrap">
                    <a href="/" className="btn secondary-btn">Edit Details</a>
                    <button type="submit" className="btn btn-primary mw-100 btn-primary-width proceedBtn">Checkout</button>
                </div>
            </div>
        </div>
        }
        </>
    )
}
export default ReviewPage