import React from "react";
import data from "../../../data.json";
import photo from "../../../assets/background.jpg";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import "./styles.css";
const FoodName = () => {
  let name = localStorage.getItem("food") || "Mashala Muglai";
  return (
    <div className="details-container">
      <div className="arrow">{"<"}</div>
      <img src={photo} />
      <div className="text-container">
        <div className="name-container">
          <h1>{name}</h1>
          <div className="rating">
            4.2 <StarRateRoundedIcon fontSize="small" />
          </div>
        </div>

        <p>
          Mughlai Masala is a style of cookery developed <br /> in the Indian
          Subcontinent by <br /> the imperial kitchens of the Mughal Empire
        </p>
        <div className="time2">
            <AccessTimeRoundedIcon />
            <div>{data.timeToPrepare}</div>
        </div>
      </div>
    </div>
  );
};

export default FoodName;
