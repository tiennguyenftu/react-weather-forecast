import axios from 'axios';

const API_KEY = '3abf3909850bff44544a68c25ce9dd74';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},vn`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}