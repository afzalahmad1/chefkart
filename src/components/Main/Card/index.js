import React from "react";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import KitchenRoundedIcon from "@mui/icons-material/KitchenRounded";
import "./styles.css";
import { useNavigate } from "react-router-dom";
const Card = ({ food }) => {
    const navigate = useNavigate();
    const handleClick=(food)=>{
        localStorage.setItem("food",food)
        navigate("/dish")
    }
  console.log(food.name);
  return (
    <div className="card-container" onClick={()=>handleClick(food.name)}>
      <div>
        <div className="food-name">
          <h2>{food.name}</h2>
          <div className="plus">+</div>
          <div className="rating">
            4.2 <StarRateRoundedIcon fontSize="small" />
          </div>
        </div>
        <div className="refrigerator">
          <div className="ref">
            <KitchenRoundedIcon />
            <div>Refrigerator</div>
          </div>
          <div className="ref">
            <KitchenRoundedIcon />
            <div>Refrigerator</div>
          </div>
          <div className="col1"></div>
          <div>
            <div className="ingredient">Ingredients</div>
            <div className="view">View list {">"}</div>
          </div>
        </div>
        <p>Chicket fried in deep tomato sauce with delicious sauce</p>
      </div>
      <div className="right-container">
        <img src={food.image} alt="food" />
        <div id="add">Add</div>
      </div>
    </div>
  );
};

export default Card;
