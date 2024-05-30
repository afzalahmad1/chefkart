import React, { useState } from 'react'
import "./styles.css"
const FoodOrigin = () => {
    const [country,setCountry] = useState(["Italian","Indian","Indian","Indian","Indian","Indian","Indian","Indian"])
  return (
    <div className='countries'>
      {
        country.map((val,idx)=>{
            return(
                <div key={idx} className='country'>
                    {val}
                </div>
            )
        })
      }
    </div>
  )
}

export default FoodOrigin
