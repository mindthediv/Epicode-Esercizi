import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavs } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  const addFavourites = (e) => {
    e.preventDefault();
    dispatch(addFavs(data.company_name));
  };
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <form onSubmit={addFavourites} className="d-inline me-2 border-0">
          <button type="submit">❤️</button>
        </form>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
