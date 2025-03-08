import React from 'react'
import "./MainContainer.css"
import ProductLeft from './ProductLeft'
import ProductRight from './ProductRight'

const MainContainer = () => {
  return (
    <div className='Main-div'>
        <div className='left-container'>
            <ProductLeft />
        </div>
        <div className='right-container'>
            <ProductRight />
        </div>
    </div>
  )
}

export default MainContainer