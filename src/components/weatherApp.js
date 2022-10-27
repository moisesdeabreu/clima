import { useState, useEffect } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import Loading from "./loading";

import styles from './weatherApp.module.css';

export default function WeatherApp() {

    const [weather, setWeather] = useState(null);

    useEffect(()=>{
        loadInfo('Barcelona');
    }, []); 

    useEffect(()=>{
        document.title = `Weather | ${weather?.location.name ?? ''}`;
    }, [weather]); 

    async function loadInfo(city) {
        try {
            const request = await (await fetch(`${process.env.REACT_APP_URL}?key=${process.env.REACT_APP_KEY}&q=${city}&aqi=no`));
            const json = await request.json();
            
            setWeather(json);
            console.log(json);

        } catch (error) {            
        }
    }

    function handleChangeCity(city) {
        setWeather(null);
        loadInfo(city);
    }

    return (
        <div className={styles.weatherContainer}>
            <WeatherForm onChangeCity={handleChangeCity} />
            {weather ? <WeatherMainInfo weather={weather}/> : <Loading />}
        </div>
    );
}