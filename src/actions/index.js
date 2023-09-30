import axios from 'axios';

const API_KEY = '';
const ROOT_URL = `https://api.openweathermap.org/data/3.0/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;

    const request = axios.get(url); // promise 반환

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}