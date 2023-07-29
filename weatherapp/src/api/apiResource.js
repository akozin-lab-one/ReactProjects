import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5'
})

export const api_Key = '50c4f687408a837a9ec40df2217a866d';