import React, { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form';
import Card from './components/Card';
import { api, api_Key } from './api/apiResource';


const App = () => {
    const [city, setCity] = useState('Yangon');
    const [data, setData] = useState({});

    const fetchWeatherData = async(city_name) => {
        console.log(city_name);
        if (city_name !== undefined) {
            setCity(city_name)
        }
        try {
            const res = await api.get(`/weather?q=${city}&appid=${api_Key}`);
            console.log(res.data);
            setData(res.data);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchWeatherData();
    }, []);

    return ( <
        >
        <
        div className = 'w-full min-vh-100 d-flex justify-content-center align-items-center ' >
        <
        div className = 'shadow-lg w-50 m-3' >
        <
        h3 className = 'text-center my-2 fw-bold ' > Weather App < /h3> <
        Form fetchWeatherData = { fetchWeatherData }
        / >   <
        Card data = { data }
        / > < /div > < /
        div > < / >
    )
}

export default App;