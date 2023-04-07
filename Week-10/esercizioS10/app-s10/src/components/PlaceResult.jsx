import { useDispatch } from "react-redux";

const PlaceResult = (props) => {
  const dispatch = useDispatch();

  const saveFav = () => {
    dispatch({
      type: "ADD_FAV",
      payload: props.weather,
    });
  };

  return (
    <div className="text-bg-dark p-2">
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="d-inline-block">{props.weather.name}</h2>
        <button type="button" className="btn fs-3" onClick={saveFav}>
          ⭐
        </button>
      </div>

      <h3>
        Temp: {Math.round(props.weather.main.temp - 273.15)} ° | Min:{" "}
        {Math.round(props.weather.main.temp_min - 273.15)} ° | Max:{" "}
        {Math.round(props.weather.main.temp_max - 273.15)} °
      </h3>
      <h3>
        Condizioni: {props.weather.weather[0].description}{" "}
        <img
          width={60}
          src={`https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`}
        />
      </h3>
      <h3>Umidità: {props.weather.main.humidity}%</h3>
    </div>
  );
};

export default PlaceResult;
