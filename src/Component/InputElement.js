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
    <div>
      <div className='form-field'>
        <div className='form-floating'>
          {props.type==="Input"&&<input type="text" placeholder={props.placeholder} onChange={handleChange} className={focus?"floating-input has-value":"floating-input"} onFocus={()=>setFocus(true)} onBlur={handleChange} />}
          {props.type==="Number"&&<input type="number" placeholder={props.placeholder} onChange={handleChange} className={focus?"floating-input has-value":"floating-input"} onFocus={()=>setFocus(true)} onBlur={handleChange} />}
          {props.type==="Email"&&<input type="email" placeholder={props.placeholder} onChange={handleChange} className={focus?"floating-input has-value":"floating-input"} onFocus={()=>setFocus(true)} onBlur={handleChange} />}
          {props.type==="Date"&&<input type="date" placeholder={props.placeholder} onChange={handleChange} className={"floating-input has-value"} onFocus={()=>setFocus(true)} onBlur={handleChange} />}
          {props.type==="Radio"&&
           <>
           <label className='round-radio'>
              <input type="radio" onChange={handleChange} className={"floating-radio has-value"} />
              <span className='label'></span>
              <span className='round-label'>{props.fieldValue1}</span>
           </label>
           <label className='round-radio'>
              <input type="radio" onChange={handleChange} className={"floating-radio has-value"} />
              <span className='label'></span>
              <span className='round-label'>{props.fieldValue2}</span>
           </label>
           </>
          }
          {props.type=="Select"&&<select type="select" placeholder="Investment Amount*" onChange={handleChange} className={"floating-select has-value"} onFocus={()=>setFocus(true)} onBlur={handleChange}>
            <option>--Select--</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>}
          <label className='floating-label'>{props.label}</label>
        </div>
        <div className='error-msg'></div>
      </div>
    </div>
  )
}

export default InputElement