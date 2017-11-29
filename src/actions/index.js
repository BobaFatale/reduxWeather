import axios from 'axios';

import { API_KEY } from '../config';

const rootURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${rootURL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}