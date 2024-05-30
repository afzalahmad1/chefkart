import React from 'react'
import Header from '../components/Main/Header'
import FoodOrigin from '../components/Main/FoodOrigin'
import PopularFood from '../components/Main/PopularFood'
import RecommendedFood from '../components/Main/RecommendedFood'

const Main = ({data}) => {
  return (
    <div>
      <div className="fixed">
        <Header />
        <FoodOrigin />
        <PopularFood data={data} />
      </div>
      <RecommendedFood data={data}/>
    </div>
  )
}

export default Main
