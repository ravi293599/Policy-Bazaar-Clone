import React, { useState } from 'react'
import "./MainContainer.css"
import ProductLeft from './ProductLeft'
import ProductRight from './ProductRight'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addData } from '../Store/FormSlice'

const MainContainer = () => {
  const dispatch = useDispatch();
  const initialValues = {
    investAmt: "",
    payFor: "",
    withdrawAfter: "",
    investing:"",
    Fullname: "",
    gender:"",
    DOB: "",
    mobile: "",
    email: "",
    resdStatus: "",
    Eduction: "",
    Occupation: "",
    Pincode: "",
    AnnualIncome: ""
  };
  const navigate = useNavigate();
  const [pageID, setPageID] = useState(0);
  const [formData, setFormData] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = () =>{
    //console.log(formData);
    dispatch(addData(formData));
    localStorage.setItem("userData", JSON.stringify(formData));
    setPageID(prev => prev+1)
    if(pageID === 1){
      navigate("/review")
    }
  }
  return (
    <div className='Main-div'>
        <div className='left-container'>
            <ProductLeft nameInvestAmt="investAmt" namePayFor="payFor" nameWithdraw="withdrawAfter" investAmt={formData.investAmt} payFor={formData.payFor} withdrawAfter={formData.withdrawAfter} handleInputChange={handleInputChange}  />
        </div>
        <div className='right-container'>
            <ProductRight nameInvesting="investing" nameName="Fullname" nameGender="gender" nameDOB="DOB" nameMobile="mobile" nameEmail="email" nameResdStatus="resdStatus" nameOccupation="Occupation" nameEducation="Education" namePincode="Pincode" nameAnnualIncome="AnnualIncome" investing={formData.investing} Fullname={formData.name} gender={formData.gender}  DOB={formData.DOB} mobile={formData.mobile} email={formData.email} resdStatus={formData.resdStatus} Occupation={formData.nameOccupation} Education={formData.Education} Pincode={formData.Pincode} AnnualIncome={formData.AnnualIncome} handleSubmit={handleSubmit} handleInputChange={handleInputChange} pageID={pageID} />
        </div>
    </div>
  )
}

export default MainContainer