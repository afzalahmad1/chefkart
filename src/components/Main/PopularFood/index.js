import React from 'react'
import "./styles.css"
const PopularFood = ({data}) => {
    console.log("food",data.popularDishes);
  return (
    <div  className='pop-container'>
      <h2>Popular Dishes</h2>
      <div className='popular-foods'>
        {
            data.popularDishes && data.popularDishes.map((food,idx)=>{
                return(
                    <div key={idx} className='food-container'>
                        <img src={food.image} alt='food' />
                        <div className='food-name'>{food.name}</div>
                    </div>
                )
            })
        }
      </div>    
    </div>
  )
}

export default PopularFood
