import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {api} from "./Services/api";

function App() {

  api

  console.log(photos);

  return  <div>{photos && <img src={photos[0].url} alt={photos[0].alt} />}</div>;
  
}

export default App;
