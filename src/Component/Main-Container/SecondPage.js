import React from 'react'
import InputElement from '../InputElement'
import { education, occupation } from '../Utils/Constants'

const SecondPage = ({nameOccupation,nameEducation,namePincode,nameAnnualIncome, Occupation,Education,Pincode,AnnualIncome,handleInputChange}) => {
  return (
    <div>
        <InputElement type="Select" optionData={education} label="Educational Qualification*" name={nameEducation} value={Education} func={handleInputChange} />
        <InputElement type="Select" optionData={occupation} label="Occupation*" name={nameOccupation} value={Occupation} func={handleInputChange} />
        <InputElement type="Input" label="Pincode*" name={namePincode} value={Pincode} func={handleInputChange} />
        <InputElement type="Input" label="Annual Income*" name={nameAnnualIncome} value={AnnualIncome} func={handleInputChange} />
    </div>
  )
}

export default SecondPage