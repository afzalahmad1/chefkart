import { useEffect, useState } from "react";
import "./App.css";
import Main from "./pages/Main";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import FoodDetails from "./pages/FoodDetails";


function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchFoodData();
  }, []);
  const fetchFoodData = async () => {
    try {
      const res = await fetch(
        `https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/`
      );
      const data = await res.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Main data={data} />} />
          <Route path="/dish" element={<FoodDetails data={data} />} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
