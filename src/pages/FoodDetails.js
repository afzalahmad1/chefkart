import React from 'react'
import FoodName from '../components/FoodDetails/FoodName'
import "./styles.css"
import Ingredients from '../components/FoodDetails/Ingredients'
const FoodDetails = () => {
  return (
    <div className='background-color'>
      <FoodName />
      <Ingredients />
    </div>
  )
}

export default FoodDetails
