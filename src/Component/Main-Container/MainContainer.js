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
    resdStatus: ""
  };
  const navigate = useNavigate();
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
    navigate("/review")
  }
  return (
    <div className='Main-div'>
        <div className='left-container'>
            <ProductLeft nameInvestAmt="investAmt" namePayFor="payFor" nameWithdraw="withdrawAfter" investAmt={formData.investAmt} payFor={formData.payFor} withdrawAfter={formData.withdrawAfter} handleInputChange={handleInputChange}  />
        </div>
        <div className='right-container'>
            <ProductRight nameInvesting="investing" nameName="Fullname" nameGender="gender" nameDOB="DOB" nameMobile="mobile" nameEmail="email" nameResdStatus="resdStatus" investing={formData.investing} Fullname={formData.name} gender={formData.gender}  DOB={formData.DOB} mobile={formData.mobile} email={formData.email} resdStatus={formData.resdStatus} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
        </div>
    </div>
  )
}

export default MainContainer