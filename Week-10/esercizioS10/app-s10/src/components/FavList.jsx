import { useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";

const FavList = () => {
  const favList = useSelector((state) => state.favs.content);

  return (
    <ListGroup>
      {favList.map((el) => {
        return (
          <ListGroup.Item className="d-flex align-items-center text-bg-dark">
            <h2 className="d-inline">{el.name}</h2>
            <img
              width={60}
              src={`https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
            />
            <h3>{el.weather[0].description}</h3>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default FavList;
