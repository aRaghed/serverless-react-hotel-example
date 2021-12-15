import React from "react";
import HotelInfo from './main/HotelInfo.js'
import Welcome from "./main/Welcome.js";

const Main = () => {
  return (
    <main id="wrapper">
      <Welcome />
      <HotelInfo />
    </main>
  );
}

export default Main
