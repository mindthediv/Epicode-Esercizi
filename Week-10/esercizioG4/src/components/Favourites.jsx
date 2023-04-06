import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content);

  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col className="esisto">
          <h1>My Favourite Companies</h1>
          <ListGroup>
            {favourites.map((el, i) => (
              <ListGroup.Item key={`fav-${i}`}>
                <Link className="nav-link" to={`/${el}`}>
                  {el}
                </Link>
                <button
                  type="button"
                  onClick={() =>
                    dispatch({ type: "REMOVE_FAVOURITES", payload: { i } })
                  }
                >
                  ❌
                </button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
