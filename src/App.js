import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import axios from 'axios';
import DropMenu from "./Components/DropMenu";



function App() {

const [ nasaData, SetNasaData ] = useState(" ");

const [date, setDate ] = useState( "2020-03-01");

useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`) 
   .then(response => {
     console.log(response);
     SetNasaData(response.data)
   })
   .catch(err => console.log(err))
 }, [date]);

  return (
    <div className="App">
      
      <Header />

      {/* <DropMenu date={date} setDate={setDate} /> */}

      <Body nasaData= {nasaData} />
      
    </div>
  );

  
}

export default App;
