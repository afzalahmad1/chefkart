import React, { useState } from "react";
import data from "../../../data.json"
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import "./styles.css";
const Ingredients = () => {
    const [extended,setExtended] = useState(false);
  return (
    <div className="ingre-container">
      <div>
        <h1>Ingredients</h1>
        <div className="progress"></div>
      </div>
      <hr style={{marginTop:"2rem"}}/>
      <h1 onClick={()=>setExtended(!extended)}>vegetables ({data.ingredients.vegetables.length}) {!extended? <ExpandLessRoundedIcon />: <ExpandMoreRoundedIcon />} </h1>
      <div>
        
          {
            !extended && data.ingredients.vegetables.map((val,idx)=>{
                return(
                    <div key={idx} className="name-quantity">
                        <div>{val.name}</div>
                        <div>{val.quantity}</div>
                    </div>
                )
            })
          }
        
      </div>
      <div>
        <h1>Appliances</h1>
        <div className="photo-container">
            {
                data.ingredients.appliances.map((val,idx)=>{
                    return(
                        <div key={idx} className="app-image">
                            <img src={val.image} alt="ref" />
                            <div className="name1">{val.name}</div>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
