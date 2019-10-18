import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utilities/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth()
      .get("/colors")
      .then(res => {
        console.log("Successful GET request to colors: ", res);
        setColorList(res.data);
      })
      .catch(err => console.log("Error getting colors: ", err));
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
