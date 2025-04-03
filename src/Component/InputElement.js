import React, { useState } from 'react'
import "./InputElement.css"

const InputElement = (props) => {
  const [focus, setFocus] = useState(false)

  const handleChange = event => {
    if (event.target.value.trim().length > 0) {
      setFocus(true)
    } else {
      setFocus(false)
    }
  }
  return (
    <>
      <div className='form-field'>
        <div className='form-floating'>
          {props.type==="Input"&&<input type="text" value={props.value} name={props.name} placeholder={props.placeholder} onChange={props.func} className={focus?"floating-input has-value":"floating-input"} onFocus={()=>setFocus(true)} onBlur={handleChange} />}
          {props.type==="Number"&&<input type="number" value={props.value} name={props.name} placeholder={props.placeholder} onChange={props.func} className={focus?"floating-input has-value":"floating-input"} onFocus={()=>setFocus(true)} onBlur={handleChange} />}
          {props.type==="Email"&&<input type="email" value={props.value} name={props.name} placeholder={props.placeholder} onChange={props.func} className={focus?"floating-input has-value":"floating-input"} onFocus={()=>setFocus(true)} onBlur={handleChange} />}
          {props.type==="Date"&&<input type="date" value={props.value} name={props.name} placeholder={props.placeholder} onChange={props.func} className={"floating-input has-value"} onFocus={()=>setFocus(true)} onBlur={handleChange} />}
          {props.type==="Radio"&&
           <>
           {/* <label className='round-radio'>
              <input type="radio" onChange={handleChange} className={"floating-radio has-value"} />
              <span className='label'></span>
              <span className='round-label'>{props.fieldValue1}</span>
           </label>
           <label className='round-radio'>
              <input type="radio" onChange={handleChange} className={"floating-radio has-value"} />
              <span className='label'></span>
              <span className='round-label'>{props.fieldValue2}</span>
           </label> */}
           </>
          }
          {props.type==="Select"&&<select type="select" placeholder="Investment Amount*" name={props.name} value={props.value} onChange={props.func} className={"floating-select has-value"} onFocus={()=>setFocus(true)} onBlur={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>}
          <label className='floating-label'>{props.label}</label>
        </div>
        <div className='error-msg'></div>
      </div>
    </>
  )
}
export const RadioElement = (props) =>{
  return (
    <>
      <label className='round-radio'>
          <input type="radio" 
            name={props.name}
            value={props.fieldValue}
            onChange={props.func} 
            className={"floating-radio has-value"} />
            <span className='label'></span>
          <span className='round-label'>{props.fieldValue}</span>
      </label>
    </>
  )
}
export const CustomRadio = (props) =>{
  return(
    <label className='radio-custom'>
        <input type="radio" name={props.name} value={props.fieldValue} onChange={props.func}  />
        <span className='radio-label'>{props.fieldValue}</span>
    </label>
  )
}

export default InputElement