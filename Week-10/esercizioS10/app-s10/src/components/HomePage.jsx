import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PlaceResult from "./PlaceResult";
import { Spinner } from "react-bootstrap";
import CaroMeteo from "./CaroMeteo";

const HomePage = () => {
  const apiKey = useSelector((state) => state.apiKey.key);
  const [isLoading, setIsLoading] = useState(false);
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");
  const [place, setPlace] = useState("");
  const [weather, setWeather] = useState(false);

  const handleChange = (e) => {
    setPlace(e.target.value);
  };

  const API_WEATHER = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=IT`;
  const API_GEOCODING = `http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=${apiKey}`;

  const firstFetch = async () => {
    try {
      // prima fetcho i dati della località cercata
      const response = await fetch(API_GEOCODING);
      if (response.ok) {
        const placeData = await response.json();

        setLat(placeData[0].lat);
        setLon(placeData[0].lon);
      } else {
        alert("Error fetching geolocation results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const secondFetch = async () => {
    try {
      // poi fetcho il meteo di quella località grazie alle coordinate
      const backResponse = await fetch(API_WEATHER);
      if (backResponse.ok) {
        const weatherData = await backResponse.json();
        setWeather(weatherData);
      } else {
        console.log("Error fetching weather results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    firstFetch();
    setIsLoading(false);
  };

  useEffect(() => {
    secondFetch();
  }, [lat, lon]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={10} className="text-center">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={place}
              onChange={handleChange}
              placeholder="Cerca Località"
            />
          </Form>
        </Col>
        <Col xs={10}>
          {isLoading && <Spinner />}

          {weather && <PlaceResult weather={weather} />}
        </Col>
        <Col xs={10}>
          <CaroMeteo />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
