import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp}`);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=428c5a1922cc616027d52a04d4c4168b&units=metric`;
  axios.get(url).then(handleResponse);
  return <h2>Hello from Weather</h2>;
}
