import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

function CaroMeteo() {
  const [EUlon, setEULon] = useState("");
  const [EUlat, setEULat] = useState("");
  const [CHIlon, setCHILon] = useState("");
  const [CHIlat, setCHILat] = useState("");
  const [USlon, setUSLon] = useState("");
  const [USlat, setUSLat] = useState("");
  const [EUWeather, setEUWeather] = useState(false);
  const [USWeather, setUSWeather] = useState(false);
  const [CHIWeather, setCHIWeather] = useState(false);

  const apiKey = useSelector((state) => state.apiKey.key);
  const EU_WEATHER = `https://api.openweathermap.org/data/2.5/weather?lat=${EUlat}&lon=${EUlon}&appid=${apiKey}&lang=IT`;
  const US_WEATHER = `https://api.openweathermap.org/data/2.5/weather?lat=${USlat}&lon=${USlon}&appid=${apiKey}&lang=IT`;
  const CHI_WEATHER = `https://api.openweathermap.org/data/2.5/weather?lat=${CHIlat}&lon=${CHIlon}&appid=${apiKey}&lang=IT`;
  const LONDON_GEOCODING = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apiKey}`;
  const WASHINGTON_GEOCODING = `http://api.openweathermap.org/geo/1.0/direct?q=Washington&limit=5&appid=${apiKey}`;
  const BEIJING_GEOCODING = `http://api.openweathermap.org/geo/1.0/direct?q=Beijing&limit=5&appid=${apiKey}`;

  const londonFetch = async () => {
    try {
      // prima fetcho i dati della località cercata
      const response = await fetch(LONDON_GEOCODING);
      if (response.ok) {
        const placeData = await response.json();

        setEULat(placeData[0].lat);
        setEULon(placeData[0].lon);
      } else {
        alert("Error fetching geolocation results");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const beijingFetch = async () => {
    try {
      // prima fetcho i dati della località cercata
      const response = await fetch(BEIJING_GEOCODING);
      if (response.ok) {
        const placeData = await response.json();

        setCHILat(placeData[0].lat);
        setCHILon(placeData[0].lon);
      } else {
        alert("Error fetching geolocation results");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const washingtonFetch = async () => {
    try {
      // prima fetcho i dati della località cercata
      const response = await fetch(WASHINGTON_GEOCODING);
      if (response.ok) {
        const placeData = await response.json();

        setUSLat(placeData[0].lat);
        setUSLon(placeData[0].lon);
      } else {
        alert("Error fetching geolocation results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const EUFetch = async () => {
    try {
      // poi fetcho il meteo di quella località grazie alle coordinate
      const backResponse = await fetch(EU_WEATHER);
      if (backResponse.ok) {
        const weatherData = await backResponse.json();
        setEUWeather(weatherData);
      } else {
        console.log("Error fetching weather results");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const CHIfetch = async () => {
    try {
      // poi fetcho il meteo di quella località grazie alle coordinate
      const backResponse = await fetch(CHI_WEATHER);
      if (backResponse.ok) {
        const weatherData = await backResponse.json();
        setCHIWeather(weatherData);
      } else {
        console.log("Error fetching weather results");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const USfetch = async () => {
    try {
      // poi fetcho il meteo di quella località grazie alle coordinate
      const backResponse = await fetch(US_WEATHER);
      if (backResponse.ok) {
        const weatherData = await backResponse.json();
        setUSWeather(weatherData);
      } else {
        console.log("Error fetching weather results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    londonFetch();
    EUFetch();
  }, [EUlat, EUlon]);
  useEffect(() => {
    beijingFetch();
    CHIfetch();
  }, [CHIlat, CHIlon]);
  useEffect(() => {
    washingtonFetch();
    USfetch();
  }, [USlat, USlon]);

  return (
    <Carousel
      className="text-bg-dark p-2"
      style={{ position: "absolute", bottom: 0, left: 0, width: "100vw" }}
    >
      {EUWeather && (
        <Carousel.Item interval={3000}>
          <h2>{EUWeather.name}</h2>
          <h3>
            Condizioni: {EUWeather.weather[0].description}
            <img
              width={60}
              src={`https://openweathermap.org/img/wn/${EUWeather.weather[0].icon}@2x.png`}
            />
          </h3>
          <h4>Temp: {Math.round(EUWeather.main.temp - 273.15)} ° </h4>
        </Carousel.Item>
      )}
      {CHIWeather && (
        <Carousel.Item interval={3000}>
          <h2>{CHIWeather.name}</h2>
          <h3>
            Condizioni: {CHIWeather.weather[0].description}
            <img
              width={60}
              src={`https://openweathermap.org/img/wn/${CHIWeather.weather[0].icon}@2x.png`}
            />
          </h3>
          <h4>Temp: {Math.round(CHIWeather.main.temp - 273.15)} ° </h4>
        </Carousel.Item>
      )}
      {USWeather && (
        <Carousel.Item interval={3000}>
          <h2>{USWeather.name}</h2>
          <h3>
            Condizioni: {USWeather.weather[0].description}
            <img
              width={60}
              src={`https://openweathermap.org/img/wn/${USWeather.weather[0].icon}@2x.png`}
            />
          </h3>
          <h4>Temp: {Math.round(USWeather.main.temp - 273.15)} ° </h4>
        </Carousel.Item>
      )}
    </Carousel>
  );
}

export default CaroMeteo;
