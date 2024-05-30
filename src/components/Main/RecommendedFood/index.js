import React from 'react'
import './styles.css'
import Card from '../Card'
const RecommendedFood = ({data}) => {
  return (
    <div className='recommended'>
      <div className='rec-container'>
        <h2>Recommended</h2>
        <div id='menu'>Menu</div>
      </div>
      <div>
      {
            data.popularDishes && data.popularDishes.map((food,idx)=>{
                return(
                    <Card food={food} key={idx} />
                )
            })
        }
      </div>
    </div>
  )
}

export default RecommendedFood
